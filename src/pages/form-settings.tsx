import {useEffect} from 'react';
import {useFormStore} from 'src/store/form-store.ts';
import {useThemeStore} from 'src/store/theme-store.ts';

const FormSettingsPage = () => {
  const setTitle = useThemeStore((state) => state.setTitle);
  const {name} = useFormStore();

  useEffect(() => {
    setTitle(`${name}: Settings`);
  }, [name]);

  return <div></div>;
};

export default FormSettingsPage;
