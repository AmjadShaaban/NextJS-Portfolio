import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import data from '../src/data/sidebar';

const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  root: {
    maxWidth: 345
  },
  media: {
    marginTop: theme.spacing(3),
    height: 180,
    maxWidth: 300,
    margin: 'auto'
  }
}));
const Sidebar: FC<{}> = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.sidebarAboutBox}>
        <CardActionArea>
          <CardMedia className={classes.media} image={data.image} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {data.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {data.aboutMe}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Typography variant='h6' gutterBottom></Typography>
      <Typography></Typography>
      <Typography variant='h6' gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {data.social.map(network => (
        <Link
          target='_blank'
          rel='noopener'
          display='block'
          variant='body1'
          href={network.url}
          key={network.name}
        >
          <Grid container direction='row' spacing={1} alignItems='center'>
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;
