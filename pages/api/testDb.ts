import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../middlewares/db';
import Post from '../../models/Post';

const testDb = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const posts = await Post.find({});
    if (posts.length) {
      return res.status(200).json({ posts });
    } else {
      return res.status(503).json({ err: 'no posts found' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default testDb;
