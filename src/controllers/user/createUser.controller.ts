import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";
import { CreateUser, UserDocument } from "../../interfaces/user.interfaces";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: CreateUser = req.body;
  const newUser: UserDocument = await createUserService(data);

  return res.status(201).json(newUser);
};

export default createUserController;
