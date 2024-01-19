import { Router } from "express";
import CreateUserController from "../controllers/User/createUser.controller";
import getUserController from "../controllers/User/getUser.controller";

const userRoutes: Router = Router();

userRoutes.post("/", CreateUserController);
userRoutes.get("/", getUserController);

export default userRoutes;
