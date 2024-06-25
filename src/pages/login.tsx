import {SvgIcon, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import {useState} from 'react';
import Logo from 'src/assets/logo-inverse.svg?react';
import Login from 'src/component/login/login.tsx';
import SignUp from 'src/component/login/sign-up.tsx';
import StyledButton from 'src/component/shared/basic-controls/button/styled-button.tsx';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Box
      role='main'
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
              alignItems: 'center',
              maxWidth: '390px',
              margin: '0 auto',
            }}>
            {showLogin ? (
              <>
                <Login />
                <StyledButton variant='text' sx={{marginTop: '25px'}} onClick={() => setShowLogin(false)}>
                  Don't have an account? Sign up
                </StyledButton>
              </>
            ) : (
              <>
                <SignUp />
                <StyledButton variant='text' sx={{marginTop: '' + '25px'}} onClick={() => setShowLogin(true)}>
                  Already have an account? Sign in
                </StyledButton>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
