import PublishIcon from '@mui/icons-material/Publish';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import Sidebar, {INavigationItem} from 'src/component/shared/layout/sidebar/sidebar.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {useFormStore} from 'src/store/form-store.ts';
import {useLayoutStore} from 'src/store/layout-store.ts';

const FormSettingsPage = () => {
  const {setInitialState} = useLayoutStore();

  const {name} = useFormStore();

  const location = useLocation();
  const {pathname} = location;

  const [activeRoute, setActiveRoute] = useState<RoutesEnum>(RoutesEnum.Home);

  const setActive = (currentRoute: RoutesEnum) => {
    if (activeRoute === currentRoute) {
      return;
    }

    setActiveRoute(currentRoute);
  };

  if (pathname.endsWith(RoutesEnum.FormPublish)) {
    setActive(RoutesEnum.FormPublish);
  } else {
    setActive(RoutesEnum.FormSettings);
  }

  const navItems: INavigationItem[] = [
    {
      icon: <ShareIcon />,
      navigateRoute: `/${RoutesEnum.FormSettings}`.replace(':id', '1'),
      route: RoutesEnum.FormSettings,
      label: 'Share',
    },
    {
      icon: <PublishIcon />,
      route: RoutesEnum.FormPublish,
      label: 'Publish',
    },
  ];

  useEffect(() => {
    setInitialState(`${name}: Settings`, true, `/${RoutesEnum.Builder}`.replace(':id', '1'));
  }, [name]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        marginX: '-30px',
      }}>
      <Box sx={{display: 'flex'}}>
        <Sidebar navItems={navItems} activeRoute={activeRoute} isMainMenu={false} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          paddingX: '30px',
        }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default FormSettingsPage;
