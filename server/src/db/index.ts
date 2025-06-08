import { drizzle } from "drizzle-orm/d1";

interface Env {
  DB: D1Database;
}

// for auth config
export default {
  async fetch(env: Env) {
    const db = drizzle(env.DB);
    return db;
  },
};

export function getDb(d1Binding: D1Database) {
  return drizzle(d1Binding);
}
