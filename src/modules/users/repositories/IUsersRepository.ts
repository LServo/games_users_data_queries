import { Game } from "../../games/entities/Game";
import {
    IFindUserWithGamesDTO,
    IFindUserByFullNameDTO,
    ICreateUserDTO,
} from "../dtos";
import { User } from "../entities/User";

export interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    pickOneGame(user: User, game: Game[]): Promise<User>;
    findUserWithGamesById(data: IFindUserWithGamesDTO): Promise<User>;
    findAllUsersOrderedByFirstName(): Promise<User[]>;
    findUserByFullName(
        data: IFindUserByFullNameDTO
    ): Promise<User[] | undefined>;
}
