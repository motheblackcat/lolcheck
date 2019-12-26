import { Dispatch } from 'redux';
import { key } from '../tempdevconf';
import { IAPISummoner } from '../Interfaces/summoner-interface';

export const GET_SUM_NAME = 'GET_SUM_NAME';
export const GET_SUM_REGION = 'GET_SUM_REGION';
export const GET_SUM_INFO = 'GET_SUM_INFO';
export const LOAD_SUM_INFO = 'LOAD_SUM_INFO';
export const UPDATE_SUM_INFO = 'UPDATE_SUM_INFO';

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
    dispatch(loadSumInfoAction());
    const server = getState().summoner.sumRegion;
    const sumName = getState().summoner.sumName;
    const url = `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${sumName}?api_key=${key}`;
    window
      .fetch(url)
      .then((res: Response) => res.json())
      .then((data: IAPISummoner) => {
        const sumInfo = {
          sumLevel: data.summonerLevel,
          sumIcon: `http://ddragon.leagueoflegends.com/cdn/9.24.2/img/profileicon/685.png${data.profileIconId}`
        };
        dispatch(updateSumInfoAction(sumInfo));
      });
  };
};

// Action used for the loader
export const loadSumInfoAction = () => {
  return {
    type: LOAD_SUM_INFO
  };
};

// Action used to update the summoner's info after receiving them from the Riot API (payload type should be the API res type)
export const updateSumInfoAction = (payload: any) => {
  return {
    type: UPDATE_SUM_INFO,
    payload
  };
};
