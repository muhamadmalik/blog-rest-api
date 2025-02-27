import db from './db';
import { Author } from '@prisma/client';

export type Article = {
  title: string;
  authorId: number;
  text: string;
  tags: Tag[];
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
  // articles: Article[];
};

export const createArticle = async (post: Article) => {
  return db.article.create({
    data: {
      title: post.title,
      text: post.text,
      author: { connect: { id: post.authorId } },
      tags: {
        connectOrCreate: post.tags.map((tag: Tag) => ({
          where: { id: tag.id },
          create: { name: tag.name },
        })),
      },
    },
    include: { tags: true },
  });
};

export const getArticles = async () => {
  return db.article.findMany({ include: { comments: true, tags: true } });
};

export const getArticle = async (id) => {
  return db.article.findUnique({ where: { id }, include: { comments: true, tags: true } });
};

export const getLatestArticles = async () => {
  return db.article.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
    include: { comments: true },
  });
};

export const getTagArticles = async (tags) => {
  return db.article.findMany({
    where: { tags: { some: { name: { in: tags } } } },
  });
};

export const searchArticles = async (query: string) => {
  return db.article.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { text: { contains: query, mode: 'insensitive' } },
      ],
    },
  });
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

export const removeTag = async (id: number) => {
  return db.tag.delete({ where: { id } });
};
