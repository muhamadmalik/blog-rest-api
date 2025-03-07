import { getTags } from '../Models/articles';
import { Request, Response } from 'express';

interface Tag {
  id: number;
  name: string;
}

export const getTagsData = async (req: Request, res: Response): Promise<void> => {
  const tags: Tag[] = await getTags();
  res.json(tags);
};
