import express from "express";
import UploadController from "../controllers/upload";
import { upload } from "../utils/multer";
const uploadRouter = express.Router();

uploadRouter.post("/", upload.array("file", 5), UploadController.Upload);

export default uploadRouter;
