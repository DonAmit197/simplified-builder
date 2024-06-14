import AnalyticsIcon from '@mui/icons-material/Analytics';
import CloseIcon from '@mui/icons-material/Close';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import TableChartIcon from '@mui/icons-material/TableChart';
import {Divider, IconButton, SvgIcon, useTheme} from '@mui/material';
import Box from '@mui/material/Box';
import {cyan, grey} from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import LogoInverse from 'src/assets/logo-inverse.svg?react';
import Logo from 'src/assets/logo.svg?react';
import StyledListItemButton from 'src/component/shared/button/styled-list-item-button.tsx';
import {RoutesEnum} from 'src/routes.tsx';

interface NavbarLinkProps {
  icon: JSX.Element;
  label: string;
  route: RoutesEnum;

  onClick?(): void;
}

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState<RoutesEnum>(RoutesEnum.Home);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const {pathname} = location;
  const isDark = useTheme().palette.mode === 'dark';
  const background = isDark ? grey[900] : cyan[50];

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
  } else if (pathname.endsWith(RoutesEnum.Settings)) {
    setActive(RoutesEnum.Settings);
  } else {
    setActive(RoutesEnum.Home);
  }

  const data = [
    {icon: <TableChartIcon />, route: RoutesEnum.Home, label: 'My Forms'},
    {icon: <AnalyticsIcon />, route: RoutesEnum.Analytics, label: 'Analytics'},
    {icon: <HelpCenterIcon />, route: RoutesEnum.Help, label: 'Help & Support'},
    {icon: <SettingsIcon />, route: RoutesEnum.Settings, label: 'Settings'},
  ];

  const NavbarLink = ({route, icon, label, onClick}: NavbarLinkProps) => {
    return (
      <ListItem key={label}>
        <StyledListItemButton
          onClick={onClick}
          selected={route === activeRoute}
          aria-label={label}
          sx={{borderRadius: '20px'}}>
          <ListItemIcon>{icon}</ListItemIcon>
          {collapsed ? <></> : <ListItemText primary={label} />}
        </StyledListItemButton>
      </ListItem>
    );
  };

  const links = data.map((link) => (
    <NavbarLink
      key={link.route}
      icon={link.icon}
      label={link.label}
      route={link.route}
      onClick={() => navigate(link.route)}
    />
  ));

  const icon = collapsed ? <MenuIcon /> : <CloseIcon />;
  const ariaLabel = collapsed ? 'Expand menu' : 'Collapse menu';

  const width = collapsed ? '90px' : '300px';
  const headerJustify = collapsed ? 'center' : 'space-between';
  const buttonMargin = collapsed ? '20px' : '5px';
  const logo = isDark ? LogoInverse : Logo;
  const borderRadius = activeRoute === RoutesEnum.Home ? '0' : '0 20px 20px 0';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: width,
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: headerJustify,
          height: '80px',
          flexGrow: 0,
          flexShrink: 0,
        }}>
        <SvgIcon
          aria-label='FormBuilder logo'
          component={logo}
          inheritViewBox
          onClick={() => navigate(RoutesEnum.Home)}
          sx={{
            width: collapsed ? '0' : '196px',
            height: '26px',
            marginLeft: '20px',
            alignSelf: 'center',
            fill: 'white',
            cursor: 'pointer',
          }}
        />
        <IconButton
          aria-label={ariaLabel}
          sx={{marginRight: buttonMargin, alignSelf: 'center'}}
          onClick={() => setCollapsed(!collapsed)}>
          {icon}
        </IconButton>
      </Box>

      <Box sx={{flexGrow: 1, borderRadius: borderRadius, backgroundColor: background}}>
        <List>
          {links}
          <Divider
            sx={{
              borderBottomWidth: '2px',
              opacity: '1',
              marginX: '30px',
              visibility: collapsed ? 'hidden' : 'visible',
            }}
          />
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
