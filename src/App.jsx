import Builder from './component/builder/Builder';
import staticComponents from './component/builder/staticComponents';

import './App.css';
import './component/builder/builder.css';
function App() {
  const d_Comp = staticComponents;

  return <Builder defaultComponents={d_Comp}></Builder>;
}

export default App;
