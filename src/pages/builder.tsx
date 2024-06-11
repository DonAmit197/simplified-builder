import Builder from 'src/component/builder/Builder.tsx';
import staticComponents from 'src/component/builder/staticComponents';

const BuilderPage = () => {
  return <Builder defaultComponents={staticComponents}></Builder>;
};

export default BuilderPage;
