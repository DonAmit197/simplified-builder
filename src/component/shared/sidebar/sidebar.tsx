import CloseIcon from '@mui/icons-material/Close';
import ConstructionIcon from '@mui/icons-material/Construction';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
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
import classes from './sidebar.module.scss';

interface NavbarLinkProps {
  icon: JSX.Element;
  label: string;
  active?: boolean;
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

  if (pathname.endsWith(RoutesEnum.Builder)) {
    setActive(RoutesEnum.Builder);
  } else {
    setActive(RoutesEnum.Home);
  }

  const data = [
    {icon: <HomeIcon/>, route: RoutesEnum.Home, label: 'Home'},
    {icon: <ConstructionIcon/>, route: RoutesEnum.Builder, label: 'Form Builder'},
  ];

  const NavbarLink = ({route, icon, label, active, onClick}: NavbarLinkProps) => {
    const buttonClass = active ? classes.active : '';

    return (
      <ListItem key={label}>
        <ListItemButton onClick={onClick} className={buttonClass} selected={route === activeRoute} aria-label={label}>
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
      active={false}
      onClick={() => navigate(link.route)}
    />
  ));

  const coll = collapsed ? classes.collapsed : '';
  const icon = collapsed ? <MenuIcon/> : <CloseIcon/>
  const ariaLabel = collapsed ? 'Expand menu' : 'Collapse menu';
  return (
    <Box className={`${classes.sidebar} ${coll}`}>
      <Box className={`${classes.header} ${coll}`}>
        <IconButton aria-label={ariaLabel} className={classes.menuButton} onClick={() => setCollapsed(!collapsed)}>{icon}</IconButton>
      </Box>

      <List className={classes.list}>
        {links}
      </List>
    </Box>
  );
}

export default Sidebar;
