import express from 'express';
import { getArticles } from '../controllers/articleController';

const router = express.Router();

router.get('/articles', getArticles);

export default router;