import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme: Theme) => ({
  markdown: {
    padding: theme.spacing(3, 0)
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}));

const Projects: FC<{
  posts: {
    id: number;
    title: string;
    body: string;
    image: string;
    repoLink: string;
  }[];
  title: string;
}> = ({ posts, title }) => {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <Grid item xs={12} md={8}>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        {posts.map(post => (
          <div key={post.id}>
            <Grid item>
              <CardActionArea component='a' href={post.repoLink}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={post.image} />
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
                      <Typography variant='subtitle1' color='primary'>
                        Read more...
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </Grid>
            <br />
          </div>
        ))}
      </Grid>
    </Hidden>
  );
};
export default Projects;
