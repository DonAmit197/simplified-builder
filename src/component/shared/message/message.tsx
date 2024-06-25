import {Typography, useTheme} from '@mui/material';
import Box from '@mui/material/Box';
import {grey} from '@mui/material/colors';

const Message = ({message}: {message: string}) => {
  const isDark = useTheme().palette.mode === 'dark';
  const background = isDark ? grey[800] : grey[100];
  const borderColor = isDark ? grey[600] : grey[400];

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
