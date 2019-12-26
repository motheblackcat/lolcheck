import * as summonerActions from './actions';
import { ISummoner } from '../Interfaces/summoner-interface';

const initalState: ISummoner = {
  summoner: {
    sumName: '',
    sumIcon: '',
    sumLevel: '',
    sumRegion: 'euw1',
    sumId: '',
    splash: ''
  },
  champions: [],
  isLoading: false
};

const rootReducer = (state: ISummoner = initalState, action: any) => {
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
          splash: action.payload.splash
        }
      };

    case summonerActions.ERROR_SUM_INFO:
      return {
        ...state,
        isLoading: false,
        summoner: { ...state.summoner, sumName: action.payload, sumLevel: '', sumIcon: '', splash: '' }
      };

    case summonerActions.SET_CHAMPION_DATA:
      return { ...state, champions: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
