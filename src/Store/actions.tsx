export const GET_SUM_NAME = 'GET_SUM_NAME';
export const getSumNameAction = (payload: string) => {
  return {
    type: GET_SUM_NAME,
    payload
  };
};

export const GET_SUM_REGION = 'GET_SUM_REGION';
export const getSumRegionAction = (payload: string) => {
  return {
    type: GET_SUM_REGION,
    payload
  };
};

// Action used to trigger the Riot API call
export const GET_SUM_INFO = 'GET_SUM_INFO';
export const getSumInfoAction = () => {
  return {
    type: GET_SUM_INFO
  };
};

// Action used to update the summoner's info after receiving data from the API
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
