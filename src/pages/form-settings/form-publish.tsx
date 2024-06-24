import {Box, Step, StepLabel, Stepper} from '@mui/material';
import {ReactNode, useState} from 'react';
import Hosting from 'src/component/form-publish/hosting.tsx';
import StyledButton from 'src/component/shared/button/styled-button.tsx';

const FormPublishPage = () => {
  const steps = ['Hosting', 'Further settings', 'Summary'];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  let content: ReactNode;

  switch (activeStep) {
    case 0:
      content = <Hosting />;
      break;
    case 1:
      content = <Settings />;
      break;
    case 2:
    default:
      content = <div>Summary!</div>;
      break;
  }

  return (
    <Box>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps: {completed?: boolean} = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{padding: '30px 10px'}}>
        {content}
        <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
          <StyledButton variant='outlined' disabled={activeStep === 0} onClick={handleBack} sx={{mr: 1}}>
            Back
          </StyledButton>
          <Box sx={{flex: '1 1 auto'}} />
          <StyledButton variant='contained' onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Publish' : 'Next'}
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default FormPublishPage;
