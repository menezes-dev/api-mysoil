import { UserDocument } from "../../interfaces/user.interfaces";
import UserModel from "../../models/user.model";

const readUsersService = async (): Promise<UserDocument[]> => {
  const users = UserModel.find();

  return users;
};

export default readUsersService;
