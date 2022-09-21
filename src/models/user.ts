import { Schema, model, Model, Document } from "mongoose";

interface IUser {
  username: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
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
});

const User = model<IUser>("User", userSchema);

export default User;
