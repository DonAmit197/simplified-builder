import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {IconButton} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useLayoutStore} from 'src/store/layout-store.ts';

export const BackButton = () => {
  const navigate = useNavigate();
  const {backUrl} = useLayoutStore();

  if (!backUrl) {
    return <></>;
  }

  return (
    <IconButton onClick={() => navigate(backUrl)} sx={{alignSelf: 'center', mr: 1}}>
      <ArrowBackIcon />
    </IconButton>
  );
};
