import db from './db';
import { Author } from '@prisma/client';

export type Article = {
  id: number;
  title: string;
  authorId: number;
  author: Author;
  text: string;
  tags: Tag[];
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

export type Tag = {
  id: number;
  name: string;
  articles: Article[];
};

export const createArticle = async (post: Article) => {
  return db.article.create({
    data: {
      title: post.title,
      text: post.text,
      author: { connect: { id: post.authorId } },
    },
  });
};

export const getArticles = async () => {
  return db.article.findMany({ include: { comments: true } });
};

export const getUserArticles = async (id) => {
  return db.article.findMany({ where: { authorId: id } });
};

export const deleteArticle = async (id) => {
  return db.article.delete({ where: { id } });
};

export const createComment = async (comment: Comment) => {
  return db.comment.create({
    data: {
      text: comment.text,
      authorId: comment.authorId,
      articleId: comment.postId,
    },
  });
};

export const getComments = async () => {
  return db.comment.findMany();
};

export const createTag = async (tag: Tag) => {
  return db.tag.create({ data: { name: tag.name } });
};

export const getTags = async () => {
  return db.tag.findMany();
};
