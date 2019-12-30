import React from 'react';
import { connect } from 'react-redux';
import { IState, League } from '../../Interfaces/summoner-interface';
import { LEAGUE } from '../../Interfaces/game-const';
import classes from './main-component.module.scss';

interface State {
  sumName: string;
  sumIcon: string;
  sumLevel: number;
  sumRegion: string;
  sumSplash: string;
  sumLeague: Array<League>;
  isLoading: boolean;
}

class MainComponent extends React.Component<State> {
  render() {
    const sumSplashStyle = { backgroundImage: `url('${this.props.sumSplash}')` };
    const sumIconImg = this.props.sumIcon ? <img src={this.props.sumIcon} alt="Summoner Icon" /> : null;
    const sumLevelLabel = this.props.sumLevel ? <div>Level {this.props.sumLevel}</div> : null;
    const sumLeague = this.props.sumLeague.map(league => {
      // TODO: Put text in translation file
      const queueType = league.queueType === LEAGUE.RANKED_SOLO_5x5 ? 'Solo / Duo Queue' : 'Flex Queue';
      return (
        <div key={league.queueType}>
          {queueType} {league.tier} {league.rank} {league.wins}W / {league.losses}L
        </div>
      );
    });

    return this.props.isLoading ? (
      <div className={classes.loader}>
        <div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    ) : this.props.sumName.match(/\S+/) ? (
      <div className={classes.main} style={sumSplashStyle}>
        <div>{sumIconImg}</div>
        <div>{this.props.sumName}</div>
        {sumLevelLabel}
        {sumLeague}
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
    sumSplash: state.summoner.sumSplash,
    sumLeague: state.summoner.sumLeague,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(MainComponent);
