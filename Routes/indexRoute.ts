import express from 'express';
import {
  addArticle,
  getArticleContorller,
  getIndexData,
  getLatestArticlesData,
  postComment,
} from '../Controllers/indexController';
const indexRouter = express();

indexRouter.get('/all', getIndexData);
indexRouter.get('/latest', getLatestArticlesData);
indexRouter.get('/:id', getArticleContorller);
indexRouter.post('/:id/comment', postComment);
indexRouter.post('/add', addArticle);
export default indexRouter;
