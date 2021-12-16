import { inject, injectable } from "tsyringe";

import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class CreateGameUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) {}

    async execute(title: string): Promise<Game> {
        const newGame = await this.gamesRepository.create(title);

        return newGame;
    }
}

export { CreateGameUseCase };
