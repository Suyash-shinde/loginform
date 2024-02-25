import { Register } from "../controllers/user.controller.js";
import { login } from "../controllers/user.controller.js";
import {Router} from "express";

const router=Router();
router.route("/register").post(Register);
router.route("/login").post(login);
export default router; 