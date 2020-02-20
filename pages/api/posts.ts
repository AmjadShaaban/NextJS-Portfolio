import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../src/data';

const postsAPI = (req: NextApiRequest, res: NextApiResponse) => {
  res.json(data);
};

export default postsAPI;
