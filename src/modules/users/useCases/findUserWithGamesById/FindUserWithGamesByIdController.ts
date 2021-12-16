import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindUserWithGamesByIdUseCase } from "./FindUserWithGamesByIdUseCase";

class FindUserWithGamesByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.headers;
        const findUserWithGamesByIdUseCase = container.resolve(
            FindUserWithGamesByIdUseCase
        );

        const userFounded = await findUserWithGamesByIdUseCase.execute({
            user_id: String(user_id),
        });

        return response.json(userFounded);
    }
}

export { FindUserWithGamesByIdController };
