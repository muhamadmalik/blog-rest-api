import express from 'express';
import indexRouter from './Routes/indexRoute';
import aboutRouter from './Routes/aboutRouter';
import tagRouter from './Routes/tagRouter';
import passport from './authentication/passport';
import authRouter from './Routes/authRoutes';
import { getAuthors } from './Models/user';
import cors from 'cors';
import { createArticle, createTag, deleteArticles, getArticle, getArticles, getTagArticles, getTags, removesTags, removeTag } from './Models/articles';
import { getTaggedArticles } from './Controllers/indexController';

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
  // await createArticle({title: 'this is for java', text: 'this is java', authorId: 1, tags: [{id: 2,name: 'java'}, {id: 34, name:'springboot'}]})
//  const blah = await getArticles() 
//  console.log(blah[6])
  // console.log(await getTags());
  // console.log(await getTagArticles([ 'javascript']))
  // deleteArticles()
  // await removesTags()
  
  console.log('Were listening at 3000');
});