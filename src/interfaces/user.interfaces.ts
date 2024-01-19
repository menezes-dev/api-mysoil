import { Document } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  password: string;
  username: string;
}

export interface CreateUser {
  email: string;
  password: string;
  username: string;
}

export interface UpdateUser {
  email?: string;
  password?: string;
  username?: string;
}

export interface DeleteUser {
  message: string;
}
