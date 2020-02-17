import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { SvgIconProps } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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

const Sidebar: FC<{
  data: {
    archives: { image: string; imageTitle: string };
    aboutMe: string;
    social: {
      name: string;
      icon: (props: SvgIconProps) => any;
      url: string;
    }[];
    title: string;
  };
}> = ({ data }) => {
  const classes = useStyles();
  const { archives, aboutMe, social, title } = data;
  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.sidebarAboutBox}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={archives.image}
            title={archives.imageTitle}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {aboutMe}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Typography variant='h6' gutterBottom></Typography>
      <Typography></Typography>
      <Typography variant='h6' gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map(network => (
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
