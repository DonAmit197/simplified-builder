import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {AccordionDetails, AccordionSummary, Box, Divider, Stack, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import StyledAccordion from 'src/component/shared/accordion/styled-accordion.tsx';
import StyledButton from 'src/component/shared/button/styled-button.tsx';
import {useAuthStore} from 'src/store/auth-store.ts';

const SignUp = () => {
  const [currentPanel, setCurrentPanel] = useState('full');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

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
      login(email, email, true);
    } else {
      login(userName, email, false);
    }

    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        width: '500px',
      }}>
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
            <Typography>
              <ul>
                <li>Save and edit</li>
                <li>Share and publish</li>
                <li>24/7 support by our experienced team</li>
              </ul>
            </Typography>
            <Typography>Sign up now!</Typography>
            <TextField label='User name' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <TextField label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <StyledButton variant='contained' sx={{alignSelf: 'start'}} onClick={() => signUp(false)}>
              Sign up
            </StyledButton>
          </Stack>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion expanded={currentPanel === 'trial'} onChange={(_, expanded) => handleChange('trial', expanded)}>
        <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
          <Typography variant='h5'>Trial</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack gap={2}>
            <Divider sx={{opacity: 1}} />
            <Typography>Give the FormBuilder a try!</Typography>
            <Typography>Create forms quickly and easily, using accessible and easy to understand UI.</Typography>
            <Typography>Benefits include:</Typography>
            <Typography>
              <ul>
                <li>Create a form</li>
                <li>Export to JSON</li>
              </ul>
            </Typography>
            <Typography>Start your trial now!</Typography>
            <TextField label='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <StyledButton variant='contained' sx={{alignSelf: 'start'}} onClick={() => signUp(true)}>
              Get started!
            </StyledButton>
          </Stack>
        </AccordionDetails>
      </StyledAccordion>
    </Box>
  );
};

export default SignUp;
