/** @format */

import React, {createContext, ReactNode, useContext, useState} from 'react';

interface Component {
  label: string;
  tableView: boolean;
  key: string;
  input: boolean;
  showSidebar?: boolean;
  html?: string;
}

// interface Schema {
//   components: Component[];
// }
interface FormSchemaContextType {
  schema: Component[];
  setSchema: React.Dispatch<React.SetStateAction<Component[]>>;
}

const FormSchemaContext = createContext<FormSchemaContextType | undefined>(undefined);

interface FormSchemaProviderProps {
  children: ReactNode;
  initialSchema: Component[];
}

export const FormSchemaProvider: React.FC<FormSchemaProviderProps> = ({children, initialSchema}) => {
  //console.log(initialSchema);
  const [schema, setSchema] = useState<Component[]>(initialSchema);

  return <FormSchemaContext.Provider value={{schema, setSchema}}>{children}</FormSchemaContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFormSchema = () => {
  const context = useContext(FormSchemaContext);
  if (!context) {
    throw new Error('useFormSchema must be used within a FormSchemaProvider');
  }
  return context;
};
