import { Router } from "express";
import { getAllProducts } from "./product.controller";
import { checkedLogin } from "../../utils/checkedLogin";

const router = Router();

router.get("/getAllProducts", checkedLogin, getAllProducts);

export default router;
