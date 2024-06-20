import Box from '@mui/material/Box';
import {ReactNode} from 'react';

interface IAppShellProps {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
  main: ReactNode;
}

const AppShell = (props: IAppShellProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        width: '100vw',
      }}>
      <Box role='navigation' sx={{display: 'flex'}}>
        {props.sidebar ?? <></>}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}>
        {props.header ? (
          <Box
            role='banner'
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              height: '80px',
              paddingX: '30px',
              flexGrow: 0,
              flexShrink: 0,
            }}>
            {props.header}
          </Box>
        ) : null}
        <Box
          role='main'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            flexGrow: 1,
            paddingX: '30px',
          }}>
          {props.main}
        </Box>
        {props.footer ? (
          <Box
            role='footer'
            sx={{
              display: 'flex',
            }}>
            {props.footer}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default AppShell;
