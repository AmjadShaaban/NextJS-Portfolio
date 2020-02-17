import { NextApiRequest, NextApiResponse } from 'next';

const mainFeaturedProject = {
  id: 0,
  title: 'Project PoS',
  body: `Point of Sale MERN Stack application, presented as my bootcamp's final project.
    One Man project MVP Demo developed in 4 weeks time. Functional ordering menu with order and invoicing model.`,
  image: '/images/ReactTS.png',
  repoLink: 'LINK-TO-REPO'
};
const featuredProject1 = {
  id: 1,
  title: 'Featured post',
  body:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://source.unsplash.com/random',
  repoLink: 'LINK-TO-REPO'
};

const featuredProject2 = {
  id: 2,
  title: 'Post title',
  body:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://source.unsplash.com/random',
  repoLink: 'LINK-TO-REPO'
};
const project1 = {
  id: 3,
  title: 'yoyo1',
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam aliquam placeat maiores laudantium porro! Eligendi vel fugiat in nemo, eos vero inventore iusto quam molestiae, libero quis a id.',
  image: 'https://source.unsplash.com/random',
  repoLink: 'LINK-TO-REPO'
};

const project2 = {
  id: 4,
  title: 'yoyo2',
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam aliquam placeat maiores laudantium porro! Eligendi vel fugiat in nemo, eos vero inventore iusto quam molestiae, libero quis a id.',
  image: 'https://source.unsplash.com/random',
  repoLink: 'LINK-TO-REPO'
};
const project3 = {
  id: 5,
  title: 'yoyo3',
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam aliquam placeat maiores laudantium porro! Eligendi vel fugiat in nemo, eos vero inventore iusto quam molestiae, libero quis a id.',
  image: 'https://source.unsplash.com/random',
  repoLink: 'LINK-TO-REPO'
};

const main = mainFeaturedProject;
const featured = [featuredProject1, featuredProject2];
const projects = [project1, project2, project3];
const postsAPI = (req: NextApiRequest, res: NextApiResponse) => {
  const posts = { main, featured, projects };
  res.json(posts);
};
export default postsAPI;
