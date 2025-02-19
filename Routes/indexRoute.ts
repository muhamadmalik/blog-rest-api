import express from 'express';
import { createArticle, createAuthor, deleteArticle, getArticles, getAuthor, getUserArticles } from '../Models/user';

const indexRouter = express()

indexRouter.get('/', async (req, res) => {
    const author = {id: 0, username: 'david', password: 'password', createdAt: new Date(), articles: [], comments: []}
    const article = {
        title: "Instruction for Next.js",
        
        authorId: 1,
        createdAt : new Date()
      }
      
    // const user = createAuthor(author)
    const users = await getAuthor(1)
    console.log(users)
    const articles = await getArticles()
      console.log(articles)
    res.send('this is the index page.')
})


export default indexRouter
