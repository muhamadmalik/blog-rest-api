import express from 'express';

const aboutRouter = express()

aboutRouter.get('/', (req, res) => {
    res.send('This is the about page.')
})


export default aboutRouter