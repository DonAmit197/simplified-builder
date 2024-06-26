import {Box} from '@mui/material';
import {ReactNode} from 'react';

const HeaderTitle = ({children}: {children?: ReactNode}) => {
  return <Box sx={{display: 'flex', flexGrow: 1, alignSelf: 'center'}}>{children}</Box>;
};

export default HeaderTitle;
