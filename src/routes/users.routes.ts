import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { FindAllUsersOrderedByFirstNameController } from "../modules/users/useCases/findAllUsersOrderedByFirstName/FindAllUsersOrderedByFirstNameController";
import { FindUserByFullNameController } from "../modules/users/useCases/findUserByFullName/FindUserByFullNameController";
import { FindUserWithGamesByIdController } from "../modules/users/useCases/findUserWithGamesById/FindUserWithGamesByIdController";
import { PickOneGameController } from "../modules/users/useCases/pickOneGame/PickOneGameController";

const usersRoutes = Router();
const createUserController = new CreateUserController();
const pickOneGameController = new PickOneGameController();
const findUserByFullNameController = new FindUserByFullNameController();
const findUserWithGamesByIdController = new FindUserWithGamesByIdController();
const findAllUsersOrderedByFirstNameController =
    new FindAllUsersOrderedByFirstNameController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.post("/pickgame", pickOneGameController.handle);
usersRoutes.post("/fullname", findUserByFullNameController.handle);
usersRoutes.get("/withgames", findUserWithGamesByIdController.handle);
usersRoutes.get("/ordered", findAllUsersOrderedByFirstNameController.handle);

export { usersRoutes };
