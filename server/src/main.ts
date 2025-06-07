import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/hello", async (c) => {
  const data = {
    message: "Hello",
    success: true,
  };

  return c.json(data, { status: 200 });
});

export default app;
