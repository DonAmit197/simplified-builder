import {useEffect} from 'react';
import {useThemeStore} from 'src/store/theme-store.ts';

const SettingsPage = () => {
  const {setTitle, setHasSubMenu, setBackUrl} = useThemeStore();

  useEffect(() => {
    setTitle('Settings');
    setHasSubMenu(false);
    setBackUrl('');
  }, []);

  return <div></div>;
};

export default SettingsPage;
