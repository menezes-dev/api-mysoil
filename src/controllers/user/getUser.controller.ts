import { Request, Response } from "express";

const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json({ message: "Usuário encontrado" });
};

export default getUserController;
