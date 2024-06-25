import ListItemButton, {ListItemButtonProps} from '@mui/material/ListItemButton';
import {styled} from '@mui/material/styles';

const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>(() => ({
  borderRadius: '20px',
  textTransform: 'none',
}));

export default StyledListItemButton;
