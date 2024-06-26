import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {IconButton, InputAdornment, TextField} from '@mui/material';
import {useState} from 'react';
import Notification from 'src/component/shared/message/notification.tsx';

const TextFieldWithCopyButton = ({text, label, notification}: {text: string; label: string; notification: string}) => {
  const [open, setOpen] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setOpen(true);
  };

  return (
    <>
      <TextField
        value={text}
        label={label}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={copy} aria-label='Copy text'>
                <ContentCopyIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Notification message={notification ?? 'Content copied'} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default TextFieldWithCopyButton;
