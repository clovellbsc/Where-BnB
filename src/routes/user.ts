import express from "express";
import UserController from "../controllers/user";
import { auth } from "../utils/auth";
import { upload } from "../utils/multer";
const userRouter = express.Router();

userRouter.post("/login", UserController.Login);
userRouter.post("/register", UserController.Register);
userRouter.post("/delete", auth, UserController.Delete);
userRouter.get("/", auth, UserController.get);
userRouter.post(
  "/upload",
  upload.array("file", 1),
  auth,
  UserController.UploadAvatar
);

export default userRouter;
