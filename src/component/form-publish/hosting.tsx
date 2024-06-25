import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography} from '@mui/material';
import {useState} from 'react';
import BulletedList from 'src/component/shared/list/bulleted-list.tsx';

interface IDataType {
  name: string;
  value: string;
  disabled: boolean;
}

interface IMouType {
  name: string;
  value: boolean;
}

const Hosting = () => {
  const [hostingType, setHostingType] = useState('FAAL');
  const [mouType, setMouType] = useState(false);

  const hostingTypes: IDataType[] = [
    {
      name: 'As a link',
      value: 'FAAL',
      disabled: false,
    },
    {
      name: 'Business Connect',
      value: 'BC',
      disabled: true,
    },
    {
      name: 'API deploy',
      value: 'API',
      disabled: true,
    },
  ];

  const mouTypes: IMouType[] = [
    {
      name: 'Accept',
      value: true,
    },
    {
      name: 'Decline',
      value: false,
    },
  ];

  return (
    <Stack gap={3}>
      <FormControl>
        <FormLabel id='hosting-types-label'>Hosting of your form</FormLabel>
        <Typography>
          Insert a bunch of text here explaining the various options and how very, very cool all of them are. Then, only
          let the user select one.
        </Typography>
        <RadioGroup
          value={hostingType}
          onChange={(_, value) => setHostingType(value)}
          aria-labelledby='hosting-types-label'
          aria-label='Hosting type'>
          {hostingTypes.map((d) => (
            <FormControlLabel
              control={<Radio />}
              key={d.value}
              label={d.name}
              value={d.value}
              disabled={d.disabled}
              aria-label={d.name}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id='mou-types-label'>Memorandum of Understanding (MOU)</FormLabel>
        <Typography sx={{mb: 2}}>
          A memorandum of understanding is often used commercially to establish a partnership with other businesses or
          commercial entities. Therefore, each MOU will be specific to each potential partnership. When drafting an MOU,
          it is essential to keep in mind what you and any other negotiating parties wish to get out of the partnership.
          It may be useful to include:
        </Typography>
        <BulletedList
          listItems={[
            'a description of the parties involved in this partnership',
            'the purpose of establishing this relationship',
            'the goals of this partnership',
          ]}
        />
        <RadioGroup
          value={mouType}
          onChange={(_, value) => setMouType(value === 'true')}
          aria-labelledby='mou-types-label'
          aria-label='Memorandum of Understanding'
          sx={{mt: 2}}>
          {mouTypes.map((d) => (
            <FormControlLabel
              control={<Radio />}
              key={`${d.value}`}
              label={d.name}
              value={d.value}
              aria-label={d.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default Hosting;
