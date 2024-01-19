import { Router } from "express";
import createSessionController from "../controllers/Session/createSession.controller";

const sessionRoutes: Router = Router();

sessionRoutes.post("/", createSessionController);

export default sessionRoutes;
