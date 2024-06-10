import AddIcon from '@mui/icons-material/Add';
import {Button, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import {RoutesEnum} from 'src/routes.tsx';

const MyFormsPage = () => {
  const nav = () => {
    window.location.href = window.location.href.replace(RoutesEnum.MyForms, RoutesEnum.Builder);
  };

  return (
    <Box className="headerWithItem">
      <Box className="mainHeader">
        <Typography variant="h1">My Forms</Typography>
      </Box>
      <Button startIcon={<AddIcon/>} variant="contained"
              onClick={() => nav()}>Create New
        Form</Button>
    </Box>
  );
}

export default MyFormsPage;
