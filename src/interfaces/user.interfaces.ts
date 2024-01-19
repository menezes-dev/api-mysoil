import { Document } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  password: string;
}

export interface CreateUser {
  email: string;
  password: string;
}
