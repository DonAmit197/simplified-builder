import AnalyticsIcon from '@mui/icons-material/Analytics';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SettingsIcon from '@mui/icons-material/Settings';
import TableChartIcon from '@mui/icons-material/TableChart';
import {createTheme, CssBaseline, ThemeProvider, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import AppShell from 'src/component/shared/app-shell/app-shell.tsx';
import Header from 'src/component/shared/header/header.tsx';
import Sidebar from 'src/component/shared/sidebar/sidebar.tsx';
import UserProfile from 'src/component/shared/user-profile/user-profile.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {useAuthStore} from 'src/store/auth-store.ts';
import {useThemeStore} from 'src/store/theme-store.ts';

const PrivateLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const {useDarkMode, title} = useThemeStore();
  const location = useLocation();
  const {pathname} = location;

  const [activeRoute, setActiveRoute] = useState<RoutesEnum>(RoutesEnum.Home);

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

  const navItems = [
    {icon: <TableChartIcon />, route: RoutesEnum.Home, label: 'My Forms'},
    {icon: <AnalyticsIcon />, route: RoutesEnum.Analytics, label: 'Analytics'},
    {icon: <HelpCenterIcon />, route: RoutesEnum.Help, label: 'Help & Support'},
    {icon: <SettingsIcon />, route: RoutesEnum.Settings, label: 'Settings'},
  ];

  const setActive = (currentRoute: RoutesEnum) => {
    if (activeRoute === currentRoute) {
      return;
    }

    setActiveRoute(currentRoute);
  };

  if (pathname.endsWith(RoutesEnum.Builder)) {
    setActive(RoutesEnum.Home);
  } else if (pathname.endsWith(RoutesEnum.Analytics)) {
    setActive(RoutesEnum.Analytics);
  } else if (pathname.endsWith(RoutesEnum.Help)) {
    setActive(RoutesEnum.Help);
  } else if (pathname.endsWith(`/${RoutesEnum.Settings}`)) {
    setActive(RoutesEnum.Settings);
  } else {
    setActive(RoutesEnum.Home);
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(`/${RoutesEnum.Login}`);
    }
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppShell>
        <AppShell.Navigation>
          <Sidebar navItems={navItems} activeRoute={activeRoute} isMainMenu={true} />
        </AppShell.Navigation>

        <AppShell.Main>
          <AppShell.Main.Header>
            <Header>
              <Header.Title>
                <Typography variant='h1' fontSize='xx-large'>
                  {title}
                </Typography>
              </Header.Title>

              <Header.Section>
                <UserProfile />
              </Header.Section>
            </Header>
          </AppShell.Main.Header>

          <AppShell.Main.Content>
            <Outlet />
          </AppShell.Main.Content>
        </AppShell.Main>
      </AppShell>
    </ThemeProvider>
  );
};

export default PrivateLayout;
