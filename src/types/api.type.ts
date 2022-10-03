import { GameDetailsType } from "./data.type";

export type EndpointsType = {
  gameDetails: {
    get: string;
    post: string;
  };
};
export type ErrorResponse = {
  success: boolean;
  error: string | null;
};

export type MethodsType = {
  gameDetails: {
    get: () => Promise<GameDetailsType>;
    post: (matchId: string, winnerId: string) => Promise<ErrorResponse>;
  };
};
