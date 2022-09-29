import express from "express";
import AccommodationController from "../controllers/accommodation";
import { uploadUpTo5Images } from "../utils/multer";
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
  uploadUpTo5Images.array("file", 5),
  AccommodationController.UploadImages
);

export default accommodationRouter;
