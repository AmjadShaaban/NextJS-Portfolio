import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { SvgIconProps } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  }
}));

const Sidebar: FC<{
  data: {
    archives: { title: string; url: string }[];
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
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Typography>{aboutMe}</Typography>
      </Paper>
      <Typography variant='h6' gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>
      {archives.map(archive => (
        <Link
          display='block'
          variant='body1'
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}
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
