import {Stack, TextField} from '@mui/material';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import StyledButton from 'src/component/shared/button/styled-button.tsx';
import {useAuthStore} from 'src/store/auth-store.ts';

export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const authenticate = () => {
    login(userName, userName, false);
    navigate('/');
  };

  return (
    <Stack gap={3} sx={{alignItems: 'start'}}>
      <TextField
        sx={{width: '300px'}}
        label='User name'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        sx={{width: '300px'}}
        label='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton variant='contained' onClick={authenticate}>
        Log in
      </StyledButton>
    </Stack>
  );
};

export default Login;
