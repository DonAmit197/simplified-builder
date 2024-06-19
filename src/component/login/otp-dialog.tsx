import CloseIcon from '@mui/icons-material/Close';
import {Box, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography} from '@mui/material';
import {useState} from 'react';
import StyledButton from 'src/component/shared/button/styled-button.tsx';
import OTP from 'src/component/shared/otp/otp.tsx';

export interface OptDialogProps {
  length: number;
  open: boolean;
  email: string;

  onClose: (otp: string) => void;
}

const OtpDialog = (props: OptDialogProps) => {
  const {length, open, email, onClose} = props;
  const [otp, setOtp] = useState('');

  const handleClose = (submit: boolean) => {
    onClose(submit ? otp : '');
  };

  return (
    <Dialog onClose={() => handleClose(false)} open={open}>
      <DialogTitle fontWeight='bold'>Enter One-Time Password</DialogTitle>
      <IconButton
        aria-label='close'
        onClick={() => handleClose(false)}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}>
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Stack gap={5}>
          <Box>
            <Typography variant='h6'>Enter the 6 digit code sent to</Typography>
            <Typography variant='h6' fontWeight='bold'>
              {email}
            </Typography>
          </Box>

          <OTP length={length} value={otp} onChange={setOtp} />
          <StyledButton variant='contained' onClick={() => handleClose(true)}>
            Verify
          </StyledButton>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default OtpDialog;
