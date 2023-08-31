import { Request, Response } from "express";
import { FILTER_PARAMS, IGame, IGameDetails } from "../types/types";
import { getGameById, getGamesList } from "./api/gameDetails";

class GamesController {
  async getGames(req: Request, res: Response) {
    const params: FILTER_PARAMS = {
      platform: <string>req.query.platform,
      category: <string>req.query.category,
      "sort-by": <string>req.query["sort-by"],
    };
    const data: IGame[] | null = await getGamesList(params);
    res.json(data);
  }
  async getGameDetails(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (!id) res.send("Please enter valid game id");

    const data: IGameDetails | null = await getGameById(id);
    res.json(data);
  }
}

export default new GamesController();
