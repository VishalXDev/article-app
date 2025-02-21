import { pgTable, varchar, text, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: varchar('id').primaryKey(),
  email: varchar('email').notNull().unique(),
  categories: jsonb('categories').notNull(), // Array of preferred categories
  createdAt: timestamp('created_at').defaultNow(),
});

export const articles = pgTable('articles', {
  id: varchar('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  url: text('url').notNull(),
  category: text('category').notNull(),
  publishedAt: timestamp('published_at').notNull(),
});