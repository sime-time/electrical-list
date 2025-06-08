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
      // because we are using serial integers for primary keys
      generateId: false,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});
