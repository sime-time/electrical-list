# vite-hono-mono
inspired by bhvr.dev monorepo

this is a boilerplate for my personal SPA projects in 2025

## stack
```
client:
vue
vite
vue-router
tailwind
daisy ui
pinia
-> cloudflare pages

server:
hono
drizzle
sqlite (cloudflare d1)
-> cloudflare workers

both:
typescript
zod
bun
eslint
better auth
wrangler
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

To change the name of the server deployment on cloudflare workers:
1. Go to server/wrangler.jsonc
2. Change the name field

To get the cloudflare workers env variables:
https://orm.drizzle.team/docs/guides/d1-http-with-drizzle-kit

This project was created using `bun init` in bun v1.2.15. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
