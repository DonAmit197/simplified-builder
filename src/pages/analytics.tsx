import {useEffect} from 'react';
import {useThemeStore} from 'src/store/theme-store.ts';

const AnalyticsPage = () => {
  const {setTitle, setHasSubMenu} = useThemeStore();

  useEffect(() => {
    setTitle('Analytics');
    setHasSubMenu(false);
  }, []);

  return <div></div>;
};

export default AnalyticsPage;
