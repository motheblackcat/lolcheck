// TODO: Type champions correctly
export interface IState {
  summoner: ISummoner;
  champions: Array<Object>;
  isLoading: boolean;
}

export interface ISummoner {
  sumName: string;
  sumIcon: string;
  sumLevel: number;
  sumRegion: string;
  sumId: string;
  splash: string;
}

export interface SummonerDTO {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

export interface LeagueEntryDTO {
  queueType: string;
  summonerName: string;
  hotStreak: boolean;
  wins: number;
  veteran: boolean;
  losses: number;
  rank: string;
  tier: string;
  inactive: boolean;
  freshBlood: boolean;
  leagueId: string;
  summonerId: string;
  leaguePoints: number;
}
