import React from 'react';
import { connect } from 'react-redux';
import { ISummoner } from '../../Interfaces/summoner-interface';
import classes from './main-component.module.scss';

interface State {
  sumName: string;
  sumIcon: string;
  sumLevel: string;
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
        <label>{this.props.sumLevel ? `Level ${this.props.sumLevel}` : ''}</label>
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
    splash: state.summoner.splash,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(MainComponent);
