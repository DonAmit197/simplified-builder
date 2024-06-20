import Box from '@mui/material/Box';
import {ReactNode} from 'react';
import AppShellMain from 'src/component/shared/app-shell/app-shell-main.tsx';
import AppShellNavigation from 'src/component/shared/app-shell/app-shell-navigation.tsx';

const AppShell = ({children}: {children?: ReactNode}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        width: '100vw',
      }}>
      {children}
    </Box>
  );
};

AppShell.Navigation = AppShellNavigation;
AppShell.Main = AppShellMain;

export default AppShell;
