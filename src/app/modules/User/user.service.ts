import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserService = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  return user;
};
export const findUserByName = async (payload: string): Promise<IUser[] | []> => {
  const user = User.find({ username: payload });
  return user;
};
