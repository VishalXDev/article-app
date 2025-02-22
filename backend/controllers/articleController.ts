import { Request, Response } from "express";
import { db } from "../../config/db";

export const getArticles = async (req: Request, res: Response) => {
  try {
    const articles = await db.query("SELECT * FROM articles");
    res.json(articles.rows);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
