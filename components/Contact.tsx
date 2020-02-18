import React, { useState } from 'react';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const sendEmail = async () => {
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    handleClose();
  };
  return (
    <div>
      <Button variant='outlined' size='small' onClick={handleClickOpen}>
        Contact Me
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          Contact me!
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom component='h5'>
            Thank you for taking the time to view my portfolio and i really hope
            you like my work so far. If you have any questions, want to hire me
            or just chat
          </Typography>
          <Typography gutterBottom component='h5'>
            DON'T be a stranger and just fill the form below to say Hello!
          </Typography>
          <TextField
            variant='outlined'
            margin='dense'
            required
            fullWidth
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            label='Name'
            name='name'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='dense'
            required
            fullWidth
            id='em'
            value={email}
            onChange={e => setEmail(e.target.value)}
            label='Email'
            name='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='dense'
            id='message'
            label='Message'
            required
            fullWidth
            multiline
            rows='8'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={sendEmail}
            variant='outlined'
            color='primary'
          >
            Send Email
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            variant='outlined'
            color='secondary'
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
