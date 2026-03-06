import os
import secrets
import sqlite3
from contextlib import asynccontextmanager
from datetime import datetime

from fastapi import FastAPI, Form, HTTPException, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.middleware.sessions import SessionMiddleware

SECRET_KEY = os.getenv("SECRET_KEY", "change-this-secret-in-production-please")
DB_PATH = "appointments.db"


# ── Database ──────────────────────────────────────────────────────────────────

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS appointments (
            id          INTEGER PRIMARY KEY AUTOINCREMENT,
            phone       TEXT    NOT NULL,
            name        TEXT    NOT NULL,
            procedure   TEXT    NOT NULL,
            created_at  TEXT    NOT NULL
        )
    """)
    conn.commit()
    conn.close()


# ── App ───────────────────────────────────────────────────────────────────────

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(title="Smile Avenue Dental Clinic", lifespan=lifespan)

app.add_middleware(
    SessionMiddleware,
    secret_key=SECRET_KEY,
    session_cookie="sa_session",
    max_age=3600,        # 1 hour
    https_only=False,    # set True in production with HTTPS
    same_site="lax",
)

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    csrf_token = secrets.token_hex(32)
    request.session["csrf_token"] = csrf_token
    return templates.TemplateResponse(
        "index.html", {"request": request, "csrf_token": csrf_token}
    )


@app.post("/submit")
async def submit(
    request: Request,
    phone: str = Form(...),
    name: str = Form(...),
    procedure: str = Form(...),
    csrf_token: str = Form(...),
):
    # ── CSRF validation ──────────────────────────────────────────────────────
    session_token = request.session.get("csrf_token")
    if not session_token or not secrets.compare_digest(session_token, csrf_token):
        raise HTTPException(status_code=403, detail="Noto'g'ri CSRF token")

    # Rotate token after use (prevents token-reuse attacks)
    request.session["csrf_token"] = secrets.token_hex(32)

    # ── Basic input validation ───────────────────────────────────────────────
    phone = phone.strip()
    name = name.strip()
    procedure = procedure.strip()

    if not phone or not name or not procedure:
        raise HTTPException(status_code=422, detail="Barcha maydonlarni to'ldiring")

    if len(name) > 100 or len(phone) > 20 or len(procedure) > 100:
        raise HTTPException(status_code=422, detail="Kiritilgan ma'lumot juda uzun")

    # ── Persist to SQLite ────────────────────────────────────────────────────
    conn = get_db()
    try:
        conn.execute(
            "INSERT INTO appointments (phone, name, procedure, created_at) VALUES (?, ?, ?, ?)",
            (phone, name, procedure, datetime.now().isoformat(timespec="seconds")),
        )
        conn.commit()
    finally:
        conn.close()

    return JSONResponse({"success": True, "message": "So'rovingiz qabul qilindi!"})


# ── Admin: list appointments ──────────────────────────────────────────────────

@app.get("/admin/appointments")
async def list_appointments(request: Request):
    """
    Simple admin endpoint — protect with a reverse-proxy auth header or
    add HTTP Basic Auth before deploying to production.
    """
    conn = get_db()
    rows = conn.execute(
        "SELECT id, phone, name, procedure, created_at FROM appointments ORDER BY id DESC"
    ).fetchall()
    conn.close()
    return JSONResponse([dict(r) for r in rows])


# ── Run ───────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8888, reload=True)
