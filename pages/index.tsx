import React, { FC, useEffect, useState } from 'react';
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

const sidebar = {
  title: 'Hi my name is Amjad',
  aboutMe: `I'm a Self-motivated team player with excellent communication skills and above all a curious learner, Im tech savey and most of my aquired skills are self-taught. recently graduated from UPenn LPS Full Stack Coding Bootcamp, take a look around my work & if you like what you see please contact me.`,
  archives: { image: '/images/profile.png', imageTitle: 'something' },
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

  const [content, setContent] = useState({
    main: {},
    featured: [],
    projects: []
  });

  const getContent = async () => {
    const response = await fetch('/api/posts').then(r => r.json());
    setContent(response);
  };

  const classes = useStyles();
  useEffect(() => {
    getContent();
  }, [content !== undefined]);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='lg'>
          <Header title='My Corner' sections={sections} />
          <main>
            <MainFeatured post={content.main} />
            <Grid container spacing={4}>
              {content.featured.map((post: any) => (
                <Featured key={post.title} post={post} />
              ))}{' '}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Sidebar data={sidebar} />
              <Main title='From the repo' posts={content.projects} />
            </Grid>
          </main>
        </Container>
        <Footer
          title={`Let's develop something amazing`}
          description={`My Corner is built with NextJS 🧡`}
        />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default index;
