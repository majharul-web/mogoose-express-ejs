import { NextFunction, Request, Response } from "express";
import { get } from "mongoose";
import { getAllProductsService } from "./product.service";
import { sendApiResponse } from "../../utils/responseHandler";

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  const products = await getAllProductsService();
  sendApiResponse(res, 200, true, "product found", products);
};
