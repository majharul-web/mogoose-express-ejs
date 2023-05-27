import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUserService, findUserByName } from "./user.service";
import { sendApiResponse } from "../../utils/responseHandler";

export const createUser = async (req: Request, res: Response) => {
  try {
    const hashesPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = {
      name: req.body.name,
      username: req.body.username,
      password: hashesPassword,
      active: true,
    };

    const user = createUserService(newUser);
    sendApiResponse(res, 200, true, "user created successfully", user);
  } catch (error) {
    sendApiResponse(res, 500, false, "something went wrong", error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await findUserByName(username);
    if (user && user.length > 0) {
      const isPasswordValid = await bcrypt.compare(password, user[0].password);
      if (isPasswordValid) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY as string, { expiresIn: "1h" });
        sendApiResponse(res, 200, true, "user logged in successfully", token);
      } else {
        sendApiResponse(res, 401, false, "Authentication failed", "password is not valid");
      }
    }
  } catch (error) {
    sendApiResponse(res, 500, false, "something went wrong", null, error);
  }
};
