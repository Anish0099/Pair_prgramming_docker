import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgresql://neondb_owner:bUP07hfLJywX@ep-bitter-wind-a1yy50d4.ap-southeast-1.aws.neon.tech/monty?sslmode=require",
  },
  verbose: true,
  strict: true,
});
