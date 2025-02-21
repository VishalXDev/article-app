import express from 'express';
import { getArticles } from '../src/controllers/articleController';

const router = express.Router();

router.get('/articles', getArticles);

export default router;