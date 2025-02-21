import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const client = postgres(process.env.DATABASE_URL);
export const db = drizzle(client);
