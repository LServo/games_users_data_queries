import { inject, injectable } from "tsyringe";

import { IFindUserByFullNameDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class FindUserByFullNameUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        first_name,
        last_name,
    }: IFindUserByFullNameDTO): Promise<User[]> {
        const user = await this.usersRepository.findUserByFullName({
            first_name,
            last_name,
        });

        return user;
    }
}

export { FindUserByFullNameUseCase };
