import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const checkedLogin = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  try {
    const token = authorization?.split(" ")[1];
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
      const { username } = decoded as { username: string };
      req.body.username = username;
      next();
    } else {
      next("Authentication failed");
    }
  } catch (error) {
    next("Authentication failed");
  }
};
