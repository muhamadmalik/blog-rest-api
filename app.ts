import express from 'express';
import indexRouter from './Routes/indexRoute';
import aboutRouter from './Routes/aboutRouter';
import tagRouter from './Routes/tagRouter';
import passport from './authentication/passport';
import authRouter from './Routes/authRoutes';
import { getAuthors } from './Models/user';
import cors from 'cors';
import { createArticle, createTag, getArticle, getArticles, getTags, removeTag } from './Models/articles';

const app = express();
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/articles/', indexRouter);
app.use('/api/tags/', tagRouter);
app.use('/api/about/', aboutRouter);
app.use('/api/auth/', authRouter);
app.set('json spaces', 2);

app.listen(3002, '0.0.0.0', async (req, res) => {
  // await removeTag(4)
  // await createTag({name: 'Node.js'})
  // await createArticle({title: 'this article is for javascript', text: 'this is javascript', authorId: 1, tags: [{id: 2,name: 'python'}, {id: 34, name:'Django'}]})
 console.log(await getArticles()) 
  // console.log(await getTags());
  console.log('Were listening at 3000');
});
