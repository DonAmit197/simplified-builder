import Builder from '../component/builder/Builder.tsx';
import staticComponents from '../component/builder/staticComponents';

const BuilderPage = () => {
  return <Builder defaultComponents={staticComponents}></Builder>;
};

export default BuilderPage;
