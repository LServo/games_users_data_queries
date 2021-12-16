import { inject, injectable } from "tsyringe";

import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class FindGameByIdUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) {}

    async execute(game_id: string): Promise<Game> {
        const findGame = await this.gamesRepository.findById(game_id);

        return findGame;
    }
}

export { FindGameByIdUseCase };
