import {Box} from '@mui/material';
import {ReactNode} from 'react';
import HeaderSection from 'src/component/shared/header/header-section.tsx';
import HeaderTitle from 'src/component/shared/header/header-title.tsx';

const Header = ({children}: {children?: ReactNode}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      }}>
      {children}
    </Box>
  );
};

Header.Section = HeaderSection;
Header.Title = HeaderTitle;

export default Header;
