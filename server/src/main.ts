import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./lib/auth";

interface CloudflareBindings {
  BETTER_AUTH_SECRET: string;
}

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.use(cors());

// catch-all to handle better-auth routes
app.on(["POST", "GET"], "/api/auth/**", c => auth.handler(c.req.raw));

app.get("/", (c) => {
  return c.text("Hello World");
});

app.get("/hello", async (c) => {
  const data = {
    message: "Hello",
    success: true,
  };

  return c.json(data, { status: 200 });
});

// In Cloudflare Workers, the "listening" is handled by the Cloudflare infrastructure,
// the export default app is how you hand off your Hono application to that infrastructure.
export default app;
