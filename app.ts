import express from 'express';
import indexRouter from './Routes/indexRoute';
import aboutRouter from './Routes/aboutRouter';

const app = express();

app.use('/', indexRouter);
app.use('/about', aboutRouter);

app.listen(3000, (req, res) => {
  console.log('Were listening at 3000');
});

