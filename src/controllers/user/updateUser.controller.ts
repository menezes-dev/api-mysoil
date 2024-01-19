import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.service";
import { UpdateUser, UserDocument } from "../../interfaces/user.interfaces";

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;
  const data: UpdateUser = req.body;

  const updatedUser: UserDocument = await updateUserService(id, data);

  return res.status(200).json(updatedUser);
};

export default updateUserController;
