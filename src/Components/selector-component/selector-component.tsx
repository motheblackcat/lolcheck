import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { store } from '../..';

import ISummoner from '../../Interfaces/summoner-interface';
import { getSumNameAction, getSumRegionAction, getSumInfoAction } from '../../Store/actions';

class SelectorComponent extends React.Component {
  // TODO: Check if a constructor and methods bindings are needed
  // TODO: Check if getting the user name & region couldn't be combined
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
      console.log(store.getState());
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

const mapStateToProps = (state: ISummoner) => {
  return {
    sumName: state.sumName,
    sumRegion: state.sumRegion
  };
};

// TODO: const mapDispatchToProps

export default connect(mapStateToProps)(SelectorComponent);
