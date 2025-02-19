import express from 'express';
import { getTagsData } from '../Controllers/tagController';

const tagRouter = express();

tagRouter.get('/', getTagsData);

export default tagRouter;
