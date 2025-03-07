import { connect } from 'http2';
import db from './db';
import { Author } from '@prisma/client';

export type Article = {
  title: string;
  authorId: number;
  text: string;
  tags?: Tag[];
};

export type Comment = {
  text: string;
  username: string;
  articleId: number;
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
        connectOrCreate: (post.tags ?? []).map((tag: Tag) => ({
          where: { id: tag.id },
          create: { name: tag.name },
        })),
      },
    },
    include: { tags: true },
  });
};

export const getArticles = async () => {
  return db.article.findMany({ include: { tags: true , comments: true} });
};

export const getArticle = async (id: number): Promise<Article | null> => {
  return db.article.findUnique({
    where: { id },
    include: {
      comments: true,
      tags: true,
      author: { select: { id: true, username: true } },
    },
  });
};

export const findComments = async () => {
  // return db.comment.delete({ where: { articleId}  } });
};

export const getLatestArticles = async () => {
  return db.article.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
    include: { comments: true, tags: true },
  });
};

export interface GetTagArticlesParams {
  tags: string[];
}

export const getTagArticles = async ({ tags }: GetTagArticlesParams) => {
  return db.article.findMany({
    where: { tags: { some: { name: { in: tags } } } },
    include: { comments: true },
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

export const deleteArticle = async (id: number): Promise<Article | null> => {
  return db.article.delete({ where: { id } });
};

export const deleteArticles = async () => {
  return db.article.deleteMany();
};

export const getComments = async () => {
  return db.comment.findMany();
};
export const removeComments = async () => {
  return db.comment.deleteMany();
};
export const addComment = async (comment: Comment) => {
  return db.comment.create({
    data: {
      text: comment.text,
      username: comment.username,
      article: { connect: { id: comment.articleId } },
    },
  });
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

export const removesTags = async () => {
  return db.tag.deleteMany();
};
