import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {IconButton} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useThemeStore} from 'src/store/theme-store.ts';

export const BackButton = () => {
  const navigate = useNavigate();
  const {backUrl} = useThemeStore();

  if (backUrl === '') {
    return <></>;
  }

  return (
    <IconButton onClick={() => navigate(backUrl)} sx={{alignSelf: 'center', mr: 1}}>
      <ArrowBackIcon />
    </IconButton>
  );
};
