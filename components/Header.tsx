import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Contact from '../components/Contact';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Clock from 'react-live-clock';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  }
}));
const Header: FC<{ title: String }> = ({ title }) => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button
          variant='outlined'
          size='small'
          onClick={() => {
            window.open('https://github.com/AmjadShaaban', '_blank');
          }}
        >
          <GitHubIcon />
        </Button>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <Contact />
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        className={classes.toolbarSecondary}
      >
        <Typography>Welcome to my humble web corner </Typography>
        <Clock format={'dddd, MMMM Do YYYY, h:mm:ss a'} ticking />
      </Toolbar>
    </>
  );
};
export default Header;
