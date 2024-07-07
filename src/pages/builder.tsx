import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Builder from 'src/component/builder/Builder.tsx';
import staticComponents from 'src/component/builder/staticComponents';
import StyledButton from 'src/component/shared/basic-controls/button/styled-button.tsx';
import {RoutesEnum} from 'src/routes.tsx';
import {useFormStore} from 'src/store/form-store.ts';
import {useLayoutStore} from 'src/store/layout-store.ts';
import {useReloadStore} from 'src/store/reload-store';

const BuilderPage = () => {
  const location = useLocation();
  const standalone = location.pathname.endsWith(RoutesEnum.Standalone);

  const {reloadPage, stopReload} = useReloadStore();
  const {setInitialState} = useLayoutStore();
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
    setInitialState(name ?? 'Unnamed form');
  }, [name]);

  useEffect(() => {
    if (reloadPage !== undefined && reloadPage === RoutesEnum.Builder) {
      stopReload();
      navigate(0);
    }
  }, [reloadPage, stopReload, navigate]);

  return (
    <Box sx={{width: '100%', padding: standalone ? '30px' : '0'}}>
      {standalone ? (
        <></>
      ) : (
        <Box className='headerWithItem'>
          <StyledButton variant='contained' onClick={() => navigate(`/${RoutesEnum.FormSettings}`.replace(':id', '1'))}>
            Settings
          </StyledButton>
        </Box>
      )}

      <Builder defaultComponents={copiedComponents} onCopy={handleCopy} />
    </Box>
  );
};

export default BuilderPage;
