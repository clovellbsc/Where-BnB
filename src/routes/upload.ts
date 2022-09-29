import express from "express";
import UploadController from "../controllers/upload";
import { uploadUpTo5Images } from "../utils/multer";
const uploadRouter = express.Router();

uploadRouter.post(
  "/",
  uploadUpTo5Images.array("file", 5),
  UploadController.Upload
);

export default uploadRouter;
