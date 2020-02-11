import { NextApiRequest, NextApiResponse } from 'next';

const mainFeaturedProject = {
  title: 'Title of a longer featured blog post',
  body:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  repoLink: 'LINK-TO-REPO'
};
const featuredProject1 = {
  title: 'Featured post',
  body:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
  repoLink: 'LINK-TO-REPO'
};

const featuredProject2 = {
  title: 'Post title',
  body:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
  repoLink: 'LINK-TO-REPO'
};
const project1 = {
  title: 'yoyo1',
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam aliquam placeat maiores laudantium porro! Eligendi vel fugiat in nemo, eos vero inventore iusto quam molestiae, libero quis a id.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
  repoLink: 'LINK-TO-REPO'
};

const project2 = {
  title: 'yoyo2',
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam aliquam placeat maiores laudantium porro! Eligendi vel fugiat in nemo, eos vero inventore iusto quam molestiae, libero quis a id.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
  repoLink: 'LINK-TO-REPO'
};
const project3 = {
  title: 'yoyo3',
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam aliquam placeat maiores laudantium porro! Eligendi vel fugiat in nemo, eos vero inventore iusto quam molestiae, libero quis a id.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
  repoLink: 'LINK-TO-REPO'
};
const main = [mainFeaturedProject];
const featured = [featuredProject1, featuredProject2];
const projects = [project1, project2, project3];
const postsAPI = (req: NextApiRequest, res: NextApiResponse) => {
  const posts = [
    { Main: main },
    { Featured: featured },
    { Projects: projects }
  ];
  res.json(posts);
};
export default postsAPI;
