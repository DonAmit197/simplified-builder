import CloseIcon from '@mui/icons-material/Close';
import {IconButton, Snackbar} from '@mui/material';

export interface INotificationProps {
  message: string;
  open: boolean;

  onClose: () => void;
}

const Notification = ({message, open, onClose}: INotificationProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      message={message}
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      action={
        <IconButton onClick={onClose} size='small' color='inherit'>
          <CloseIcon fontSize='small' />
        </IconButton>
      }
    />
  );
};

export default Notification;
