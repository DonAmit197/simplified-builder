import {Typography} from '@mui/material';
import Box from '@mui/material/Box';

const BulletedList = ({listItems}: {listItems: string[]}) => {
  return (
    <Box>
      {listItems.map((l) => (
        <Typography>&emsp;&bull;&emsp;{l}</Typography>
      ))}
    </Box>
  );
};

export default BulletedList;
