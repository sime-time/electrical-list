import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./lib/auth";
import jobRoute from "./routes/jobRoute";

interface CloudflareBindings {
  BETTER_AUTH_SECRET: string;
}

const app = new Hono<{ Bindings: CloudflareBindings }>();

// catch-all to handle better-auth routes
app.on(["POST", "GET"], "/api/auth/**", c => auth.handler(c.req.raw));

// middleware
app.use(cors());

// routes
app.route("/job", jobRoute);

// serve
export default app;
// In Cloudflare Workers, the "listening" is handled by the Cloudflare infrastructure,
// the export default app is how you hand off your Hono application to that infrastructure.
