export type PlayerType = {
  id: string;
  name: string;
  imageUrl: string;
};

export type GameDetailsType = {
  matchId: string;
  players: Array<PlayerType>;
  scoreToWin: number;
};
