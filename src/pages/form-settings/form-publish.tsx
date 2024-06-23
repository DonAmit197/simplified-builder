import {Box, Step, StepLabel, Stepper, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {Fragment, useState} from 'react';

const FormPublishPage = () => {
  const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{width: '100%'}}>
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
      {activeStep === steps.length ? (
        <Fragment>
          <Typography sx={{mt: 2, mb: 1}}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
            <Box sx={{flex: '1 1 auto'}} />
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Typography sx={{mt: 2, mb: 1}}>Step {activeStep + 1}</Typography>
          <Typography>Hello!</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
            <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{mr: 1}}>
              Back
            </Button>
            <Box sx={{flex: '1 1 auto'}} />
            <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default FormPublishPage;
