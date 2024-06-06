import {useTheme} from '@mui/material';
import Box from '@mui/material/Box';
import {cyan, grey} from '@mui/material/colors';
import {ReactNode} from 'react';

interface AppShellProps {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
  main: ReactNode;
}

const AppShell = (props: AppShellProps) => {
  const isDark = useTheme().palette.mode === 'dark';
  const background = isDark ? grey[900] : cyan[50];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        width: '100vw'
      }}>
      <Box role="navigation"
           sx={{
             display: 'flex',
             alignItems: 'start',
             bgcolor: background,
             borderRight: '1px solid',
             borderColor: 'divider'
           }}>
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
          height: '50px',
          bgcolor: background,
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}>{props.header}</Box> : null}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '10px'
          }}>
          {props.main}
        </Box>
        {props.footer ?
          <Box role="footer"
               sx={{
                 display: 'flex',
                 bgcolor: background,
                 borderTop: '1px solid',
                 borderColor: 'divider'
               }}>
            {props.footer}
          </Box> : null}
      </Box>
    </Box>
  );
}

export default AppShell;
