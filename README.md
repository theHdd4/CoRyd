# CoRyd

CoRyd is a subscription-based mobility platform designed to make everyday travel simpler, more affordable, and more predictable. Instead of optimizing one ride at a time like a traditional ride-hailing app, CoRyd optimizes a rider's complete mobility experience through a membership model. Subscribers can unlock lower fares, priority access, exclusive benefits, and a consistent booking experience across bikes and taxis.

The MVP focuses on the core operational loop: users, drivers, vehicles, ride booking, payments, subscriptions, saved places, notifications, and admin operations. Advanced marketplace features such as wallets, coupons, rewards, surge pricing, referrals, analytics, and loyalty points are intentionally excluded until the core flow is stable.

## High-level architecture

```text
Web Frontend (React/Next.js)
         |
REST API + WebSockets
         |
Backend (NestJS)
         |
PostgreSQL + Redis + Maps API + Razorpay
```

## Repository structure

```text
.
├── apps
│   ├── api                 # NestJS backend API and WebSocket gateway
│   │   ├── prisma
│   │   │   ├── init.sql    # Docker bootstrap entrypoint for database initialization
│   │   │   └── migrations  # PostgreSQL migration SQL files
│   │   └── src             # Backend modules by bounded domain
│   └── web                 # Next.js frontend application
├── docker-compose.yml      # Local development stack
├── package.json            # Monorepo scripts
└── README.md
```

## Services

| Service | Path / Image | Local URL | Responsibility |
| --- | --- | --- | --- |
| Web | `apps/web` | <http://localhost:3000> | Customer/admin-facing React and Next.js UI |
| API | `apps/api` | <http://localhost:4000> | REST API, health endpoint, and ride WebSocket gateway |
| PostgreSQL | `postgres:16-alpine` | `localhost:5432` | Persistent MVP relational data |
| Redis | `redis:7-alpine` | `localhost:6379` | Cache/pub-sub foundation for realtime workflows |

## MVP backend modules

The backend is separated into these modules:

- `Auth`
- `Users`
- `Drivers`
- `Vehicles`
- `Rides`
- `Payments`
- `Subscriptions`
- `Admin`
- `SavedPlaces`
- `Notifications`

## MVP database model

Users are the root entity. There is no separate customer table. If a user has the `Driver` role, driver-specific fields live in the `drivers` table.

```text
Users
├── Drivers
│   └── Vehicles
├── Rides
│   └── Payments
├── Subscriptions
├── SavedPlaces
└── Notifications
```

The initial PostgreSQL schema is stored in `apps/api/prisma/migrations/001_initial_schema.sql` and creates:

- `users`
- `drivers`
- `vehicles`
- `rides`
- `payments`
- `subscriptions`
- `saved_places`
- `notifications`

## Prerequisites

Install these tools before running the app locally:

1. Docker Desktop or Docker Engine with Docker Compose support.
2. Node.js 20 or later if you want to run package scripts outside Docker.
3. npm, bundled with Node.js.

## Step-by-step local setup

### 1. Clone and enter the repository

```bash
git clone <repository-url>
cd CoRyd
```

### 2. Review environment defaults

The Docker Compose stack uses checked-in example environment files:

```bash
cat apps/api/.env.example
cat apps/web/.env.example
```

For local customization, copy them to non-committed local files:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
```

### 3. Start the full Docker stack

```bash
docker compose up --build
```

This starts:

- PostgreSQL on port `5432`.
- Redis on port `6379`.
- NestJS API on port `4000`.
- Next.js web app on port `3000`.

### 4. Verify the API

In a new terminal, run:

```bash
curl http://localhost:4000/health
```

Expected response:

```json
{
  "status": "ok",
  "service": "coryd-api"
}
```

### 5. Open the web app

Visit <http://localhost:3000> in your browser.

## Running PostgreSQL migrations

### First-time database initialization

When the `postgres` container starts with an empty data volume, Docker automatically executes `apps/api/prisma/init.sql`. That file loads the initial migration from:

```text
apps/api/prisma/migrations/001_initial_schema.sql
```

So for a brand-new local database, this is enough:

```bash
docker compose up --build
```

### Re-run migrations against an existing running database

If the stack is already running and you add a new SQL migration file, run the current migration command from the repository root:

```bash
npm run db:migrate
```

The script executes the SQL migration inside the running PostgreSQL container with:

```bash
docker compose exec -T postgres psql -U coryd -d coryd -f /docker-entrypoint-initdb.d/migrations/001_initial_schema.sql
```

> Note: the current MVP has a single initial migration. As future migrations are added, update the `db:migrate` script or replace it with a migration runner that applies all pending files in order.

### Reset the local database and re-apply migrations from scratch

To delete the local PostgreSQL volume and rebuild all containers:

```bash
npm run db:reset
```

This runs:

```bash
docker compose down -v && docker compose up --build
```

Use this only for local development because it deletes the database volume.

## Useful commands

```bash
# Start all services
docker compose up --build

# Stop services without deleting data
docker compose down

# Stop services and delete local database data
docker compose down -v

# Run the current SQL migration against the running postgres container
npm run db:migrate

# Check API health
curl http://localhost:4000/health
```

## Next development steps

1. Replace the temporary in-memory repositories with a database access layer.
2. Add request DTOs, validation, authentication, and role-based authorization.
3. Integrate Maps API for distance and route estimates.
4. Integrate Razorpay for subscription and ride payments.
5. Expand ride dispatch and realtime status workflows with Redis-backed pub/sub.
