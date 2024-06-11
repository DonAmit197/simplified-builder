import Box from '@mui/material/Box';
import {ReactNode} from 'react';

interface AppShellProps {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
  main: ReactNode;
}

const AppShell = (props: AppShellProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        width: '100vw'
      }}>
      <Box role="navigation" sx={{display: 'flex'}}>
        {props.sidebar ?? <></>}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}>
        {props.header ? <Box role="banner" sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          height: '60px',
          paddingX: '30px'
        }}>{props.header}</Box> : null}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px'
          }}>
          {props.main}
        </Box>
        {props.footer ?
          <Box role="footer"
               sx={{
                 display: 'flex',
               }}>
            {props.footer}
          </Box> : null}
      </Box>
    </Box>
  );
}

export default AppShell;
