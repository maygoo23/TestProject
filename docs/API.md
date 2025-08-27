# API Reference

Base URL: `/api`

## Auth
- `POST /auth/login` {email,password}
- `POST /auth/logout`
- `GET /auth/me`

## Users (admin)
- `GET /users`
- `POST /users` {email,password,role}

## Displays
- `GET /displays`
- `POST /displays` {name,slug,timezone}
- `GET /displays/:slug/schedule`
- `POST /displays/:slug/heartbeat`

## Playlists
- `GET /playlists`
- `POST /playlists` {name}
- `POST /playlists/:id/items` {items: []}
