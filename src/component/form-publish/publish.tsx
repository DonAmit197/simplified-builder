import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {Box, FormControl, IconButton, InputAdornment, Stack, TextField, Typography, useTheme} from '@mui/material';
import {grey} from '@mui/material/colors';
import dayjs from 'dayjs';
import {useEffect, useState} from 'react';
import {useFormStore} from 'src/store/form-store.ts';

const Publish = () => {
  const {name} = useFormStore();
  const [url, setUrl] = useState('');
  const isDark = useTheme().palette.mode === 'dark';
  const background = isDark ? grey[800] : grey[100];

  useEffect(() => {
    const date = dayjs();
    setUrl(`prod.formbuilder.govt.nz/${name}${date.format('DDMMYYYY')}`);
  }, [name]);

  return (
    <Stack gap={3}>
      <Box>
        <Typography>
          This form is <strong>Active</strong>.
        </Typography>
        <Typography>The following URL is to the form.</Typography>
      </Box>

      <FormControl>
        <TextField
          value={url}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => navigator.clipboard.writeText(url)}>
                  <ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <TextField
        value='Your form is now live! All submission data will be sent through email.'
        sx={{borderWidth: '2px', bgcolor: background}}
        InputProps={{
          readOnly: true,
        }}
      />
    </Stack>
  );
};

export default Publish;
