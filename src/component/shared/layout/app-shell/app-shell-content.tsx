import {Box} from '@mui/material';
import {ReactNode} from 'react';

const AppShellContent = ({children}: {children?: ReactNode}) => {
  return (
    <Box
      role='main'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        flexGrow: 1,
        paddingX: '30px',
      }}>
      {children}
    </Box>
  );
};

export default AppShellContent;
