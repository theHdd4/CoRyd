# CoRyd

CoRyd is a subscription-based mobility platform for predictable everyday travel across bikes and taxis.

## Architecture

```text
Web Frontend (React/Next.js)
         |
REST API + WebSockets
         |
Backend (NestJS)
         |
PostgreSQL + Redis + Maps API + Razorpay
```

## Services

- `apps/web`: Next.js web frontend.
- `apps/api`: NestJS REST API and WebSocket gateway.
- `postgres`: persistent MVP database.
- `redis`: cache/pub-sub foundation for realtime workflows.

## Run locally

1. Copy environment defaults if needed:
   ```bash
   cp apps/api/.env.example apps/api/.env
   cp apps/web/.env.example apps/web/.env.local
   ```
2. Start all services:
   ```bash
   docker compose up --build
   ```
3. Open:
   - Web: <http://localhost:3000>
   - API health: <http://localhost:4000/health>

## MVP domain model

Users are the root entity. Drivers extend users with driver-specific data, vehicles belong to drivers, rides connect customers and drivers, payments belong to rides, and subscriptions, saved places, and notifications belong to users.
