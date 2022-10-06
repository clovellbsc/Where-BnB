import express from "express";
import UserController from "../controllers/user";
import { auth } from "../utils/auth";
import { upload1Image } from "../utils/multer";
const userRouter = express.Router();

userRouter.post("/login", UserController.Login);
userRouter.post("/register", UserController.Register);
userRouter.post("/delete", auth, UserController.Delete);
userRouter.get("/", UserController.get);
userRouter.post(
  "/upload",
  upload1Image.array("file", 1),
  auth,
  UserController.UploadAvatar
);
userRouter.post("/forgot-password", UserController.ForgotPassword);
userRouter.post("/reset-password/:id/:token", UserController.ResetPassword);

export default userRouter;
