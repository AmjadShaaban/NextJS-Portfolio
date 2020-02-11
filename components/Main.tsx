import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) => ({
  markdown: {
    padding: theme.spacing(3, 0)
  }
}));

const Main: FC<{ posts: { title: string; body: string }[]; title: string }> = ({
  posts,
  title
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8}>
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map(post => (
        <>
          <Typography
            key={post.title}
            className={classes.markdown}
            align='left'
            component='h2'
            variant='h5'
          >
            {post.title}
          </Typography>
          <Typography
            key={post.body}
            align='left'
            component='p'
            variant='subtitle1'
          >
            {post.body}
          </Typography>
          <Divider light variant='middle' />

          {/* <Divider /> */}
        </>
      ))}
    </Grid>
  );
};
export default Main;
