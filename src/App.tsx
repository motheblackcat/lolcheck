import React from 'react';
import './App.scss';

import SelectorComponent from './Components/selector-component/selector-component';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>LoL Check</h1>
      <SelectorComponent />
    </div>
  );
};

export default App;
