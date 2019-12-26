import React, { ChangeEvent } from 'react';
import { store } from '../..';

import { getSumNameAction, getSumRegionAction, getSumInfoAction } from '../../Store/actions';

class SelectorComponent extends React.Component {
  state = {
    sumName: '',
    isLoading: false
  };

  getSummonerNameHandler(e: ChangeEvent): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setState({ sumName: target.value });
  }

  getSummonerRegionHandler(e: ChangeEvent): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    store.dispatch(getSumRegionAction(target.value));
  }

  getSummonerInfoHandler(): void {
    if (this.state.sumName.match(/\S+/)) {
      store.dispatch(getSumNameAction(this.state.sumName));
      store.dispatch(getSumInfoAction());
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="sumname">Summoner Name:</label>
        <input type="text" name="sumname" id="sumname" onChange={e => this.getSummonerNameHandler(e)} />

        <label htmlFor="sumregion">Server:</label>
        <select name="sumregion" id="sumregion" onChange={e => this.getSummonerRegionHandler(e)}>
          <option value="euw1">EUW</option>
          <option value="na1">NA</option>
        </select>

        <button disabled={this.state.isLoading} onClick={() => this.getSummonerInfoHandler()}>
          Check
        </button>
      </div>
    );
  }
}

export default SelectorComponent;
