import AppError from "../../errors/appError";
import { UpdateUser, UserDocument } from "../../interfaces/user.interfaces";
import UserModel from "../../models/user.model";

const updateUserService = async (
  id: string,
  data: UpdateUser
): Promise<UserDocument> => {
  const userUpdate = await UserModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });

  if (!userUpdate) throw new AppError("Usuário não encontrado", 404);

  return userUpdate;
};

export default updateUserService;
