import {useState} from 'react';
import Builder from 'src/component/builder/Builder.tsx';
import staticComponents from 'src/component/builder/staticComponents';

const BuilderPage = () => {
  const [copiedComponents, setCopiedComponents] = useState(staticComponents);
  const handleCopy = (data: any) => {
    try {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      setCopiedComponents({components: parsedData.components});
    } catch (error) {
      console.error('Failed to parse copied JSON:', error);
    }
  };
  return <Builder defaultComponents={copiedComponents} onCopy={handleCopy}></Builder>;
};

export default BuilderPage;
