import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  mainFeatured: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    // marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}));

const Main: FC<{ post: any }> = ({ post }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card
        className={classes.mainFeatured}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className={classes.overlay} />
        <CardContent>
          <div className={classes.mainFeaturedContent} key={post.id}>
            <Typography
              component='h1'
              variant='h3'
              color='inherit'
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              {post.body}
            </Typography>
            <Link variant='subtitle1' color='inherit' href={post.repoLink}>
              Read more...
            </Link>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default Main;
