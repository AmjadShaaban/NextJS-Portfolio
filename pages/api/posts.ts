import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../data/posts';

const postsAPI = (req: NextApiRequest, res: NextApiResponse) => {
  res.json(data);
};

export default postsAPI;
