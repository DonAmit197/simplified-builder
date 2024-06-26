import {BarChart} from '@mui/x-charts/BarChart';
import dayjs from 'dayjs';
import {formCountDataset} from 'src/component/analytics/dataSet.ts';
import {formatMonthOnly} from 'src/services/format.service.ts';

const FormCountGraph = () => {
  const now = dayjs();

  const formatLabelAsMonth = (value: number): string => {
    const date = now.add(value, 'month');
    return formatMonthOnly(date);
  };

  return (
    <BarChart
      dataset={formCountDataset}
      xAxis={[{scaleType: 'band', dataKey: 'month', valueFormatter: (value) => formatLabelAsMonth(value)}]}
      series={[
        {dataKey: 'created', label: 'Created'},
        {dataKey: 'completed', label: 'Submitted'},
      ]}
    />
  );
};

export default FormCountGraph;
