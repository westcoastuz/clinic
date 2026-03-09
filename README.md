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

## 3) Deploy to Vercel (Free)

1. Push repository to GitHub.
2. In Vercel: **Add New Project** -> import this repo.
3. Add admin env vars in Project Settings -> Environment Variables:
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
   - `SESSION_SECRET`
4. Deploy.

After deployment:
- website: `/`
- admin login: `/admin/login`

## Notes

- Form data is saved in a JSON file on the server:
  - local: `data/appointments.json`
  - Vercel: `/tmp/appointments.json`
- This file is not in `public/`, so it is not accessible via a direct URL.
- Vercel `/tmp` is ephemeral (can reset between deployments/restarts). For long-term persistence, use an external database later.
