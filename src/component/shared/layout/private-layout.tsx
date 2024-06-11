import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {createTheme, CssBaseline, IconButton, ThemeProvider} from '@mui/material';
import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import AppShell from 'src/component/shared/app-shell/app-shell.tsx';
import Sidebar from 'src/component/shared/sidebar/sidebar.tsx';

const PrivateLayout = () => {
  // TODO: Check if the user is actually logged in before showing the app in all its glory
  const [useDarkMode, setUseDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: useDarkMode ? 'dark' : 'light',
    },
    typography: {
      h1: {
        fontSize: '4em',
      },
    },
  });

  console.log(theme.palette);

  const ariaLabel = `Switch to ${useDarkMode ? 'light' : 'dark'} mode`;
  const icon = useDarkMode ? <DarkModeIcon fontSize='inherit' /> : <LightModeIcon fontSize='inherit' />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppShell
        header={
          <IconButton aria-label={ariaLabel} sx={{alignSelf: 'center'}} onClick={() => setUseDarkMode(!useDarkMode)}>
            {icon}
          </IconButton>
        }
        main={<Outlet />}
        sidebar={<Sidebar />}
      />
    </ThemeProvider>
  );
};

export default PrivateLayout;
