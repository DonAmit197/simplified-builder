import {PieChart} from '@mui/x-charts/PieChart';

const FormCompletionTimeGraph = () => {
  return (
    <PieChart
      series={[
        {
          data: [
            {id: 0, value: 5, label: 'Less time than expected'},
            {id: 1, value: 15, label: 'Time as expected'},
            {id: 2, value: 60, label: 'More time than expected'},
          ],
          outerRadius: '100%',
          innerRadius: '65%',
          paddingAngle: 2,
          cornerRadius: 4,
        },
      ]}
    />
  );
};

export default FormCompletionTimeGraph;
