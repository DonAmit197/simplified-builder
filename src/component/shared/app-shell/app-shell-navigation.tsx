import {Box} from '@mui/material';
import {ReactNode} from 'react';

const AppShellNavigation = ({children}: {children?: ReactNode}) => {
  return (
    <Box role='navigation' sx={{display: 'flex'}}>
      {children}
    </Box>
  );
};

export default AppShellNavigation;
