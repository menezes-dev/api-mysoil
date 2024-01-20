import { hash } from "bcryptjs";
import { CreateUser, UserDocument } from "../../interfaces/user.interfaces";
import UserModel from "../../models/user.model";
import AppError from "../../errors/appError";

const createUserService = async (data: CreateUser): Promise<UserDocument> => {
  const verifyEmail = await UserModel.find({ email: data.email });

  if (verifyEmail.length > 0)
    throw new AppError("O email já está cadastrado", 400);

  data.password = await hash(data.password, 10);

  const newUser = await UserModel.create(data);
  const userInstance = newUser.toObject();

  return userInstance;
};

export default createUserService;
