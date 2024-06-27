import {useEffect} from 'react';
import {useLayoutStore} from 'src/store/layout-store.ts';

const SettingsPage = () => {
  const {setInitialState} = useLayoutStore();

  useEffect(() => {
    setInitialState('Settings');
  }, []);

  return <div></div>;
};

export default SettingsPage;
