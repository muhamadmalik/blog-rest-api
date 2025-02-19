import express from 'express';
import {
  createArticle,
  createAuthor,
  createComment,
  deleteArticle,
  getArticles,
  getAuthor,
  getComments,
  getUserArticles,
} from '../Models/user';

const indexRouter = express();

indexRouter.get('/', async (req, res) => {
  const author = {
    id: 0,
    username: 'david',
    password: 'password',
    createdAt: new Date(),
    articles: [],
    comments: [],
  };
  const article = {
    title: 'Instruction for Next.js',
    text: 'this is the text',
    authorId: 1,
    id: 0,
    comments: [],
    author: author,
    createdAt: new Date(),
  };

  // const user = createAuthor(author)
  const users = await getAuthor(1);
//   console.log(users);
  //   const articles = await createArticle(article);
  const articles = await getArticles();
//   console.log(articles);
  const comments = {
    text: 'this article is very good',
    authorId: 1,
    postId: 2,
    createdAt: new Date(),
    id: 0,
  };
  const comment = await getComments();
//   console.log(comment);
  res.json(articles);
});

export default indexRouter;
