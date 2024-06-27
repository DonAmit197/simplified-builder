import {useEffect} from 'react';
import {useLayoutStore} from 'src/store/layout-store.ts';

const HelpPage = () => {
  const {setInitialState} = useLayoutStore();

  useEffect(() => {
    setInitialState('Help');
  }, []);

  return <div></div>;
};

export default HelpPage;
