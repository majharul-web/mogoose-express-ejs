import mongoose, { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
