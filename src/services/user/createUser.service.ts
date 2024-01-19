import { hash } from "bcryptjs";
import { CreateUser } from "../../interfaces/user.interfaces";
import UserModel from "../../models/user.model";

const CreateUserService = async (data: CreateUser): Promise<any> => {
  data.password = await hash(data.password, 10);

  const newUser = await UserModel.create(data);
  const userInstance = newUser.toObject();

  return userInstance;
};

export default CreateUserService;
