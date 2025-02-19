import db from './db';
import { Article } from '@prisma/client';

export type Author = {
  id: number;
  username: string;
  password: string;
  comments: Comment[];
  articles: Article[];
  createdAt: Date;
};


export const createAuthor = async (author: Author) => {
  return await db.author.create({
    data: {
      username: author.username,
      password: author.password,
    },
  });
};

export const getAuthor = async (id) => {
  return db.author.findUnique({
    where: { id },
    include: { articles: { include: { comments: true } } },
  });
};

