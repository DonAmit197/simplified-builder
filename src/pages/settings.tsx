import {useEffect} from 'react';
import {useThemeStore} from 'src/store/theme-store.ts';

const SettingsPage = () => {
  const setTitle = useThemeStore((state) => state.setTitle);
  useEffect(() => {
    setTitle('Settings');
  }, []);

  return <div></div>;
};

export default SettingsPage;
