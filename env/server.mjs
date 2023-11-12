/* LIBRARIES */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env_server = createEnv({
  server: {
    /* ENVIRONMENT */
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    /* DATABASE */
    DATABASE_URL: z.string().min(1),
  },
  runtimeEnv:{
    /* ENVIRONMENT */
    NODE_ENV: process.env.NODE_ENV,
    /* DATABASE */
    DATABASE_URL: process.env.DATABASE_URL,
  },
});