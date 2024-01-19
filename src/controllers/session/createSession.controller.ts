import { Request, Response } from "express";
import createSessionService from "../../services/session/createSession.service";
import {
  CreateSession,
  SessionReturn,
} from "../../interfaces/session.interfaces";

const createSessionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: CreateSession = req.body;
  const session: SessionReturn = await createSessionService(data);

  return res.status(200).json(session);
};

export default createSessionController;
