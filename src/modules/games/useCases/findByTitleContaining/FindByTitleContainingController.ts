import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindByTitleContainingUseCase } from "./FindByTitleContainingUseCase";

class FindByTitleContainingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title } = request.headers;
        const findByTitleContainingUseCase = container.resolve(
            FindByTitleContainingUseCase
        );

        const list = await findByTitleContainingUseCase.execute({
            title: String(title),
        });

        return response.json(list);
    }
}

export { FindByTitleContainingController };
