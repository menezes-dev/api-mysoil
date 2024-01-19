import { Request, Response } from "express";
import CreateUserService from "../../services/User/createUser.service";

const CreateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;
  const newUser = await CreateUserService(data);

  return res.status(201).json(newUser);
};

export default CreateUserController;
