import {useEffect} from 'react';
import {useThemeStore} from 'src/store/theme-store.ts';

const AnalyticsPage = () => {
  const setTitle = useThemeStore((state) => state.setTitle);
  useEffect(() => {
    setTitle('Analytics');
  }, []);

  return <div></div>;
};

export default AnalyticsPage;
