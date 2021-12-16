import { User } from "../../users/entities/User";
import { Game } from "../entities/Game";

export interface IGamesRepository {
    create(title: string): Promise<Game>;
    findById(game_id: string): Promise<Game>;
    findByTitleContaining(title: string): Promise<Game[]>;
    countAllGames(): Promise<[{ count: string }]>;
    findUsersByGameId(id: string): Promise<User[]>;
}
