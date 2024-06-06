import './App.css';
import Builder from './component/builder/Builder.tsx';
import staticComponents from './component/builder/staticComponents';

function App() {
  const d_Comp = staticComponents;

  return <Builder defaultComponents={d_Comp}></Builder>;
}

export default App;
