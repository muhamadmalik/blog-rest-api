import bcrypt from 'bcrypt';
import { createAuthor, getAuthor } from '../Models/user';
import { generateToken } from '../authentication/passport';
import {Request, Response} from 'express'

export const register = async (req: Request, res: Response) => {
    console.log(req.body)
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAuthor = { username: username, password: hashedPassword };
    const author = await createAuthor(newAuthor);
    res.json({ token: generateToken(author), user: author });
  } catch (error) {
    res.status(500).json({ error: 'Error creating the user.' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const author = await getAuthor(username);
    const match = bcrypt.compare(password, author?.password);
    if (!author || !match) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    res.json({ token: generateToken(author), author });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in the user.' });
  }
};

 