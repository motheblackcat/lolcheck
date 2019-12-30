import React from 'react';
import { connect } from 'react-redux';
import { IState, League } from '../../Interfaces/summoner-interface';
import { LEAGUE } from '../../Interfaces/game-const';
import classes from './main-component.module.scss';
import unrankedLogo from '../../Assets/Images/ranked-emblems/unranked.png';
import ironLogo from '../../Assets/Images/ranked-emblems/iron.png';
import bronzeLogo from '../../Assets/Images/ranked-emblems/bronze.png';
import silverLogo from '../../Assets/Images/ranked-emblems/silver.png';
import goldLogo from '../../Assets/Images/ranked-emblems/gold.png';
import platinumLogo from '../../Assets/Images/ranked-emblems/platinum.png';
import diamondLogo from '../../Assets/Images/ranked-emblems/diamond.png';
import masterLogo from '../../Assets/Images/ranked-emblems/master.png';
import grandmasterLogo from '../../Assets/Images/ranked-emblems/grandmaster.png';
import challengerLogo from '../../Assets/Images/ranked-emblems/challenger.png';
import { Loader } from '../loader-component/loader-component';

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
    const soloRank = this.props.sumLeague.find((league: League) => league.queueType === LEAGUE.RANKED_SOLO_5x5);
    const flexRank = this.props.sumLeague.find((league: League) => league.queueType === LEAGUE.RANKED_FLEX_SR);
    const logos: any = {
      unrankedLogo,
      ironLogo,
      bronzeLogo,
      silverLogo,
      goldLogo,
      platinumLogo,
      diamondLogo,
      masterLogo,
      grandmasterLogo,
      challengerLogo
    };

    // TODO: Refactor league content to dynamic component with loop + Use translation file
    return this.props.isLoading ? (
      <Loader />
    ) : this.props.sumName.match(/\S+/) ? (
      <div className={classes.main}>
        <div className={classes.banner} style={sumSplashStyle}>
          {this.props.sumIcon ? <img src={this.props.sumIcon} alt="Summoner Icon" /> : null}
          <div>
            {this.props.sumName} - {this.props.sumLevel ? `Level ${this.props.sumLevel}` : null}
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.league}>
            <span>Ranked Solo / Duo</span>
            <img src={soloRank ? logos[soloRank.tier.toLowerCase() + 'Logo'] : unrankedLogo} alt="Unranked logo" />
            <span>{soloRank ? `${soloRank.tier} ${soloRank.rank}` : 'Unranked'}</span>
            {soloRank ? (
              <span>
                {soloRank.leaguePoints} LP {soloRank.wins}W / {soloRank.losses}L
              </span>
            ) : null}
          </div>
          <div className={classes.league}>
            <span>Ranked Flex</span>
            <img src={flexRank ? logos[flexRank.tier.toLowerCase() + 'Logo'] : unrankedLogo} alt="Unranked logo" />
            <span>{flexRank ? `${flexRank.tier} ${flexRank.rank}` : 'Unranked'}</span>
            {flexRank ? (
              <span>
                {flexRank.leaguePoints} LP {flexRank.wins}W / {flexRank.losses}L
              </span>
            ) : null}
          </div>
        </div>
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
