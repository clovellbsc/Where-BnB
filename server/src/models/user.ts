import { Schema, model, Model, Document } from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  avatar: string;
}

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: String,
});

const User = model<IUser>("User", userSchema);

export default User;
