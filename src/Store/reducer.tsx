import * as summonerActions from './actions';
import { IState } from '../Interfaces/summoner-interface';

const initalState: IState = {
  summoner: {
    sumName: '',
    sumIcon: '',
    sumLevel: 0,
    sumRegion: 'euw1',
    sumId: '',
    sumSplash: '',
    sumLeague: []
  },
  champions: [],
  isLoading: false
};

const rootReducer = (state: IState = initalState, action: any) => {
  switch (action.type) {
    case summonerActions.GET_SUM_NAME:
      return { ...state, summoner: { ...state.summoner, sumName: action.payload } };

    case summonerActions.GET_SUM_REGION:
      return { ...state, summoner: { ...state.summoner, sumRegion: action.payload } };

    case summonerActions.LOADING_SUM_INFO:
      return { ...state, isLoading: true };

    case summonerActions.SUCCESS_SUM_INFO:
      return {
        ...state,
        isLoading: false,
        summoner: {
          ...state.summoner,
          sumName: action.payload.sumName,
          sumLevel: action.payload.sumLevel,
          sumIcon: action.payload.sumIcon,
          sumId: action.payload.sumId,
          sumSplash: action.payload.sumSplash,
          sumLeague: action.payload.sumLeague
        }
      };

    case summonerActions.ERROR_SUM_INFO:
      return {
        ...state,
        isLoading: false,
        summoner: { ...state.summoner, sumName: action.payload, sumLevel: 0, sumIcon: '', sumSplash: '', sumId: '', sumLeague: [] }
      };

    case summonerActions.SET_CHAMPION_DATA:
      return { ...state, champions: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
