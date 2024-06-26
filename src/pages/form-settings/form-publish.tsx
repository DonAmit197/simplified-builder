import {Box, Step, StepLabel, Stepper} from '@mui/material';
import {ReactNode, useState} from 'react';
import Hosting from 'src/component/form-publish/hosting.tsx';
import Publish from 'src/component/form-publish/publish.tsx';
import Settings from 'src/component/form-publish/settings.tsx';
import StyledButton from 'src/component/shared/basic-controls/button/styled-button.tsx';

const FormPublishPage = () => {
  const steps = ['Hosting', 'Data', 'Publish'];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
      content = <Publish />;
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
          <Box sx={{flex: '1 1 auto'}} />
          {activeStep < steps.length - 1 ? (
            <StyledButton variant='contained' onClick={handleNext}>
              Next
            </StyledButton>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default FormPublishPage;
