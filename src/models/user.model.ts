import { Schema, model } from "mongoose";
import { UserDocument } from "../interfaces/user.interfaces";

const userSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
});

const UserModel = model<UserDocument>("User", userSchema);

export default UserModel;
