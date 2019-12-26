import { Dispatch } from 'redux';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { key } from '../tempdevconf';
import { ISummoner, SummonerDTO } from '../Interfaces/summoner-interface';

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

export const getChampionDataAction = () => {
  return (dispatch: Dispatch<any>) => {
    axios.get('http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json').then((res: AxiosResponse) => {
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

// TODO: Improve error handling with different messages according to code
// Action used to trigger the Riot API call
export const getSumInfoAction = () => {
  return (dispatch: Dispatch<any>, getState: Function) => {
    dispatch(loadingSumInfoAction());
    const sumName: string = getState().summoner.sumName;
    const sumRegion: string = getState().summoner.sumRegion;
    axios.get(`https://${sumRegion}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${sumName}?api_key=${key}`).then(
      (res: AxiosResponse) => {
        const summonerDTO: SummonerDTO = res.data;
        const sumInfo: ISummoner = {
          sumName: summonerDTO.name,
          sumLevel: summonerDTO.summonerLevel,
          sumIcon: `http://ddragon.leagueoflegends.com/cdn/9.24.2/img/profileicon/${res.data.profileIconId}.png`,
          sumId: summonerDTO.id,
          sumRegion: sumRegion,
          splash: ''
        };
        dispatch(getSummonerMasteryAction(sumInfo));
      },
      (err: AxiosError) => {
        console.error('Error on api call', err);
        dispatch(errorSumInfoAction('Summoner not found.'));
      }
    );
  };
};

// TODO: Fix the way champId / champObject are assigned + add type to champObject
// Action used to get summoner masteries & best champion splash
export const getSummonerMasteryAction = (sumInfo: ISummoner) => {
  return (dispatch: Dispatch<any>, getState: Function) => {
    axios
      .get(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${sumInfo.sumId}?api_key=${key}`)
      .then((res: AxiosResponse) => {
        if (res.data.length > 0) {
          const champId: string = res.data[0].championId.toString();
          const champObject: any = getState().champions.filter((champion: any) => champion.key === champId)[0];
          const splash: string = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champObject.name}_0.jpg`;
          sumInfo.splash = splash;
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
