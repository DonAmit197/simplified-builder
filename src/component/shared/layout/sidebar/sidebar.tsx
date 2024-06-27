import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {Divider, IconButton, SvgIcon, useTheme} from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import LogoInverse from 'src/assets/logo-inverse.svg?react';
import Logo from 'src/assets/logo.svg?react';
import NavbarLink from 'src/component/shared/layout/sidebar/nav-bar-link.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {getBackgroundColor} from 'src/services/color.service.ts';
import {useLayoutStore} from 'src/store/layout-store.ts';

export interface INavigationItem {
  icon: ReactNode;
  route: RoutesEnum;
  navigateRoute?: string;
  label: string;
}

const Sidebar = ({
  isMainMenu,
  navItems,
  activeRoute,
}: {
  isMainMenu: boolean;
  navItems: INavigationItem[];
  activeRoute: RoutesEnum;
}) => {
  const navigate = useNavigate();
  const {hasSubMenu, collapsedMenu, setCollapsedMenu} = useLayoutStore();
  const isDark = useTheme().palette.mode === 'dark';
  const background = getBackgroundColor(isDark);

  const collapsed = collapsedMenu && isMainMenu;

  const links = navItems.map((link) => (
    <NavbarLink
      key={link.route}
      icon={link.icon}
      label={link.label}
      route={link.route}
      activeRoute={activeRoute}
      collapsed={collapsed}
      onClick={() => navigate(link.navigateRoute ?? link.route)}
    />
  ));

  const icon = collapsed ? <MenuIcon /> : <CloseIcon />;
  const ariaLabel = collapsed ? 'Expand menu' : 'Collapse menu';

  const width = collapsed ? '90px' : '300px';
  const headerJustify = collapsed ? 'center' : 'space-between';
  const buttonMargin = collapsed ? '20px' : '5px';
  const logo = isDark ? LogoInverse : Logo;
  const borderRadius = isMainMenu && hasSubMenu ? '0' : '0 20px 20px 0';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: width,
      }}>
      {isMainMenu ? (
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
            onClick={() => setCollapsedMenu(!collapsed)}>
            {icon}
          </IconButton>
        </Box>
      ) : null}
      <Box
        sx={{
          flexGrow: 1,
          borderRadius: borderRadius,
          backgroundColor: background,
          borderLeft: isMainMenu ? '' : '1px solid',
          borderColor: 'divider',
        }}>
        <List>{links}</List>
        <Divider
          sx={{
            borderBottomWidth: '2px',
            opacity: '1',
            marginX: '30px',
            visibility: collapsed ? 'hidden' : 'visible',
          }}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
