import { Dispatch } from 'redux';

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
    // Make api call to get res
    const res = { sumLevel: '120', sumIcon: 'Thresh' };
    setTimeout(() => {
      dispatch(updateSumInfoAction(res));
    }, 2000);
  };
};

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
