import Router from "express";
import gamesController from "../controllers/games.controller";

const router = Router();

router.get("/games", gamesController.getGames);
router.get("/game/:id", gamesController.getGameDetails);

export default router;
