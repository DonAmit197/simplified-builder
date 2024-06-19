import {Typography} from '@mui/material';
import Box from '@mui/material/Box';

const BulletedList = ({listItems}: {listItems: string[]}) => {
  return (
    <Box>
      {listItems.map((l: string, index: number) => (
        <Typography key={index}>&emsp;&bull;&emsp;{l}</Typography>
      ))}
    </Box>
  );
};

export default BulletedList;
