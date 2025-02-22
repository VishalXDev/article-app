import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, {
  schema: {
    articles: {
      title: 'text',
      link: 'text',
      snippet: 'text',
      category: 'text',
    },
  },
});
