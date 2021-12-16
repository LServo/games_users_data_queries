import { getRepository, Repository } from "typeorm";

import { Game } from "../../../games/entities/Game";
import {
    IFindUserWithGamesDTO,
    IFindUserByFullNameDTO,
    ICreateUserDTO,
} from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        first_name,
        last_name,
        email,
    }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            first_name,
            last_name,
            email,
            games: [],
        });

        const newUser = await this.repository.save(user);

        return newUser;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });

        await this.repository.save(user);

        return user;
    }

    async pickOneGame(user: User, game: Game[]): Promise<User> {
        const newUser = user;
        newUser.games = game;

        return newUser;
    }

    async findUserWithGamesById({
        user_id,
    }: IFindUserWithGamesDTO): Promise<User> {
        const user = this.repository.findOneOrFail(user_id, {
            relations: ["games"],
        });

        return user;
    }

    async findAllUsersOrderedByFirstName(): Promise<User[]> {
        return this.repository.query("SELECT * FROM users ORDER BY first_name"); // Complete usando raw query
    }

    async findUserByFullName({
        first_name,
        last_name,
    }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
        return this.repository.query(
            "SELECT * FROM users WHERE first_name ILIKE $1 AND last_name ILIKE $2",
            [first_name, last_name]
        ); // Complete usando raw query
    }
}
