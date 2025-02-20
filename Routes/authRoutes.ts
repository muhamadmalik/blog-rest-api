import express from 'express';

const authRouter = express();

authRouter.post('/signup');
authRouter.post('/login');

export default authRouter;
