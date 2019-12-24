// import { createAction } from '@reduxjs/toolkit';

// TODO: Check the Redux ToolKit way for the payload

// Redux Toolkit way to create the actions
// export const getSumNameAction = createAction('GET_SUM_NAME');
// export const getSumInfoAction = createAction('GET_SUM_INFO');
// export const updateSumInfoAction = createAction('UPDATE_SUM_INFO');

// Classic Redux way to create the actions
// Action used to get the summoner name from the input field
export const GET_SUM_NAME = 'GET_SUM_NAME';
export const getSumNameAction = (payload: any) => {
  return {
    type: GET_SUM_NAME,
    payload
  };
};

// Action used to trigger the API Call (payload will be sumName)
export const GET_SUM_INFO = 'GET_SUM_INFO';
export const getSumInfoAction = () => {
  return {
    type: GET_SUM_INFO,
    payload: {
      sumName: String,
      sumRegion: String
    }
  };
};

// Action used to update the summoner's info after receiving data from the API (payload will be the sumLevel since we already have sumName)
export const UPDATE_SUM_INFO = 'UPDATE_SUM_INFO';
export const updateSumInfoAction = () => {
  return {
    type: UPDATE_SUM_INFO,
    payload: {
      sumLevel: Number,
      sumIcon: String
    }
  };
};
