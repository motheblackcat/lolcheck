import React from 'react';
import { connect } from 'react-redux';

import { LoaderComponent } from '../../Components/loader-component/loader-component';
import { LeagueComponent } from '../../Components/league-component/league-component';

import { IState, League, Error } from '../../Interfaces/summoner-interface';
import { LEAGUE } from '../../Interfaces/game-const';
import classes from './main-component.module.scss';

interface State {
  sumName: string;
  sumIcon: string;
  sumLevel: number;
  sumRegion: string;
  sumSplash: string;
  sumLeague: Array<League>;
  sumChamp: string;
  isLoading: boolean;
  error: Error;
}

class MainComponent extends React.Component<State> {
  // TODO: Use translation file
  render() {
    const sumSplashStyle = { backgroundImage: `url('${this.props.sumSplash}')` };
    const soloRank = this.props.sumLeague.find((league: League) => league.queueType === LEAGUE.RANKED_SOLO_5x5);
    const flexRank = this.props.sumLeague.find((league: League) => league.queueType === LEAGUE.RANKED_FLEX_SR);

    if (this.props.isLoading) return <LoaderComponent />;
    if (this.props.error.isError) return <div className={classes.error}>{this.props.error.message}</div>;
    if (this.props.sumName) {
      return (
        <div className={classes.main}>
          <div className={classes.banner} style={sumSplashStyle}>
            <img src={this.props.sumIcon} alt="summoner icon" />
            <div>
              <div>
                {this.props.sumName} - Level {this.props.sumLevel}
              </div>
              {this.props.sumChamp ? <div>{this.props.sumChamp}</div> : null}
            </div>
          </div>
          <div className={classes.content}>
            <LeagueComponent title="Solo/Duo Rank" league={soloRank} />
            <LeagueComponent title="Flex Rank" league={flexRank} />
          </div>
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = (state: IState) => {
  return {
    sumName: state.summoner.sumName,
    sumIcon: state.summoner.sumIcon,
    sumLevel: state.summoner.sumLevel,
    sumRegion: state.summoner.sumRegion,
    sumSplash: state.summoner.sumSplash,
    sumChamp: state.summoner.sumChamp,
    sumLeague: state.summoner.sumLeague,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps)(MainComponent);
