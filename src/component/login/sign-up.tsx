import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {AccordionDetails, AccordionSummary, Box, Divider, Stack, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import OtpDialog from 'src/component/login/otp-dialog.tsx';
import StyledAccordion from 'src/component/shared/accordion/styled-accordion.tsx';
import StyledButton from 'src/component/shared/button/styled-button.tsx';
import BulletedList from 'src/component/shared/list/bulleted-list.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {useAuthStore} from 'src/store/auth-store.ts';

const SignUp = () => {
  const [currentPanel, setCurrentPanel] = useState('full');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleChange = (panel: string, isExpanded: boolean) => {
    if (isExpanded) {
      setCurrentPanel(panel);
    } else {
      setCurrentPanel('');
    }
  };

  const signUp = (trial: boolean) => {
    if (trial) {
      login('User name', email, true);
    } else {
      login(userName, email, false);
    }

    navigate(RoutesEnum.Root);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          width: '500px',
        }}>
        <Typography variant='h1' fontSize='4em' marginBottom='30px' color='primary.dark'>
          Sign Up
        </Typography>

        <StyledAccordion expanded={currentPanel === 'full'} onChange={(_, expanded) => handleChange('full', expanded)}>
          <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
            <Typography variant='h5'>Create account - full access</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack gap={2}>
              <Divider sx={{opacity: 1}} />
              <Typography>Unlock the awesome potential of the FormBuilder!</Typography>
              <Typography>
                Create forms quickly and easily, using accessible and easy to understand UI. Share the forms with your
                team and publish it with one click.
              </Typography>
              <Typography>Benefits include:</Typography>
              <BulletedList
                listItems={['Save and edit', 'Share and publish', '24/7 support by our experienced team']}
              />
              <Typography>Sign up now!</Typography>
              <TextField label='User name' value={userName} onChange={(e) => setUserName(e.target.value)} />
              <TextField label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <StyledButton variant='contained' sx={{alignSelf: 'start'}} onClick={() => setOpen(true)}>
                Sign up
              </StyledButton>
            </Stack>
          </AccordionDetails>
        </StyledAccordion>

        <StyledAccordion
          expanded={currentPanel === 'trial'}
          onChange={(_, expanded) => handleChange('trial', expanded)}>
          <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
            <Typography variant='h5'>Trial</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack gap={2}>
              <Divider sx={{opacity: 1}} />
              <Typography>Give the FormBuilder a try!</Typography>
              <Typography>Create forms quickly and easily, using accessible and easy to understand UI.</Typography>
              <Typography>Benefits include:</Typography>
              <BulletedList listItems={['Create a form', 'Export to JSON']} />
              <Typography>Start your trial now!</Typography>
              <TextField label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <StyledButton variant='contained' sx={{alignSelf: 'start'}} onClick={() => signUp(true)}>
                Get started!
              </StyledButton>
            </Stack>
          </AccordionDetails>
        </StyledAccordion>
      </Box>
      <OtpDialog
        length={6}
        open={open}
        email={email}
        onClose={(otp: string) => {
          setOpen(false);

          if (otp !== '') {
            signUp(false);
          }
        }}
      />
    </>
  );
};

export default SignUp;
