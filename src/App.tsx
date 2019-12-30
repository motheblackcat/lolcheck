import React from 'react';
import { store } from '.';
import { getChampionDataAction } from './Store/actions';

import SelectorComponent from './Components/selector-component/selector-component';
import MainComponent from './Containers/main-component/main-component';

import './App.scss';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(getChampionDataAction());
  }

  render() {
    return (
      <div className="App">
        <h1>LoL Check</h1>
        <SelectorComponent />
        <MainComponent />
      </div>
    );
  }
}

export default App;
