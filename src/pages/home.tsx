import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutesEnum} from 'src/routes.tsx';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${RoutesEnum.MyForms}`);
  });

  return (
    <Box className="mainHeader">
      <Typography variant="h1">Home</Typography>
    </Box>
  );
}

export default HomePage;
