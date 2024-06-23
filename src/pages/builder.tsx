import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Builder from 'src/component/builder/Builder.tsx';
import staticComponents from 'src/component/builder/staticComponents';
import StyledButton from 'src/component/shared/button/styled-button.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {useFormStore} from 'src/store/form-store.ts';
import {useReloadStore} from 'src/store/reload-store';
import {useThemeStore} from 'src/store/theme-store.ts';

const BuilderPage = () => {
  const {reloadPage, stopReload} = useReloadStore();
  const {setTitle, setHasSubMenu} = useThemeStore();

  const {name} = useFormStore();

  const navigate = useNavigate();

  const [copiedComponents, setCopiedComponents] = useState(staticComponents);
  const handleCopy = (data: any) => {
    try {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      setCopiedComponents({components: parsedData.components});
    } catch (error) {
      console.error('Failed to parse copied JSON:', error);
    }
  };

  useEffect(() => {
    setTitle(name ?? 'Unnamed form');
    setHasSubMenu(false);
  }, [name]);

  useEffect(() => {
    if (reloadPage && reloadPage === RoutesEnum.Builder) {
      stopReload();
      navigate(0);
    }
  }, [reloadPage]);

  return (
    <Box sx={{width: '100%'}}>
      <Box className='headerWithItem'>
        <StyledButton variant='contained' onClick={() => navigate(`/${RoutesEnum.FormSettings}`.replace(':id', '1'))}>
          Settings
        </StyledButton>
      </Box>

      <Builder defaultComponents={copiedComponents} onCopy={handleCopy} />
    </Box>
  );
};

export default BuilderPage;
