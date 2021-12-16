import { inject, injectable } from "tsyringe";

import { Game } from "../../../games/entities/Game";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class PickOneGameUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(email: string, gamePicked: Game[]): Promise<User> {
        const findUser = await this.usersRepository.findByEmail(email);

        const newUser = await this.usersRepository.pickOneGame(
            findUser,
            gamePicked
        );

        return newUser;
    }
}

export { PickOneGameUseCase };
