import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../Interfaces/summoner-interface';
import classes from './main-component.module.scss';

interface State {
  sumName: string;
  sumIcon: string;
  sumLevel: number;
  sumRegion: string;
  splash: string;
  isLoading: boolean;
}

class MainComponent extends React.Component<State> {
  render() {
    const backgroundImage = { backgroundImage: `url('${this.props.splash}')` };
    return this.props.isLoading ? (
      <h1>LOADING...</h1>
    ) : this.props.sumName.match(/\S+/) ? (
      <div className={classes.main} style={backgroundImage}>
        {this.props.sumIcon ? <img src={this.props.sumIcon} alt="Summoner Icon" /> : null}
        <label>{this.props.sumName}</label>
        {this.props.sumLevel ? <label>Level {this.props.sumLevel}</label> : null}
      </div>
    ) : null;
  }
}

const mapStateToProps = (state: IState) => {
  return {
    sumName: state.summoner.sumName,
    sumIcon: state.summoner.sumIcon,
    sumLevel: state.summoner.sumLevel,
    sumRegion: state.summoner.sumRegion,
    splash: state.summoner.splash,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(MainComponent);
