import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import MainFeatured from '../components/MainFeatured';
import Featured from '../components/Featured';
import Main from '../components/Main';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { createMuiTheme } from '@material-ui/core/styles';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import * as colors from '@material-ui/core/colors/';

const useStyles = makeStyles((theme: Theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' }
];

const mainFeaturedProject = {
  id: 0,
  title: 'Project Point of Sale',
  body: `Bootcamps final project, Also my 1st attempt at typescript, still Work in progress`,
  image: '/images/ReactTS.png',
  imgText: 'Project PoS',
  repoLink: 'LINK-TO-REPO',
  hostedLink: ''
};

const featuredPosts = [
  {
    id: 1,
    title: 'Featured post',
    body:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    repoLink: 'LINK-TO-REPO',
    hostedLink: ''
  },
  {
    id: 2,
    title: 'Post title',
    body:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    repoLink: 'LINK-TO-REPO',
    hostedLink: ''
  }
];
const post1 = {
  id: 3,
  title: 'yoyo1',
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam aliquam placeat maiores laudantium porro! Eligendi vel fugiat in nemo, eos vero inventore iusto quam molestiae, libero quis a id.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
  repoLink: 'LINK-TO-REPO',
  hostedLink: ''
};

const post2 = {
  id: 4,
  title: 'yoyo2',
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam aliquam placeat maiores laudantium porro! Eligendi vel fugiat in nemo, eos vero inventore iusto quam molestiae, libero quis a id.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
  repoLink: 'LINK-TO-REPO',
  hostedLink: ''
};
const post3 = {
  id: 5,
  title: 'yoyo3',
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam aliquam placeat maiores laudantium porro! Eligendi vel fugiat in nemo, eos vero inventore iusto quam molestiae, libero quis a id.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
  repoLink: 'LINK-TO-REPO',
  hostedLink: ''
};
const post4 = {
  id: 6,
  title: 'yoyo4',
  body:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam aliquam placeat maiores laudantium porro! Eligendi vel fugiat in nemo, eos vero inventore iusto quam molestiae, libero quis a id.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text',
  repoLink: 'LINK-TO-REPO',
  hostedLink: ''
};

const posts = [post1, post2, post3, post4];

const sidebar = {
  title: 'Hi my name is Amjad',
  aboutMe: `I'm a Self-motivated team player with excellent communication skills and above all a curious learner, Im tech savey and most of my aquired skills are self-taught. recently graduated from UPenn LPS Full Stack Coding Bootcamp, take a look around my work & if you like what you see please contact me.`,
  archives: sections,
  social: [
    {
      name: 'GitHub',
      icon: GitHubIcon,
      url: 'https://github.com/AmjadShaaban'
    },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/daAmjad' },
    {
      name: 'LinkedIn',
      icon: FacebookIcon,
      url: 'https://www.linkedin.com/in/amjad-shaaban'
    }
  ]
};

const index: FC<{}> = () => {
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#000000' },
      type: 'light'
    }
  });
  const classes = useStyles();

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Header title='My Corner' sections={sections} />
          <main>
            <MainFeatured post={mainFeaturedProject} />
            <Grid container spacing={4}>
              {featuredPosts.map(post => (
                <Featured key={post.title} post={post} />
              ))}{' '}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Sidebar data={sidebar} />
              <Main title='From the repo' posts={posts} />
            </Grid>
          </main>
        </Container>
        <Footer
          title={`Let's develop the world`}
          description={`My Corner is eniterly written in NextJS 🧡`}
        />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default index;
