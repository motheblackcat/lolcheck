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
    sumLeague: [],
    sumChamp: ''
  },
  champions: [],
  isLoading: false,
  error: {
    isError: false,
    message: ''
  }
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
        error: { ...state.error, isError: false, message: '' },
        summoner: {
          ...state.summoner,
          sumName: action.payload.sumName,
          sumLevel: action.payload.sumLevel,
          sumIcon: action.payload.sumIcon,
          sumId: action.payload.sumId,
          sumSplash: action.payload.sumSplash,
          sumChamp: action.payload.sumChamp,
          sumLeague: action.payload.sumLeague
        }
      };

    case summonerActions.ERROR_SUM_INFO:
      return {
        ...state,
        isLoading: false,
        error: { ...state.error, isError: true, message: action.payload }
      };

    case summonerActions.SET_CHAMPION_DATA:
      return { ...state, champions: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
