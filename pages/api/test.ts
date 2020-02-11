import { NextApiRequest, NextApiResponse } from 'next';

const testRoute = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  console.log(req.query);
  console.log(req.cookies);

  res.json('Hello World');
};

export default testRoute;
