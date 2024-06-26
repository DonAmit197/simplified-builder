import {Stack, Typography, useTheme} from '@mui/material';
import Box from '@mui/material/Box';
import {ReactNode} from 'react';
import {getMessageBorderColor} from 'src/services/color.service.ts';

export interface IChartWrapperOptions {
  title: string;
  children: ReactNode;
}

const ChartWrapper = ({title, children}: IChartWrapperOptions) => {
  const isDark = useTheme().palette.mode === 'dark';
  const borderColor = getMessageBorderColor(isDark);

  return (
    <Stack
      gap={2}
      sx={{
        alignItems: 'stretch',
        border: '1px solid',
        borderColor: borderColor,
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}>
      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: borderColor,
          py: 1,
        }}>
        <Typography fontWeight='bolder' sx={{width: '100%', textAlign: 'center'}}>
          {title}
        </Typography>
      </Box>
      {children}
    </Stack>
  );
};

export default ChartWrapper;
