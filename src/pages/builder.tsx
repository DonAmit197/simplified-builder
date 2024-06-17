import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Builder from 'src/component/builder/Builder.tsx';
import staticComponents from 'src/component/builder/staticComponents';
import {useAppDispatch, useAppSelector} from 'src/store/hooks';
import {stopReload} from 'src/store/reload-slice';

const BuilderPage = () => {
  const reload = useAppSelector((state) => state.reload.reloadPage);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
    if (reload) {
      dispatch(stopReload());
      navigate(0);
    }
  }, [reload]);

  return <Builder defaultComponents={copiedComponents} onCopy={handleCopy} />;
};

export default BuilderPage;
