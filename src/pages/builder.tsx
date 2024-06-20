import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Builder from 'src/component/builder/Builder.tsx';
import staticComponents from 'src/component/builder/staticComponents';
import {useReloadStore} from 'src/store/reload-store';

const BuilderPage = () => {
  const {reloadPage, stopReload} = useReloadStore();

  const navigate = useNavigate();
  const location = useLocation();

  const formName = location.state?.data?.formName ?? 'Unnamed form';

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
    if (reloadPage) {
      stopReload();
      navigate(0);
    }
  }, [reloadPage]);

  return (
    <Box sx={{width: '100%'}}>
      <Box className='mainHeader' sx={{marginBottom: '20px'}}>
        <Typography variant='h1'>{formName}</Typography>
      </Box>

      <Builder defaultComponents={copiedComponents} onCopy={handleCopy} />
    </Box>
  );
};

export default BuilderPage;
