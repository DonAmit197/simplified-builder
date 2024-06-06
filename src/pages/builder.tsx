import Builder from '../component/builder/Builder.tsx';
// @ts-expect-error Bla
import staticComponents from '../component/builder/staticComponents';

const BuilderPage = () => {
  return <Builder defaultComponents={staticComponents}></Builder>;
};

export default BuilderPage;
