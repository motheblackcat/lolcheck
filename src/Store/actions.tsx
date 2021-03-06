import { Dispatch } from 'redux';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { Summoner, SummonerDTO, LeagueEntryDTO, League, Champion, ChampionMasteryDTO } from '../Interfaces/summoner-interface';
import { LEAGUE } from '../Interfaces/game-const';

export const GET_SUM_NAME = 'GET_SUM_NAME';
export const GET_SUM_REGION = 'GET_SUM_REGION';
export const GET_SUM_INFO = 'GET_SUM_INFO';
export const LOADING_SUM_INFO = 'LOADING_SUM_INFO';
export const SUCCESS_SUM_INFO = 'SUCCESS_SUM_INFO';
export const ERROR_SUM_INFO = 'ERROR_SUM_INFO';
export const SET_CHAMPION_DATA = 'SET_CHAMPION_DATA';

export const getSumNameAction = (payload: string) => {
  return {
    type: GET_SUM_NAME,
    payload
  };
};

export const getSumRegionAction = (payload: string) => {
  return {
    type: GET_SUM_REGION,
    payload
  };
};

// TODO: Get the ddragon version and language dynamicaly (also check for error)
export const getChampionDataAction = () => {
  return (dispatch: Dispatch<any>) => {
    axios.get('https://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json').then((res: AxiosResponse) => {
      const championData: Array<Object> = Object.values(res.data.data);
      dispatch(setChampionDataAction(championData));
    });
  };
};

export const setChampionDataAction = (payload: any) => {
  return {
    type: SET_CHAMPION_DATA,
    payload
  };
};

// Action used to trigger the Riot API call chain (summoner info > league info > fav champion)
export const getSumInfoAction = () => {
  return (dispatch: Dispatch<any>, getState: Function) => {
    dispatch(loadingSumInfoAction());
    const sumName: string = getState().summoner.sumName;
    const sumRegion: string = getState().summoner.sumRegion;
    const sumLeague: Array<League> = getState().summoner.sumLeague;

    axios.get(`/api/summoner?region=${sumRegion}&name=${sumName}`).then(
      (res: AxiosResponse) => {
        const summonerDTO: SummonerDTO = res.data;
        const sumInfo: Summoner = {
          sumName: summonerDTO.name,
          sumLevel: summonerDTO.summonerLevel,
          sumIcon: `https://ddragon.leagueoflegends.com/cdn/10.1.1/img/profileicon/${res.data.profileIconId}.png`,
          sumId: summonerDTO.id,
          sumRegion: sumRegion,
          sumSplash: '',
          sumChamp: '',
          sumLeague: sumLeague
        };
        dispatch(getSummonerLeagueAction(sumInfo));
      },
      (err: AxiosError) => {
        console.error('[API Call] Error on get Summoner api call:', err.response?.status);

        switch (err.response?.status) {
          case 404:
            return dispatch(errorSumInfoAction('Summoner not found.'));
          default:
            return dispatch(errorSumInfoAction('Unknown error.'));
        }
      }
    );
  };
};

// Action used to get summoner rank info
export const getSummonerLeagueAction = (sumInfo: Summoner) => {
  return (dispatch: Dispatch<any>) => {
    axios
      .get(`/api/league?region=${sumInfo.sumRegion}&id=${sumInfo.sumId}`)
      .then((res: AxiosResponse) => {
        const leagueDTO: Array<LeagueEntryDTO> = res.data;
        sumInfo.sumLeague = [];
        if (leagueDTO.length > 0) {
          leagueDTO.forEach(league => {
            if (league.queueType !== LEAGUE.RANKED_FLEX_TT) {
              const sumLeague: League = {
                queueType: league.queueType,
                wins: league.wins,
                losses: league.losses,
                tier: league.tier,
                rank: league.rank,
                leaguePoints: league.leaguePoints
              };
              sumInfo.sumLeague.push(sumLeague);
            }
          });
        }
        dispatch(getSummonerMasteryAction(sumInfo));
      });
  };
};

// Action used to get summoner masteries & best champion splash
export const getSummonerMasteryAction = (sumInfo: Summoner) => {
  return (dispatch: Dispatch<any>, getState: Function) => {
    axios
      .get(`api/summonermasteries?region=${sumInfo.sumRegion}&id=${sumInfo.sumId}`)
      .then((res: AxiosResponse) => {
        const sumMastery: ChampionMasteryDTO = res.data.shift();
        if (sumMastery) {
          const sumMasteryChampId: string = sumMastery.championId.toString();
          const champ: Champion = getState().champions.find((champion: Champion) => champion.key === sumMasteryChampId);
          const champName: string = champ.name.replace(/[^a-zA-Z]/g, '');
          const champSplash: string = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`;
          sumInfo.sumSplash = champSplash;
          sumInfo.sumChamp = champ.name;
          dispatch(successSumInfoAction(sumInfo));
        } else {
          dispatch(successSumInfoAction(sumInfo));
        }
      });
  };
};

// Action used for the loader
export const loadingSumInfoAction = () => {
  return {
    type: LOADING_SUM_INFO
  };
};

// Action used to handle success / error from getting Summoner info & mastery
export const successSumInfoAction = (payload: any) => {
  return {
    type: SUCCESS_SUM_INFO,
    payload
  };
};

export const errorSumInfoAction = (payload: any) => {
  return {
    type: ERROR_SUM_INFO,
    payload
  };
};
