import bcrypt from 'bcrypt';
import { createAuthor, getAuthor } from '../Models/user';
import { generateToken } from '../authentication/passport';
import {Request, Response, NextFunction} from 'express'

export const register = async (req: Request, res: Response) => {
    console.log(req.body)
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAuthor = { username: username, password: hashedPassword };
    const author = await createAuthor(newAuthor);
    res.json({ token: generateToken({ ...author, id: author.id.toString() }), user: author });
  } catch (error) {
    res.status(500).json({ error: 'Error creating the user.' });
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username, password } = req.body;

  try {
    const author = await getAuthor(username);

    if (!author || !author.password) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }

    const match = await bcrypt.compare(password, author.password);
    if (!match) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }

    const token = generateToken({ id: author.id.toString() });

    res.json({ token, author });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Error logging in the user.' });
  }
};

 