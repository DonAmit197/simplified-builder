import {SvgIcon, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Logo from 'src/assets/logo-inverse.svg?react';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        width: '100vw',
      }}>
      <Box sx={{display: 'flex', width: '100%'}}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
            maxWidth: '50%',
            backgroundColor: '#033572',
          }}>
          <Box sx={{alignSelf: 'center'}}>
            <SvgIcon
              aria-label='FormBuilder logo'
              component={Logo}
              inheritViewBox
              sx={{
                width: '392px',
                height: '52px',
                fill: 'white',
              }}
            />
            <Typography variant='h4' sx={{color: 'white', maxWidth: '500px', marginTop: '50px'}}>
              The preferred way for government to build forms
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            maxWidth: '50%',
          }}>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '390px',
              margin: '0 auto',
            }}>
            <Typography>Welcome to Builder!</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
