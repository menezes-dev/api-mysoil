import AppError from "../../errors/appError";
import { CreateSession } from "../../interfaces/session.interfaces";
import UserModel from "../../models/user.model";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const createSessionService = async (data: CreateSession): Promise<any> => {
  const user = await UserModel.findOne({ email: data.email });

  if (!user) throw new AppError("Crendenciais inválidas", 401);

  const comparePassword: boolean = await compare(data.password, user.password);

  if (!comparePassword) throw new AppError("Crendenciais inválidas", 401);

  const decoded = {
    id: user._id.toString(),
  };

  const options = {
    subject: user._id.toString(),
    expiresIn: process.env.EXPIRES_IN!,
  };

  const token = jwt.sign(decoded, process.env.SECRET_KEY as string, options);

  return { token, id: user._id.toString(), email: user.email };
};

export default createSessionService;
