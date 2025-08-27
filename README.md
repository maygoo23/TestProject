# Digital Signage System

Minimal offline-first signage system. This repository contains a monorepo with an API server (NestJS), web dashboard/player (React), and shared types.

## Quick start

```bash
cp .env.example .env
npm install
npx prisma generate -w packages/prisma
npm run dev
```

Or using Docker:

```bash
docker compose up --build
```

The web UI runs on <http://localhost:5173>. Create a display via dashboard, create playlist and items via API (TODO UI), assign playlist to display, then open player URL at `/display/:slug`.

## Docker media volume

Media files are stored at `./media` by default. Mount your persistent volume when running Docker.

## Raspberry Pi kiosk

```
chromium-browser --kiosk http://signage.local/display/lobby
```
