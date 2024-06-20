import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {ReactNode} from 'react';
import StyledListItemButton from 'src/component/shared/button/styled-list-item-button.tsx';
import {RoutesEnum} from 'src/routes.tsx';

export interface INavbarLinkProps {
  icon: ReactNode;
  label: string;
  route: RoutesEnum;
  activeRoute: RoutesEnum;
  collapsed: boolean;

  onClick?(): void;
}

const NavbarLink = ({route, activeRoute, icon, label, collapsed, onClick}: INavbarLinkProps) => {
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

export default NavbarLink;
