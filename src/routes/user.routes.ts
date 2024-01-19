import { Router } from "express";
import retireveUserController from "../controllers/user/retireveUser.controller";
import createUserController from "../controllers/user/createUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import readUsersController from "../controllers/user/readUsers.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import createUserFieldsMiddleware from "../middleware/createUserFields.middleware";

const userRoutes: Router = Router();

userRoutes.post("/", createUserFieldsMiddleware, createUserController);
userRoutes.get("/", readUsersController);
userRoutes.get("/:id", retireveUserController);
userRoutes.patch("/:id", updateUserController);
userRoutes.delete("/:id", deleteUserController);

export default userRoutes;
