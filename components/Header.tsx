import React, { FC } from 'react';
import { HeaderSection } from '../interfaces';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Contact from '../components/Contact';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

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
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));
const Header: FC<{ sections: HeaderSection[]; title: String }> = ({
  sections,
  title
}) => {
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
        {sections.map(section => (
          <Link
            color='inherit'
            noWrap
            key={section.title}
            variant='body2'
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
};
export default Header;
