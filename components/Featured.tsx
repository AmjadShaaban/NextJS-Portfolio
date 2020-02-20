import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

const Featured: FC<{ post: any }> = ({ post }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' href={post.repoLink}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {post.title}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {post.date}
              </Typography>
              <Typography variant='subtitle1' paragraph>
                {post.body}
              </Typography>
              <Typography variant='subtitle1' color='primary'>
                Read more...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default Featured;
