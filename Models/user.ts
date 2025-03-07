import db from './db';
import { Article } from '@prisma/client';

export type Author = {
  username: string;
  password: string;
};

export const createAuthor = async (author: Author) => {
  return await db.author.create({
    data: {
      username: author.username,
      password: author.password,
    },
  });
};

export const getAuthor = async (username: string) => {
  return db.author.findUnique({
    where: { username },
  });
};

export const getAuthors = async () => {
  return db.author.findMany();
};
