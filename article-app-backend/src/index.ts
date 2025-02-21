import express from 'express';
import dotenv from 'dotenv';
import articleRoutes from './routes/articleRoutes';
import { fetchAndStoreArticles } from './services/articleService';
import cron from 'node-cron';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', articleRoutes);

// Fetch articles every hour
cron.schedule('0 * * * *', fetchAndStoreArticles);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});