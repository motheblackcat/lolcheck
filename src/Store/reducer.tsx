import * as summonerActions from './actions';
import ISummoner from '../Interfaces/summoner-interface';

const initalState: ISummoner = {
  summoner: {
    sumName: '',
    sumIcon: '',
    sumLevel: '',
    sumRegion: 'euw1'
  },
  isLoading: false
};

const rootReducer = (state: ISummoner = initalState, action: any) => {
  switch (action.type) {
    case summonerActions.GET_SUM_NAME:
      return { ...state, summoner: { ...state.summoner, sumName: action.payload } };

    case summonerActions.GET_SUM_REGION:
      return { ...state, summoner: { ...state.summoner, sumRegion: action.payload } };

    case summonerActions.LOAD_SUM_INFO:
      return { ...state, isLoading: true };

    case summonerActions.UPDATE_SUM_INFO:
      return {
        ...state,
        isLoading: false,
        summoner: { ...state.summoner, sumLevel: action.payload.sumLevel, sumIcon: action.payload.sumIcon }
      };

    default:
      return state;
  }
};

export default rootReducer;
