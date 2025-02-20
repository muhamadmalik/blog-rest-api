import express from 'express';
import indexRouter from './Routes/indexRoute';
import aboutRouter from './Routes/aboutRouter';
import tagRouter from './Routes/tagRouter';

const app = express();

app.use('/api/articles/', indexRouter);
app.use('/api/tags/', tagRouter);
app.use('/api/about/', aboutRouter);

app.set('json spaces', 2);



app.listen(3000, (req, res) => {
  console.log('Were listening at 3000');
});
