import * as summonerActions from './actions';
import ISummoner from '../Interfaces/summoner-interface';

const initalState: ISummoner = {
  sumName: '',
  sumIcon: '',
  sumLevel: '',
  sumRegion: 'euw1'
};

const rootReducer = (state: ISummoner = initalState, action: any) => {
  switch (action.type) {
    case summonerActions.GET_SUM_NAME:
      return { ...state, sumName: action.payload };

    case summonerActions.GET_SUM_REGION:
      return { ...state, sumRegion: action.payload };

    case summonerActions.GET_SUM_INFO:
      return state;

    case summonerActions.UPDATE_SUM_INFO:
      return { ...state, sumLevel: action.payload.sumLevel, sumIcon: action.payload.sumIcon };

    default:
      return state;
  }
};

export default rootReducer;
