import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Builder from 'src/component/builder/Builder.tsx';
import staticComponents from 'src/component/builder/staticComponents';
import {useReloadStore} from 'src/store/reload-store';

const BuilderPage = () => {
  const {reloadPage, stopReload} = useReloadStore();

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state.data);

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

  return <Builder defaultComponents={copiedComponents} onCopy={handleCopy} />;
};

export default BuilderPage;
