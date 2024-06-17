import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {createTheme, CssBaseline, IconButton, ThemeProvider} from '@mui/material';
import {Outlet} from 'react-router-dom';
import AppShell from 'src/component/shared/app-shell/app-shell.tsx';
import Sidebar from 'src/component/shared/sidebar/sidebar.tsx';
import {useAppDispatch, useAppSelector} from 'src/store/hooks.ts';
import {setDarkMode, setLightMode} from 'src/store/theme-slice.ts';

const PrivateLayout = () => {
  const dispatch = useAppDispatch();

  // TODO: Check if the user is actually logged in before showing the app in all its glory
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    typography: {
      h1: {
        fontSize: '4em',
      },
    },
  });

  const ariaLabel = `Switch to ${darkMode ? 'light' : 'dark'} mode`;
  const icon = darkMode ? <DarkModeIcon fontSize='inherit' /> : <LightModeIcon fontSize='inherit' />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppShell
        header={
          <IconButton
            aria-label={ariaLabel}
            sx={{alignSelf: 'center'}}
            onClick={() => {
              if (darkMode) {
                dispatch(setLightMode());
              } else {
                dispatch(setDarkMode());
              }
            }}>
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
