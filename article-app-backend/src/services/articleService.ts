import { db } from "../db/connection";
import { articles } from "../db/schema";
import { fetchArticles } from "../db/utils/fetchArticles";
import { eq } from "drizzle-orm"; // Replace 'drizzle-orm' with the actual module name if different

export const getArticlesByCategory = async (category: string) => {
  return await db
    .select()
    .from(articles)
    .where(eq(articles.category, category));
};

export const fetchAndStoreArticles = async () => {
  const categories = ["Technology", "Health", "Science"];
  for (const category of categories) {
    const articlesData = await fetchArticles(category);
    for (const article of articlesData) {
      await db.insert(articles).values({
        id: article.link,
        title: article.title,
        description: article.snippet,
        url: article.link,
        category,
        publishedAt: new Date(),
      });
    }
  }
};
