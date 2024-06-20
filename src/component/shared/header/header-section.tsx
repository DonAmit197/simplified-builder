import {Box} from '@mui/material';
import {ReactNode} from 'react';

const HeaderSection = ({children}: {children?: ReactNode}) => {
  return <Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'right', alignSelf: 'center'}}>{children}</Box>;
};

export default HeaderSection;
