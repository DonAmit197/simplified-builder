import {useEffect} from 'react';
import {useThemeStore} from 'src/store/theme-store.ts';

const SettingsPage = () => {
  const {setInitialState} = useThemeStore();

  useEffect(() => {
    setInitialState('Settings');
  }, []);

  return <div></div>;
};

export default SettingsPage;
