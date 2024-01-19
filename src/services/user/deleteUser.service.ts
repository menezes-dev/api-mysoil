import AppError from "../../errors/appError";
import UserModel from "../../models/user.model";

const deleteUserService = async (id: string): Promise<void> => {
  const deletedUser = await UserModel.findOneAndDelete({ _id: id });

  if (!deletedUser) throw new AppError("Usuário não encontrado", 404);
};

export default deleteUserService;
