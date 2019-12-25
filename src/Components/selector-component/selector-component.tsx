import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { store } from '../..';

import { getSumNameAction, getSumRegionAction, getSumInfoAction } from '../../Store/actions';

class SelectorComponent extends React.Component {
  // TODO: Use state to handle ui logic (no need to dispatch at every keystroke)
  getSummonerName(e: ChangeEvent): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    store.dispatch(getSumNameAction(target.value));
  }

  getSummonerRegion(e: ChangeEvent): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    store.dispatch(getSumRegionAction(target.value));
  }

  getSummonerInfo(): void {
    if (store.getState().sumName.match(/\S+/)) {
      store.dispatch(getSumInfoAction());
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="sumname">Summoner Name:</label>
        <input type="text" name="sumname" id="sumname" onChange={e => this.getSummonerName(e)} />

        <label htmlFor="sumregion">Server:</label>
        <select name="sumregion" id="sumregion" onChange={e => this.getSummonerRegion(e)}>
          <option value="euw1">EUW</option>
          <option value="na1">NA</option>
        </select>

        <button onClick={this.getSummonerInfo}>Check</button>
      </div>
    );
  }
}

export default connect()(SelectorComponent);
