import { Router } from "express";
import { getAllProducts } from "./product.controller";

const router = Router();

router.get("/getAllProducts", getAllProducts);

export default router;
