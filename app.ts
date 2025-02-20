import express from 'express';
import indexRouter from './Routes/indexRoute';
import aboutRouter from './Routes/aboutRouter';
import tagRouter from './Routes/tagRouter';
import passport from './authentication/passport';
import authRouter from './Routes/authRoutes';
import { getAuthors } from './Models/user';

const app = express();
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api/articles/', indexRouter);
app.use('/api/tags/', tagRouter);
app.use('/api/about/', aboutRouter);
app.use('/api/auth/', authRouter);
app.set('json spaces', 2);


app.listen(3000, async (req, res) => {
  console.log(await getAuthors());
  console.log('Were listening at 3000');
});
  