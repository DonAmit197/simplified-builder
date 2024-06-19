import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {createTheme, CssBaseline, IconButton, ThemeProvider} from '@mui/material';
import Box from '@mui/material/Box';
import {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import AppShell from 'src/component/shared/app-shell/app-shell.tsx';
import StyledButton from 'src/component/shared/button/styled-button.tsx';
import Sidebar from 'src/component/shared/sidebar/sidebar.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {useAuthStore} from 'src/store/auth-store.ts';
import {useThemeStore} from 'src/store/theme-store.ts';

const PrivateLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  const {useDarkMode, setDarkMode, setLightMode} = useThemeStore();

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

  const ariaLabel = `Switch to ${useDarkMode ? 'light' : 'dark'} mode`;
  const icon = useDarkMode ? <DarkModeIcon fontSize='inherit' /> : <LightModeIcon fontSize='inherit' />;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/${RoutesEnum.Login}`);
    }
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppShell
        header={
          <Box sx={{flexDirection: 'row'}}>
            <StyledButton variant='contained' onClick={() => logout()} sx={{visibility: 'hidden'}}>
              Logout
            </StyledButton>
            <IconButton
              aria-label={ariaLabel}
              sx={{alignSelf: 'center'}}
              onClick={() => {
                if (useDarkMode) {
                  setLightMode();
                } else {
                  setDarkMode();
                }
              }}>
              {icon}
            </IconButton>
          </Box>
        }
        main={<Outlet />}
        sidebar={<Sidebar />}
      />
    </ThemeProvider>
  );
};

export default PrivateLayout;
