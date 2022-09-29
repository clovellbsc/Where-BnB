import express from "express";
import AccommodationController from "../controllers/accommodation";
import { upload } from "../utils/multer";
const accommodationRouter = express.Router();

accommodationRouter.get("/", AccommodationController.All);
accommodationRouter.post(
  "/create",
  AccommodationController.CreateAccommodation
);
accommodationRouter.get(
  "/users-accommodation",
  AccommodationController.UsersAccommodation
);
accommodationRouter.post("/delete/:id", AccommodationController.Delete);
accommodationRouter.post(
  "/upload/:id",
  upload.array("file", 5),
  AccommodationController.UploadImages
);

export default accommodationRouter;
