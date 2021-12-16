import { Router } from "express";

import { CreateGameController } from "../modules/games/useCases/createGame/CreateGameController";
import { FindByTitleContainingController } from "../modules/games/useCases/findByTitleContaining/FindByTitleContainingController";

const gamesRoutes = Router();
const createGameController = new CreateGameController();
const findByTitleContainingController = new FindByTitleContainingController();

gamesRoutes.post("/", createGameController.handle);
gamesRoutes.get("/findtitle", findByTitleContainingController.handle);

export { gamesRoutes };
