import React from 'react';
import { connect } from 'react-redux';
import { store } from '../..';
import ISummoner from '../../Interfaces/summoner-interface';
import { GET_SUM_NAME } from '../../Store/actions';

class SelectorComponent extends React.Component {
  checkSummoner(): void {
    // Get input value
    store.dispatch({ type: GET_SUM_NAME, payload: { sumName: 'Mo', sumRegion: 'EUW' } });
    console.log(store.getState());
  }

  render() {
    return (
      <div>
        <label htmlFor="sumname">Summoner Name:</label>
        <input type="text" name="sumname" id="sumname" />

        <label htmlFor="sumregion">Server:</label>
        <select name="sumregion" id="sumregion">
          <option value="euw1">EUW</option>
        </select>

        <button onClick={this.checkSummoner}>Check</button>
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
