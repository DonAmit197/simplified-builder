import {LineChart} from '@mui/x-charts';
import dayjs from 'dayjs';
import {userCountDataset} from 'src/component/analytics/dataSet.ts';
import {formatTimeOnly} from 'src/services/format.service.ts';

const UserCountGraph = () => {
  const now = dayjs();

  const formatLabelAsTime = (value: number): string => {
    const date = now.add(value, 'hour');
    return formatTimeOnly(date);
  };

  return (
    <LineChart
      dataset={userCountDataset}
      xAxis={[
        {
          dataKey: 'hour',
          valueFormatter: (value) => formatLabelAsTime(value),
        },
      ]}
      series={[{dataKey: 'users', label: 'User count'}]}
    />
  );
};

export default UserCountGraph;
