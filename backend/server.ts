import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import articleRoutes from "./routes/articleRoutes";
import authRoutes from "./routes/authRoutes";
import cron from "node-cron";
import { getArticles } from "./controllers/articleController";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Article API", version: "1.0.0" },
  },
  apis: ["./routes/*.ts"], // Ensure it's .ts for TypeScript
};

// API Documentation (Swagger)
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Article API", version: "1.0.0" },
  },
  apis: ["./src/routes/*.ts"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use("/api/articles", articleRoutes);
app.use("/api/auth", authRoutes);

// Schedule Article Fetching Every Hour
cron.schedule("0 * * * *", async () => {
  console.log("Fetching new articles...");
  try {
    await getArticles(
      {
        query: { category: "technology" },
        get: () => "",
        header: () => "",
        accepts: () => "",
        acceptsCharsets: () => "",
        acceptsEncodings: () => "",
        acceptsLanguages: () => "",
        range: () => ({}),
      } as any,
      {
        json: (data: any) => {
          console.log("Fetched articles:", data);
          return data;
        },
        status: (code: number) => ({ json: (data: any) => data }),
        sendStatus: (code: number) => code,
        links: (links: any) => links,
        send: (body: any) => body,
      } as any
    );
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
