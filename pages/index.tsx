import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import Main from '../components/Main';
import Featured from '../components/Featured';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { createMuiTheme } from '@material-ui/core/styles';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import Head from 'next/head';
import data from '../data/posts';

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

  const classes = useStyles();

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <link rel='shortcut icon' href='/images/favicon.ico' />
        </Head>
        <Container maxWidth='lg'>
          <Header title={`Amjad's Corner`} />
          <main>
            <Grid container spacing={5}>
              <Main post={data.main} />
            </Grid>
            <Grid container spacing={4}>
              {data.featured.map((post: any) => (
                <Featured key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Sidebar />
              <Projects title='From the repo' posts={data.projects} />
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
