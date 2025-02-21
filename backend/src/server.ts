import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import articleRoutes from "../routes/articleRoutes";
import authRoutes from "../routes/authRoutes";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/articles", articleRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
