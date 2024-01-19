import { hash } from "bcryptjs";
import { CreateUser, UserDocument } from "../../interfaces/user.interfaces";
import UserModel from "../../models/user.model";

const createUserService = async (data: CreateUser): Promise<UserDocument> => {
  data.password = await hash(data.password, 10);

  const newUser = await UserModel.create(data);
  const userInstance = newUser.toObject();

  return userInstance;
};

export default createUserService;
