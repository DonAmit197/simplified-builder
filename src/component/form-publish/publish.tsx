import {Box, Stack, TextField, Typography} from '@mui/material';
import TextFieldWithCopyButton from 'src/component/shared/basic-controls/text-field/text-field-with-copy-button.tsx';
import Message from 'src/component/shared/message/message.tsx';
import {useFormStore} from 'src/store/form-store.ts';

const Publish = () => {
  const {url} = useFormStore();

  return (
    <Stack gap={3}>
      <Box sx={{display: 'flex'}}>
        <Box>
          <Typography>
            This form is <strong>Active</strong>.
          </Typography>
          <Typography>The following URL is to the form.</Typography>
        </Box>
        <Box sx={{flex: '1 1 auto'}} />
        <TextField
          value='Active'
          size='small'
          sx={{width: '75px'}}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>

      <TextFieldWithCopyButton
        text={url}
        label='Shareable form URL'
        notification='Shareable form URL copied to clipboard'
      />

      <Message message='Your form is now live! All submission data will be sent through email.' />
    </Stack>
  );
};

export default Publish;
