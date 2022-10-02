import { MethodsType } from "../types/api.type";
import { API_ENDPOINTS } from "./endpoints";

export const API_METHODS: MethodsType = {
  gameDetails: {
    get: () => fetch(API_ENDPOINTS.gameDetails.get).then(data => data.json()),
    post: (matchId, winnerId) =>
      fetch(API_ENDPOINTS.gameDetails.post, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ matchId, winnerId }),
      }).then(data => data.json()),
  },
};
