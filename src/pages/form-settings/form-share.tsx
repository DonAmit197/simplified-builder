import {Box, Stack, Typography} from '@mui/material';
import DualOptionSwitch from 'src/component/shared/basic-controls/switch/dual-option-switch.tsx';
import TextFieldWithCopyButton from 'src/component/shared/basic-controls/text-field/text-field-with-copy-button.tsx';
import Message from 'src/component/shared/message/message.tsx';
import {useFormStore} from 'src/store/form-store.ts';

const FormSharePage = () => {
  const {url} = useFormStore();
  const {isPublic, setPublic} = useFormStore();

  return (
    <Stack gap={3}>
      <Box sx={{display: 'flex'}}>
        <Box>
          {isPublic ? (
            <Typography>
              This form is <strong>Public</strong> and will allow submissions.
            </Typography>
          ) : (
            <Typography>
              This form is <strong>Private</strong> and will <strong>Not</strong> allow any submissions.
            </Typography>
          )}
          <Typography>The following URL can be used to share with others.</Typography>
        </Box>

        <Box sx={{flex: '1 1 auto'}} />

        <DualOptionSwitch
          checked={isPublic}
          leftLabel='Private'
          rightLabel='Public'
          onChange={(value) => setPublic(value)}
        />
      </Box>

      <TextFieldWithCopyButton
        text={url}
        label='Shareable form URL'
        notification='Shareable form URL copied to clipboard'
      />

      <Message
        message={`Make sure that the form is published by following the wizard on the 'Publish' menu. The form needs to be Active and Published for people to be able to fill them in.`}
      />
    </Stack>
  );
};

export default FormSharePage;
