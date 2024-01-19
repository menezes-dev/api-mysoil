import { Router } from "express";
import createSessionController from "../controllers/session/createSession.controller";
import createSessionFieldsMiddleware from "../middleware/createSessionFields.middleware";

const sessionRoutes: Router = Router();

sessionRoutes.post("/", createSessionFieldsMiddleware, createSessionController);

export default sessionRoutes;
