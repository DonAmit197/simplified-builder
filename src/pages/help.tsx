import {useEffect} from 'react';
import {useThemeStore} from 'src/store/theme-store.ts';

const HelpPage = () => {
  const {setInitialState} = useThemeStore();

  useEffect(() => {
    setInitialState('Help');
  }, []);

  return <div></div>;
};

export default HelpPage;
