import { inject, injectable } from "tsyringe";

import { IFindUserWithGamesDTO } from "../../dtos";
import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

@injectable()
class FindUserWithGamesByIdUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {}

    async execute({ user_id }: IFindUserWithGamesDTO): Promise<User> {
        const userFounded = await this.usersRepository.findUserWithGamesById({
            user_id,
        });

        return userFounded;
    }
}

export { FindUserWithGamesByIdUseCase };
