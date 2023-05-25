import { IProduct } from "./product.interface";
import Product from "./product.model";

export const getAllProductsService = async (): Promise<IProduct[]> => {
  return await Product.find();
};
