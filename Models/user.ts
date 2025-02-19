import db from './db';
export type Author = {
  id: number;
  username: string;
  password: string;
  comments: Comment[];
  articles: Article[];
  createdAt: Date;
};

export type Article = {
  id: number;
  title: string;
  authorId: number;
  author: Author;
  comments: Comment[];
  createdAt: Date;
};

export type Comment = {
  id: number;
  text: string;
  authorId: number;
  author: Author;
  postId: number;
  post: Article;
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
  return db.author.findUnique({ where: { id } });
};

export const createArticle = async (post: Article) => {
  return db.article.create({
    data: { title: post.title, author: { connect: { id: post.authorId } } },
  });
};

export const getArticles = async () => {
  return db.article.findMany();
};

export const getUserArticles = async (id) => {
  return db.article.findMany({ where: { authorId: id } });
};

export const deleteArticle = async (id) => {
  return db.article.delete({ where: { id } });
};

