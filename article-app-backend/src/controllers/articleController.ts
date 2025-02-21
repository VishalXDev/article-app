import { Request, Response } from "express";
import { getArticlesByCategory } from "../services/articleService";

export const getArticles = async (req: Request, res: Response) => {
  const { category } = req.query;
  const articles = await getArticlesByCategory(category as string);
  res.json(articles);
};
