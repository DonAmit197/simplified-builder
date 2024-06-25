import {useEffect} from 'react';
import FormRenderer from 'src/component/FormRenderer/FormRenderer';

const FormRendererPage = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        //console.log('Tab is active');
        const checkUpdateStorage = localStorage.getItem('updatedSchema');
        if (checkUpdateStorage === 'true') {
          console.log('Page needs to be refreshed');
          // Set localStorage to false
          localStorage.setItem('updatedSchema', 'false');
          window.location.reload();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <FormRenderer />;
};
export default FormRendererPage;
