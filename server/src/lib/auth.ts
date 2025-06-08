import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db/index";
import * as schema from "../db/schema/index";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
  }),
  advanced: {
    database: {
      // don't use better-auth's default uuid generation
      // because we will use sql-lite's primary key integers
      generateId: false,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});
