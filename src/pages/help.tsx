import {useEffect} from 'react';
import {useThemeStore} from 'src/store/theme-store.ts';

const HelpPage = () => {
  const setTitle = useThemeStore((state) => state.setTitle);
  useEffect(() => {
    setTitle('Help');
  }, []);

  return <div></div>;
};

export default HelpPage;
