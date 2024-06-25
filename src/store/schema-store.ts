import secureLocalStorage from 'react-secure-storage';
import {create} from 'zustand';

interface SchemaState {
  schema: any;
  setSchema: (newSchema: any) => void;
}

const getInitialSchema = () => {
  const savedSchema = secureLocalStorage.getItem('formSchema');
  //console.log(savedSchema);
  if (typeof savedSchema === 'string') {
    try {
      return JSON.parse(savedSchema);
    } catch (error) {
      console.error('Error parsing saved schema', error);
      return null;
    }
  }
};
export const useSchemaStore = create<SchemaState>((set) => ({
  schema: getInitialSchema(),
  setSchema: (newSchema) => {
    secureLocalStorage.setItem('formSchema', JSON.stringify(newSchema));
    //localStorage.setItem('pageReload', 'true');
    set({schema: newSchema});
  },
}));
