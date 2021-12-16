import { inject, injectable } from "tsyringe";

import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

@injectable()
class FindAllUsersOrderedByFirstNameUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {}

    async execute(): Promise<User[]> {
        const allUsersList =
            await this.usersRepository.findAllUsersOrderedByFirstName();

        return allUsersList;
    }
}

export { FindAllUsersOrderedByFirstNameUseCase };
