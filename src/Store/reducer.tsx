import * as summonerActions from './actions';
import ISummoner from '../Interfaces/summoner-interface';

// TODO: Check to move this state as a sub state to a summoner state
const initalState: ISummoner = {
  sumName: '',
  sumIcon: '',
  sumLevel: '',
  sumRegion: 'euw1'
};

// The Redux Toolkit createReducer() could be used here
const rootReducer = (state: ISummoner = initalState, action: any) => {
  switch (action.type) {
    // Udpate sumName from the action payload filled from the user input value
    case summonerActions.GET_SUM_NAME:
      return { ...state, sumName: action.payload };

    // Udpate sumRegion from the action payload filled from the user select value
    case summonerActions.GET_SUM_REGION:
      return { ...state, sumRegion: action.payload };

    // No changes to the store since this action is only for the API call?
    case summonerActions.GET_SUM_INFO:
      return state;

    // Update sumLevel from the action payload from the API response (check if it's correct)
    case summonerActions.UPDATE_SUM_INFO:
      return { ...state, sumLevel: action.payload.sumLevel, sumIcon: action.payload.sumIcon };

    default:
      return state;
  }
};

export default rootReducer;
