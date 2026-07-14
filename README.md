# Smile Avenue (Next.js)

This project is now migrated to **Next.js** with:
- public landing page (`/`)
- form submission endpoint that sends appointments to Telegram (`POST /submit`)
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
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## 3) Deploy to Vercel (Free)

1. Push repository to GitHub.
2. In Vercel: **Add New Project** -> import this repo.
3. Add admin env vars in Project Settings -> Environment Variables:
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
   - `SESSION_SECRET`
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
4. Deploy.

After deployment:
- website: `/`
- admin login: `/admin/login`

## Telegram setup

1. Create a bot with `@BotFather` and copy its token into `TELEGRAM_BOT_TOKEN`.
2. Start a private chat with the bot, or add it to the destination group.
3. Put that chat or group ID into `TELEGRAM_CHAT_ID`.
4. Redeploy after adding or changing Vercel environment variables.

The bot token is used only by the server-side `/submit` route and is never sent to the browser.
