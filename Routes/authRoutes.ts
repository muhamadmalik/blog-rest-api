import express from 'express';
import { login, register } from '../Controllers/authController';

const authRouter = express();

authRouter.post('/signup', register);
authRouter.post('/login', login);

export default authRouter;
