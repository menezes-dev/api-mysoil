import AppError from "../../errors/appError";
import { UserDocument } from "../../interfaces/user.interfaces";
import UserModel from "../../models/user.model";

const retireveUserService = async (id: string): Promise<UserDocument> => {
  const user = await UserModel.findById(id);

  if (!user) throw new AppError("Usuaário não encontrado", 404);

  return user;
};

export default retireveUserService;
