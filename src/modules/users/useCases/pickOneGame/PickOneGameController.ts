import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindGameByIdUseCase } from "../../../games/useCases/findGameById/FindGameByIdUseCase";
import { PickOneGameUseCase } from "./PickOneGameUseCase";

class PickOneGameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, game_id } = request.body;
        const pickOneGameUseCase = container.resolve(PickOneGameUseCase);
        const findGameByIdUseCase = container.resolve(FindGameByIdUseCase);

        const gamePicked = await findGameByIdUseCase.execute(game_id);
        const userPickedGame = await pickOneGameUseCase.execute(email, [
            gamePicked,
        ]);

        return response.status(201).json(userPickedGame);
    }
}

export { PickOneGameController };
