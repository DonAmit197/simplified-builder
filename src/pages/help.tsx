import {useEffect} from 'react';
import {useThemeStore} from 'src/store/theme-store.ts';

const HelpPage = () => {
  const {setTitle, setHasSubMenu, setBackUrl} = useThemeStore();

  useEffect(() => {
    setTitle('Help');
    setHasSubMenu(false);
    setBackUrl('');
  }, []);

  return <div></div>;
};

export default HelpPage;
