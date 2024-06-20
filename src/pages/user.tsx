import {Stack, TextField} from '@mui/material';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import StyledButton from 'src/component/shared/button/styled-button.tsx';
import Notification from 'src/component/shared/notification/notification.tsx';
import {useAuthStore} from 'src/store/auth-store.ts';
import {useThemeStore} from 'src/store/theme-store.ts';

interface IUserSettings {
  userName: string;
  emailAddress: string;
  password: string;
}

const UserPage = () => {
  const {userName, email, isOnTrial, login} = useAuthStore();
  const [showNotification, setShowNotification] = useState(false);

  const setTitle = useThemeStore((state) => state.setTitle);
  useEffect(() => {
    setTitle('User Settings');
  }, []);

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userName: userName,
      emailAddress: email,
      password: '',
    },
  });

  const onSubmit = (data: IUserSettings) => {
    login(data.userName, data.emailAddress, isOnTrial);
    setValue('password', '');
    setShowNotification(true);
  };

  return (
    <Box className='mainHeader'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          gap={3}
          sx={{
            marginTop: '30px',
            alignItems: 'start',
          }}>
          <Controller
            disabled={isOnTrial}
            name='userName'
            control={control}
            rules={{required: true}}
            render={({field}) => (
              <TextField
                aria-label='User name'
                label={errors.userName ? 'User name required' : 'User name'}
                error={errors.userName !== undefined}
                {...field}
                sx={{width: '400px'}}
              />
            )}
          />
          <Controller
            disabled={isOnTrial}
            name='emailAddress'
            control={control}
            rules={{required: true}}
            render={({field}) => (
              <TextField
                aria-label='Email address'
                label={errors.emailAddress ? 'Email address required' : 'Email address'}
                error={errors.emailAddress !== undefined}
                {...field}
                sx={{width: '400px'}}
              />
            )}
          />
          <Controller
            disabled={isOnTrial}
            name='password'
            control={control}
            rules={{required: true}}
            render={({field}) => (
              <TextField
                type='password'
                aria-label='Password'
                label={errors.password ? 'Password required' : 'Password'}
                error={errors.password !== undefined}
                {...field}
                sx={{width: '400px'}}
              />
            )}
          />
          <StyledButton type='submit' variant='contained' disabled={isOnTrial}>
            Save changes
          </StyledButton>
        </Stack>
      </form>

      <Notification message='User changes saved' open={showNotification} onClose={() => setShowNotification(false)} />
    </Box>
  );
};

export default UserPage;
