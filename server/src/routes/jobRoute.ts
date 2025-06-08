import { Hono } from "hono";
import { getDb } from "../db/index";
import { job } from "../db/schema/index";

interface CloudflareBindings {
  DB: D1Database;
}

const route = new Hono<{ Bindings: CloudflareBindings }>();

route.post("/create", async (c) => {
  // get the D1 binding from Hono's context
  const d1 = c.env.DB;
  // get the drizzle instance
  const db = getDb(d1);

  try {
    const { name, address, userId } = await c.req.json();
    console.log(name);
    console.log(address);
    console.log(userId);
    if (!name || !address || !userId) {
      return c.json({ message: "All fields are required" }, 400);
    }

    const newJob = await db.insert(job).values({
      name,
      address,
      userId: Number.parseInt(userId),
    }).returning();

    if (!newJob || newJob.length === 0) {
      return c.json({ message: "Failed to create job, no result returned" }, 500);
    }

    return c.json({ message: "Job created successfully", job: newJob }, 201);
  }
  catch (err) {
    console.error("Error creating job", err);
    return c.json({ message: "Internal server error" }, 500);
  }
});

export default route;
