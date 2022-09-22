import express from "express";
import UserController from "../controllers/user";
import { auth } from "../utils/auth";
const userRouter = express.Router();

userRouter.post("/login", UserController.Login);
userRouter.post("/register", UserController.Register);
userRouter.get("/", auth, UserController.get);

export default userRouter;
