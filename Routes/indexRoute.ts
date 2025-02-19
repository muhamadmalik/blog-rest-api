import express from 'express';
import { getIndexData } from '../Controllers/indexController';
const indexRouter = express();

indexRouter.get('/', getIndexData);

export default indexRouter;
