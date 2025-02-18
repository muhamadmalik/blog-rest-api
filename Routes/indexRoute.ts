import express from 'express';

const indexRouter = express()

indexRouter.get('/', (req, res) => {
    res.send('this is the index page.')
})


export default indexRouter
