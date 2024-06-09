import AnalyticsIcon from '@mui/icons-material/Analytics';
import CloseIcon from '@mui/icons-material/Close';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import TableChartIcon from '@mui/icons-material/TableChart';
import {IconButton} from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {RoutesEnum} from '../../../routes.tsx';

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

  const setActive = (currentRoute: RoutesEnum) => {
    if (activeRoute === currentRoute) {
      return;
    }

    setActiveRoute(currentRoute);
  }

  if (pathname.endsWith(RoutesEnum.MyForms) || pathname.endsWith(RoutesEnum.Builder)) {
    setActive(RoutesEnum.MyForms);
  } else if (pathname.endsWith(RoutesEnum.Analytics)) {
    setActive(RoutesEnum.Analytics);
  } else if (pathname.endsWith(RoutesEnum.Help)) {
    setActive(RoutesEnum.Help);
  } else {
    setActive(RoutesEnum.Home);
  }

  const data = [
    {icon: <HomeIcon/>, route: RoutesEnum.Home, label: 'Home'},
    {icon: <TableChartIcon/>, route: RoutesEnum.MyForms, label: 'My Forms'},
    {icon: <AnalyticsIcon/>, route: RoutesEnum.Analytics, label: 'Analytics'},
    {icon: <HelpCenterIcon/>, route: RoutesEnum.Help, label: 'Help & Support'},
  ];

  const NavbarLink = ({route, icon, label, onClick}: NavbarLinkProps) => {
    return (
      <ListItem key={label}>
        <ListItemButton onClick={onClick} selected={route === activeRoute} aria-label={label}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          {collapsed ? <></> : <ListItemText primary={label}/>}
        </ListItemButton>
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

  const icon = collapsed ? <MenuIcon/> : <CloseIcon/>
  const ariaLabel = collapsed ? 'Expand menu' : 'Collapse menu';

  const width = collapsed ? '90px' : '240px';
  const headerDirection = collapsed ? 'row' : 'row-reverse';
  const headerAlignSelf = collapsed ? 'center' : 'flex-end';

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: width}}>
      <Box sx={{display: 'flex', flexDirection: headerDirection, alignSelf: headerAlignSelf}}>
        <IconButton aria-label={ariaLabel} sx={{margin: '5px'}}
                    onClick={() => setCollapsed(!collapsed)}>{icon}</IconButton>
      </Box>

      <List sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
        {links}
      </List>
    </Box>
  );
}

export default Sidebar;