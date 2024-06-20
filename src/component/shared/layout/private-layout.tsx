import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import AppShell from 'src/component/shared/app-shell/app-shell.tsx';
import Sidebar from 'src/component/shared/sidebar/sidebar.tsx';
import UserProfile from 'src/component/shared/user-profile/user-profile.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {useAuthStore} from 'src/store/auth-store.ts';
import {useThemeStore} from 'src/store/theme-store.ts';

const PrivateLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const {useDarkMode} = useThemeStore();

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

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/${RoutesEnum.Login}`);
    }
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppShell header={<UserProfile />} main={<Outlet />} sidebar={<Sidebar />} />
    </ThemeProvider>
  );
};

export default PrivateLayout;
