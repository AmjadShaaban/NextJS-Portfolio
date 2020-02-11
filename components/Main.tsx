import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme: Theme) => ({
  markdown: {
    padding: theme.spacing(3, 0)
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  }
}));

const Main: FC<{
  posts: { id: number; title: string; body: string }[];
  title: string;
}> = ({ posts, title }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8}>
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      {posts.map(post => (
        <>
          <Grid item key={post.id}>
            <CardActionArea component='a' href='#'>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
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
                      variant='caption'
                    >
                      {post.body}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>
          <br />
        </>
      ))}
    </Grid>
  );
};
export default Main;
