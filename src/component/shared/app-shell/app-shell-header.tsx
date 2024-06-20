import {Box} from '@mui/material';
import {ReactNode} from 'react';

const AppShellHeader = ({children}: {children?: ReactNode}) => {
  return (
    <Box
      role='banner'
      sx={{
        display: 'flex',
        height: '80px',
        paddingX: '30px',
        flexGrow: 0,
        flexShrink: 0,
      }}>
      {children}
    </Box>
  );
};

export default AppShellHeader;
