import { getArticle, getArticles, getLatestArticles } from '../Models/articles';

export const getIndexData = async (req, res) => {
  const articles = await getArticles();
  res.json(articles);
};

export const getLatestArticlesData = async (req, res) => {
  const latestArticles = await getLatestArticles();
  res.json(latestArticles);
};

export const getArticleContorller = async (req, res) => {
  const id = parseInt(req.params.id);
  const article = await getArticle(id);
  res.json(article);
};
