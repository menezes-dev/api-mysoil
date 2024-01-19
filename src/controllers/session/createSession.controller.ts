import { Request, Response } from "express";
import createSessionService from "../../services/session/createSession.service";

const createSessionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const session = await createSessionService(data);

  return res.status(200).json(session);
};

export default createSessionController;
