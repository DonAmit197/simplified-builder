import {Box} from '@mui/material';
import {ReactNode} from 'react';
import AppShellContent from 'src/component/shared/layout/app-shell/app-shell-content.tsx';
import AppShellHeader from 'src/component/shared/layout/app-shell/app-shell-header.tsx';

const AppShellMain = ({children}: {children?: ReactNode}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}>
      {children}
    </Box>
  );
};

AppShellMain.Header = AppShellHeader;
AppShellMain.Content = AppShellContent;

export default AppShellMain;
