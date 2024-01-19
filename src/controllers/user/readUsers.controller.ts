import { Request, Response } from "express";
import { UserDocument } from "../../interfaces/user.interfaces";
import readUsersService from "../../services/user/readUsers.service";

const readUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: UserDocument[] = await readUsersService();

  return res.status(200).json(users);
};

export default readUsersController;
