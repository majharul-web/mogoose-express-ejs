import mongoose, { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
      maxLength: 400,
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
export default Product;
