import { pgTable, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  url: text("url").notNull(),
  category: text("category").notNull(),
  publishedAt: timestamp("published_at").notNull(),
});
