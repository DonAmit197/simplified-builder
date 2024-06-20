import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutIcon from '@mui/icons-material/Logout';
import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import {SetStateAction, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutesEnum} from 'src/routes.tsx';
import {useAuthStore} from 'src/store/auth-store.ts';
import {useThemeStore} from 'src/store/theme-store.ts';

const UserProfile = () => {
  const {userName, email, isOnTrial, logout} = useAuthStore();
  const {useDarkMode, setDarkMode, setLightMode} = useThemeStore();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event: {currentTarget: SetStateAction<HTMLElement | null>}) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id='basic-button'
        aria-label='User profile button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={() => navigate(`/${RoutesEnum.User}`)}>
          <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
          <ListItemText primary={userName} secondary={email} />
        </MenuItem>
        {isOnTrial ? (
          <ListItem>
            <ListItemText>* * * TRIAL MODE * * *</ListItemText>
          </ListItem>
        ) : null}
        <MenuItem onClick={logout}>
          <ListItemIcon>{<LogoutIcon />}</ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => (useDarkMode ? setLightMode() : setDarkMode())}>
          <ListItemIcon>{useDarkMode ? <LightModeIcon /> : <DarkModeIcon />}</ListItemIcon>
          <ListItemText>{`Switch to ${useDarkMode ? 'light' : 'dark'} mode`}</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserProfile;
