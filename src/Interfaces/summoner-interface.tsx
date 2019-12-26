export interface ISummoner {
  summoner: {
    sumName: string;
    sumIcon: string;
    sumLevel: string;
    sumRegion: string;
    sumId: string;
    splash: string;
  };
  isLoading: boolean;
}

export interface IAPISummoner {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}
