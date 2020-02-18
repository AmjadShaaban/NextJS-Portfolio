import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
    marginTop: theme.spacing(2),
    height: 160,
    maxHeight: '100%',
    maxWidth: '100%'
  }
}));
const data = {
  title: 'Hi my name is Amjad',
  aboutMe: `I'm a Self-motivated team player with excellent communication skills and above all a curious learner, Im tech savey and most of my aquired skills are self-taught. recently graduated from Trilogy UPenn LPS Full Stack Coding Bootcamp, take a look around my work & if you like what you see please contact me.`,
  image: '/images/profile.png',
  social: [
    {
      name: 'GitHub',
      icon: GitHubIcon,
      url: 'https://github.com/AmjadShaaban'
    },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/daAmjad' },
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      url: 'https://www.linkedin.com/in/amjad-shaaban'
    }
  ]
};

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
