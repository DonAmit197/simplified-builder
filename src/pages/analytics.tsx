import {Stack} from '@mui/material';
import Box from '@mui/material/Box';
import {useEffect} from 'react';
import ChartWrapper from 'src/component/analytics/chart-wrapper.tsx';
import FormCompletionTimeGraph from 'src/component/analytics/form-completion-time-graph.tsx';
import FormCountGraph from 'src/component/analytics/form-count-graph.tsx';
import UserCountGraph from 'src/component/analytics/user-count-graph.tsx';
import {useThemeStore} from 'src/store/theme-store.ts';

const AnalyticsPage = () => {
  const {setTitle} = useThemeStore();

  useEffect(() => {
    setTitle('Analytics');
  }, []);

  return (
    <Stack gap={3} sx={{pt: 2}}>
      <Stack gap={3} direction='row'>
        <Box sx={{minWidth: '300px', minHeight: '250px', width: '35vw', height: '40vh'}}>
          <ChartWrapper title='Form count over the past 12 months'>
            <FormCountGraph />
          </ChartWrapper>
        </Box>

        <Box sx={{minWidth: '300px', minHeight: '250px', width: '35vw', height: '40vh'}}>
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
