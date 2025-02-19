import { getArticles } from "../Models/articles";


export const getIndexData = async (req, res) => {
    const articles = await getArticles();
    res.json(articles);
}