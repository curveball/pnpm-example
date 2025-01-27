# pnpm workspace with @curveball/a12n-server and Next.js

This is a simple example of how to use `@curveball/a12n-server` with a Next.js project.

## Getting Started

`pnpm install` to install dependencies.

In separate Terminal tabs:

`pnpm start:server` to start server (will open at `http://localhost:8531/`) 

`pnpm start:app` Next will open at `http://localhost:3000/`

`pnpm lint` to lint all projects

## Environment variables

In `app/.env` set `NEXT_API_BASE_URL=http://localhost:8531/`