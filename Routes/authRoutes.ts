import express from 'express';
import { login, register } from '../Controllers/authController';
import { Request, Response } from 'express';

const authRouter = express.Router();

authRouter.post('/signup', register);
authRouter.post('/login', login);

export default authRouter;
