import {FormControl, FormLabel, InputLabel, MenuItem, Select, Stack, Typography} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers';
import {Dayjs} from 'dayjs';
import {useState} from 'react';

interface IRetention {
  name: string;
  value: number;
}

const Settings = () => {
  const [retentionMonths, setRetentionMonths] = useState(3);
  const [releaseDate, setReleaseDate] = useState<Dayjs | null>(null);

  const retentionTypes: IRetention[] = [
    {
      name: '3 months',
      value: 3,
    },
    {
      name: '6 months',
      value: 6,
    },
    {
      name: '12 months',
      value: 12,
    },
    {
      name: '18 months',
      value: 18,
    },
    {
      name: '2 years',
      value: 24,
    },
    {
      name: '3 years',
      value: 36,
    },
    {
      name: '4 years',
      value: 48,
    },
    {
      name: '5 years',
      value: 60,
    },
  ];

  return (
    <Stack gap={3}>
      <FormControl>
        <InputLabel id='retention-label'>Data retention period</InputLabel>
        <Select
          value={retentionMonths}
          onChange={(event) => setRetentionMonths(parseInt(event.target.value.toString()))}
          labelId='retention-label'
          sx={{width: '400px'}}
          label='Data retention period'>
          {retentionTypes.map((c) => (
            <MenuItem key={c.value} value={c.value} aria-label={c.name}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Privacy statement</FormLabel>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Typography>
      </FormControl>

      <FormControl>
        <DatePicker
          value={releaseDate}
          onChange={(newValue) => setReleaseDate(newValue)}
          label='Release to production date'
          sx={{width: '400px'}}
        />
      </FormControl>
    </Stack>
  );
};

export default Settings;
