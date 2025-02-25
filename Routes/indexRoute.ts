import express from 'express';
import {
  addArticle,
  getArticleContorller,
  getIndexData,
  getLatestArticlesData,
} from '../Controllers/indexController';
const indexRouter = express();

indexRouter.get('/all', getIndexData);
indexRouter.get('/latest', getLatestArticlesData);
indexRouter.get('/:id', getArticleContorller);
indexRouter.post('/add', addArticle);
export default indexRouter;
