export interface IState {
  summoner: Summoner;
  champions: Array<Object>;
  isLoading: boolean;
  error: Error;
}

export interface Error {
  isError: boolean;
  message: string;
}

export interface Summoner {
  sumName: string;
  sumIcon: string;
  sumLevel: number;
  sumRegion: string;
  sumId: string;
  sumSplash: string;
  sumLeague: Array<League>;
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

export interface League {
  queueType: string;
  wins: number;
  losses: number;
  tier: string;
  rank: string;
  leaguePoints: number;
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

export interface ChampionMasteryDTO {
  championId: number;
  championLevel: number;
  championPoints: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  lastPlayTime: number;
  summonerId: string;
  tokensEarned: number;
}

export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  tags: Array<string>;
}
