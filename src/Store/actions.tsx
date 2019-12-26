import { Dispatch } from 'redux';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { key } from '../tempdevconf';

export const GET_SUM_NAME = 'GET_SUM_NAME';
export const GET_SUM_REGION = 'GET_SUM_REGION';
export const GET_SUM_INFO = 'GET_SUM_INFO';
export const LOADING_SUM_INFO = 'LOADING_SUM_INFO';
export const SUCCESS_SUM_INFO = 'SUCCESS_SUM_INFO';
export const ERROR_SUM_INFO = 'ERROR_SUM_INFO';

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

// Action used to trigger the Riot API call
export const getSumInfoAction = () => {
  return (dispatch: Dispatch, getState: Function) => {
    dispatch(loadingSumInfoAction());
    const server = getState().summoner.sumRegion;
    const sumName = getState().summoner.sumName;
    const url = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${sumName}?api_key=${key}`;
    // TODO: Oh no! Callback hell!!!
    // Call to get summoner info
    axios.get(url).then(
      (res: AxiosResponse) => {
        const sumInfo = {
          sumName: res.data.name,
          sumLevel: res.data.summonerLevel,
          sumIcon: `http://ddragon.leagueoflegends.com/cdn/9.24.2/img/profileicon/${res.data.profileIconId}.png`,
          sumId: res.data.id,
          splash: ''
        };
        // Call to get summoner masteries
        axios
          .get(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${sumInfo.sumId}?api_key=${key}`)
          .then((res: AxiosResponse) => {
            const champId = res.data[0].championId.toString();
            // Call to get all champions data (pull this out with correct typing)
            axios.get('http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json').then((res: AxiosResponse) => {
              // TODO: Refactor the way to get the champion name / splash
              const champName: any = Object.values(res.data.data).filter((champion: any) => champion.key === champId);
              const splash: string = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName[0].id}_0.jpg`;
              sumInfo.splash = splash;
              dispatch(successSumInfoAction(sumInfo));
            });
          });
      },
      // TODO: Improve error handling
      (err: AxiosError) => {
        console.error('Error on api call', err);
        dispatch(errorSumInfoAction('Summoner not found.'));
      }
    );
  };
};

// Action used for the loader
export const loadingSumInfoAction = () => {
  return {
    type: LOADING_SUM_INFO
  };
};

// Action used to handle success / error response from the Riot API call
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
