import { Game } from "../../games/entities/Game";

interface IFindUserWithGamesDTO {
    user_id: string;
}

interface IFindUserByFullNameDTO {
    first_name: string;
    last_name: string;
}

interface ICreateUserDTO {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    games?: Game[];
}

export { IFindUserWithGamesDTO, IFindUserByFullNameDTO, ICreateUserDTO };
