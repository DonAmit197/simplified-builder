import {Typography, useTheme} from '@mui/material';
import Box from '@mui/material/Box';
import {getMessageBackgroundColor, getMessageBorderColor} from 'src/services/color.service.ts';

const Message = ({message}: {message: string}) => {
  const isDark = useTheme().palette.mode === 'dark';
  const background = getMessageBackgroundColor(isDark);
  const borderColor = getMessageBorderColor(isDark);

  return (
    <Box
      sx={{
        width: '100%',
        padding: '20px 10px',
        background: background,
        display: 'flex',
        alignItems: 'center',
        border: '2px solid',
        borderColor: borderColor,
        borderRadius: '4px',
      }}>
      <Typography>{message}</Typography>
    </Box>
  );
};

export default Message;
