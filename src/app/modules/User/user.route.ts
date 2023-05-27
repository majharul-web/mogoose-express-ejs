import { Router } from "express";
import { createUser, login } from "./user.controller";

const router = Router();

router.post("/signup", createUser).post("/login", login);

export default router;
