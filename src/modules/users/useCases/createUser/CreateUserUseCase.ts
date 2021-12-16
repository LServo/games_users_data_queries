import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        first_name,
        last_name,
        email,
    }: ICreateUserDTO): Promise<User> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const newUser = await this.usersRepository.create({
            first_name,
            last_name,
            email,
        });

        return newUser;
    }
}

export { CreateUserUseCase };
