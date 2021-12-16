import { getRepository, Repository } from "typeorm";

import { User } from "../../../users/entities/User";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../IGamesRepository";

export class GamesRepository implements IGamesRepository {
    private repository: Repository<Game>;

    constructor() {
        this.repository = getRepository(Game);
    }

    async create(title: string): Promise<Game> {
        const game = this.repository.create({ title });

        const newGame = await this.repository.save(game);

        return newGame;
    }

    async findById(game_id: string): Promise<Game> {
        const game = this.repository.findOne({ id: game_id });

        return game;
    }

    async findByTitleContaining(param: string): Promise<Game[]> {
        return this.repository
            .createQueryBuilder()
            .where("title ILIKE :title", { title: `%${param}%` })
            .getMany();
        // Complete usando query builder
    }

    async countAllGames(): Promise<[{ count: string }]> {
        return this.repository.query("SELECT count(title) from games"); // Complete usando raw query
    }

    async findUsersByGameId(id: string): Promise<User[]> {
        return this.repository
            .createQueryBuilder("user_game_game")
            .relation(Game, "users")
            .of(id)
            .loadMany();
    }
}
