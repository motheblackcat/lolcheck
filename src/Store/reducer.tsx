import * as summonerActions from './actions';
import ISummoner from '../Interfaces/summoner-interface';

// TODO: Check to move the current state into a summoner state
const initalState: ISummoner = {
  sumName: '',
  sumIcon: '',
  sumLevel: 0,
  sumRegion: ''
};

// TODO: Check to define the correct action type and if the return statements are correct
// The Redux Toolkit createReducer() could be used here
const rootReducer = (state: ISummoner = initalState, action: any) => {
  console.log('ACTION', action.type);
  switch (action.type) {
    // Udpate sumName from the action payload filled from the user input value
    case summonerActions.getSumNameAction:
      console.log('CATCH');
      return { ...state, sumName: action.payload.sumName, sumRegion: action.payload.sumRegion };

    // No changes to the store since this action is only for the API call?
    case summonerActions.getSumInfoAction:
      console.log('CATCH');
      return state;

    // Update sumLevel from the action payload from the API response (check if it's correct)
    case summonerActions.updateSumInfoAction:
      console.log('CATCH');
      return { ...state, sumLevel: action.payload.sumLevel, sumIcon: action.payload.sumIcon };

    default:
      console.log('DEFAULT');
      return state;
  }
};

export default rootReducer;
