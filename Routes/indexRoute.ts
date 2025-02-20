import express from 'express';
import {
  getArticleContorller,
  getIndexData,
  getLatestArticlesData,
} from '../Controllers/indexController';
const indexRouter = express();

indexRouter.get('/all', getIndexData);
indexRouter.get('/latest', getLatestArticlesData);
indexRouter.get('/:id', getArticleContorller);
export default indexRouter;
