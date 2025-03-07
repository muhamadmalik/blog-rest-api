import express from 'express';
import {
  addArticle,
  getArticleContorller,
  getIndexData,
  getLatestArticlesData,
  postComment,
} from '../Controllers/indexController';
const indexRouter = express.Router();

indexRouter.get('/all', getIndexData);
indexRouter.get('/latest', getLatestArticlesData);
// @ts-ignore

indexRouter.get('/:id', getArticleContorller);
indexRouter.post('/:id/comment', postComment);
// @ts-ignore

indexRouter.post('/add', addArticle);
export default indexRouter;
