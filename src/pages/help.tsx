import {useEffect} from 'react';
import {useThemeStore} from 'src/store/theme-store.ts';

const HelpPage = () => {
  const {setTitle, setHasSubMenu} = useThemeStore();

  useEffect(() => {
    setTitle('Help');
    setHasSubMenu(false);
  }, []);

  return <div></div>;
};

export default HelpPage;
