import React from 'react';
import './App.scss';

import SelectorComponent from './Components/selector-component/selector-component';
import MainComponent from './Components/main-component/main-component';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>LoL Check</h1>
      <SelectorComponent />
      <MainComponent />
    </div>
  );
};

export default App;
