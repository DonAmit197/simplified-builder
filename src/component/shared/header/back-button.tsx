import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {IconButton} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <IconButton onClick={() => navigate(-1)} sx={{alignSelf: 'center'}}>
      <ArrowBackIcon />
    </IconButton>
  );
};
