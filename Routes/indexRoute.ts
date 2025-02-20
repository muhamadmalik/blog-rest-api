import express from 'express';
import {
  getIndexData,
  getLatestArticlesData,
} from '../Controllers/indexController';
const indexRouter = express();

indexRouter.get('/all', getIndexData);
indexRouter.get('/latest', getLatestArticlesData);

export default indexRouter;
