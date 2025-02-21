import { pgTable, varchar, text, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { Sequelize, DataTypes } from "sequelize";

export const users = pgTable('users', {
  id: varchar('id').primaryKey(),
  email: varchar('email').notNull().unique(),
  categories: jsonb('categories').notNull(), // Array of preferred categories
  createdAt: timestamp('created_at').defaultNow(),
});

export const pgArticles = pgTable('articles', {
  id: varchar('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  url: text('url').notNull(),
  category: text('category').notNull(),
  publishedAt: timestamp('published_at').notNull(),
});

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
});

export const db = {
  insert: (model: any) => ({
    values: async (data: any) => {
      await model.bulkCreate(data);
    },
  }),
};

sequelize.sync();

export const articles = sequelize.define("Article", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});