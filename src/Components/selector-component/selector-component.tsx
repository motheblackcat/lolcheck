import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';

import { store } from '../..';
import { getSumNameAction, getSumRegionAction, getSumInfoAction } from '../../Store/actions';
import { IState } from '../../Interfaces/summoner-interface';

import classes from './selector-component.module.scss';

interface State {
  isLoading: boolean;
}

class SelectorComponent extends React.Component<State> {
  state = {
    sumName: ''
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
      <div className={classes.selector}>
        <label htmlFor="sumname">Summoner Name:</label>
        <input type="text" name="sumname" id="sumname" onChange={e => this.getSummonerNameHandler(e)} />

        <label htmlFor="sumregion">Server:</label>
        <select name="sumregion" id="sumregion" onChange={e => this.getSummonerRegionHandler(e)}>
          <option value="euw1">EUW</option>
          <option value="na1">NA</option>
        </select>

        <button disabled={this.props.isLoading} onClick={() => this.getSummonerInfoHandler()}>
          {this.props.isLoading ? 'Loading...' : 'Check'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(SelectorComponent);
