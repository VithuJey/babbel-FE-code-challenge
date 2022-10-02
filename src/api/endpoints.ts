import { EndpointsType } from "../types/api.type";

export const API_ENDPOINTS: EndpointsType = {
  gameDetails: {
    get: `${process.env.REACT_APP_BASE_API}/api/game`,
    post: `${process.env.REACT_APP_BASE_API}/api/game`,
  },
};
