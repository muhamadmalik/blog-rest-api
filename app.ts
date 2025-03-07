import express from 'express';
import indexRouter from './Routes/indexRoute';
import tagRouter from './Routes/tagRouter';
import passport from './authentication/passport';
import authRouter from './Routes/authRoutes';
import { getAuthors } from './Models/user';
import cors from 'cors';
import {
  createArticle,
  createTag,
  deleteArticles,
  findComments,
  getArticle,
  getArticles,
  getTagArticles,
  getTags,
  removeComments,
  removesTags,
  removeTag,
} from './Models/articles';
import { getTaggedArticles } from './Controllers/indexController';

const app = express();
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/articles/', indexRouter);
app.use('/api/tags/', tagRouter);
app.use('/api/auth/', authRouter);
app.set('json spaces', 2);

app.listen(3002, '0.0.0.0', () => {
  console.log('Server is running on port 3002');
});
