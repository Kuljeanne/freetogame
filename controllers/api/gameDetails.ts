import { ENDPOINTS } from "../../constants";
import { FILTER_PARAMS, IGame, IGameDetails } from "../../types/types";
import axios from "./axios";

export const getGamesList = async (
  params: FILTER_PARAMS = {}
): Promise<IGame[] | null> => {
  const res = await axios.get<IGame[]>(ENDPOINTS.GAMES, {
    params: params,
  });

  return res.status === 200 ? res.data : null;
};

export const getGameById = async (id: number): Promise<IGameDetails | null> => {
  const res = await axios.get<IGameDetails>(ENDPOINTS.GAMES_DETAILS, {
    params: { id },
  });

  return res.status === 200 ? res.data : null;
};
