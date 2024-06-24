import {FormControl, InputLabel, MenuItem, Select, Stack} from '@mui/material';
import {useState} from 'react';

interface IRetention {
  name: string;
  value: number;
}

const Settings = () => {
  const [retentionMonths, setRetentionMonths] = useState(3);

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
          label='Data retention period'>
          {retentionTypes.map((c) => (
            <MenuItem key={c.value} value={c.value} aria-label={c.name}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default Settings;
