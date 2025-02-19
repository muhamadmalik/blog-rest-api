import { getTags } from '../Models/articles';

export const getTagsData = async (req, res) => {
  const tags = await getTags();
  res.json(tags);
};
