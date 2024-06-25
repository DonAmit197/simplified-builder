import {useEffect} from 'react';
import {useThemeStore} from 'src/store/theme-store.ts';

const SettingsPage = () => {
  const {setTitle, setHasSubMenu} = useThemeStore();

  useEffect(() => {
    setTitle('Settings');
    setHasSubMenu(false);
  }, []);

  return <div></div>;
};

export default SettingsPage;
