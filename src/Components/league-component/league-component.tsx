import React from 'react';
import { League } from '../../Interfaces/summoner-interface';

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
import classes from './league-component.module.scss';

type LeagueProps = {
  league: League | undefined;
  title: string;
};

export const LeagueComponent: React.FC<LeagueProps> = (props: LeagueProps) => {
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

  return (
    <div className={classes.league}>
      <span>{props.title}</span>
      <img src={props.league ? logos[props.league.tier.toLowerCase() + 'Logo'] : unrankedLogo} alt="league emblem" />
      <span>{props.league ? `${props.league.tier} ${props.league.rank}` : 'Unranked'}</span>
      {props.league ? (
        <span>
          {props.league.leaguePoints} LP {props.league.wins}W / {props.league.losses}L
        </span>
      ) : null}
    </div>
  );
};
