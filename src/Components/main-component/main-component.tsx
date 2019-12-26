import React from 'react';
import { connect } from 'react-redux';
import { ISummoner } from '../../Interfaces/summoner-interface';

interface State {
  sumName: string;
  sumIcon: string;
  sumLevel: string;
  sumRegion: string;
  isLoading: boolean;
}

class MainComponent extends React.Component<State> {
  render() {
    return this.props.isLoading ? (
      <h1>LOADING...</h1>
    ) : this.props.sumName.match(/\S+/) ? (
      <div>
        <h1>{this.props.sumName}</h1>
        <h1>{this.props.sumLevel ? `Level: ${this.props.sumLevel}` : ''}</h1>
        {this.props.sumIcon ? <img src={this.props.sumIcon} alt="Summoner Icon" /> : null}
      </div>
    ) : null;
  }
}

const mapStateToProps = (state: ISummoner) => {
  return {
    sumName: state.summoner.sumName,
    sumIcon: state.summoner.sumIcon,
    sumLevel: state.summoner.sumLevel,
    sumRegion: state.summoner.sumRegion,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(MainComponent);
