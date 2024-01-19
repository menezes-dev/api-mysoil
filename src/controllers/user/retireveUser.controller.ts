import { Request, Response } from "express";
import retireveUserService from "../../services/user/retireveUser.service";
import { UserDocument } from "../../interfaces/user.interfaces";

const retireveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;

  const user: UserDocument = await retireveUserService(id);

  return res.status(200).json(user);
};

export default retireveUserController;
