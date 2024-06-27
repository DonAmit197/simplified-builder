import {FormControl, InputLabel, MenuItem, Select, Stack} from '@mui/material';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import {Form} from 'src/__generated__/graphql.ts';
import ChartWrapper from 'src/component/analytics/chart-wrapper.tsx';
import FormCompletionTimeGraph from 'src/component/analytics/form-completion-time-graph.tsx';
import FormCountGraph from 'src/component/analytics/form-count-graph.tsx';
import UserCountGraph from 'src/component/analytics/user-count-graph.tsx';
import {FormService} from 'src/services/form.service.ts';
import {useThemeStore} from 'src/store/theme-store.ts';

const AnalyticsPage = () => {
  const {setTitle, setBackUrl} = useThemeStore();
  const [forms, setForms] = useState<Form[]>([]);
  const [formTypes, setFormTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState('All Forms');

  const formService = new FormService();

  useEffect(() => {
    setTitle('Analytics');
    setBackUrl('');

    formService.getForms(-1, '').then((result) => setForms(result));
  }, []);

  useEffect(() => {
    const types: string[] = ['All Forms'];
    forms
      .sort((a, b) => a.formSettings.title.localeCompare(b.formSettings.title))
      .forEach((f) => {
        const formName = f.formSettings.title;
        if (!types.includes(formName)) {
          types.push(formName);
        }
      });

    setFormTypes(types);
  }, [forms]);

  return (
    <Stack gap={3} sx={{pt: 2}}>
      <FormControl>
        <InputLabel id='form-category-label'>Form type</InputLabel>
        <Select
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
          labelId='form-category-label'
          label='Form type'
          sx={{width: '400px'}}>
          {formTypes.map((c) => (
            <MenuItem key={c} value={c} aria-label={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Stack gap={3} direction='row'>
        <Box sx={{minWidth: '300px', minHeight: '250px', width: '35vw', height: '35vh'}}>
          <ChartWrapper title='Form count over the past 12 months'>
            <FormCountGraph />
          </ChartWrapper>
        </Box>

        <Box sx={{minWidth: '300px', minHeight: '250px', width: '35vw', height: '35vh'}}>
          <ChartWrapper title='User count over the past 12 hours'>
            <UserCountGraph />
          </ChartWrapper>
        </Box>
      </Stack>

      <Stack gap={3} direction='row'>
        <Box sx={{minWidth: '600px', minHeight: '300px', width: '40vw', height: '40vh'}}>
          <ChartWrapper title='Form duration statistics'>
            <FormCompletionTimeGraph />
          </ChartWrapper>
        </Box>
      </Stack>
    </Stack>
  );
};

export default AnalyticsPage;
