# Smile Avenue (Next.js)

This project is now migrated to **Next.js** with:
- public landing page (`/`)
- form submission endpoint (`POST /submit`)
- admin login page (`/admin/login`)
- admin dashboard (`/admin`)
- credentials managed from `.env`

## 1) Local run

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

Or with Docker:

```bash
docker compose up --build
```

Open: `http://localhost:8888`

## 2) Environment variables

Use `.env` (see `.env.example`):

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `SESSION_SECRET`

For persistent storage on Vercel, add Vercel Postgres env vars:
- `POSTGRES_URL`

## 3) Deploy to Vercel (Free)

1. Push repository to GitHub.
2. In Vercel: **Add New Project** -> import this repo.
3. In Vercel dashboard add a **Postgres** database (Storage tab).
4. Vercel will inject Postgres env vars automatically.
5. Add admin env vars in Project Settings -> Environment Variables:
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
   - `SESSION_SECRET`
6. Deploy.

After deployment:
- website: `/`
- admin login: `/admin/login`

## Notes

- On local machine without Postgres, data is saved to `data/appointments.json`.
- On Vercel, you should use Postgres for persistent data.
