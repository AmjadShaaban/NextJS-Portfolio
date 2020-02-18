import React, { FC, useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import MainFeatured from '../components/Main';
import Featured from '../components/Featured';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { createMuiTheme } from '@material-ui/core/styles';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
const useStyles = makeStyles((theme: Theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

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
          <Header title={`Amjad's Corner`} />
          <main>
            <MainFeatured post={content.main} />
            <Grid container spacing={4}>
              {content.featured.map((post: any) => (
                <Featured key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Sidebar />
              <Projects title='From the repo' posts={content.projects} />
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
