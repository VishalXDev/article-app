import axios from "axios";
import { db } from "../db";
import { articles } from "../drizzle/schema";

const API_KEY = process.env.SERPER_API_KEY; // Add in .env

async function fetchArticles() {
    try {
        const response = await axios.post(
            "https://google.serper.dev/news",
            { q: "technology", num: 10 },  // Change category dynamically
            { headers: { "X-API-KEY": API_KEY } }
        );

        const newArticles = response.data.news.map((item: any) => ({
            title: item.title,
            url: item.link,
            category: "technology",  // Change category dynamically
        }));

        await db.insert(articles).values(newArticles);
        console.log("Articles saved to database.");
    } catch (error) {
        console.error("Error fetching articles:", error);
    }
}

export default fetchArticles;
