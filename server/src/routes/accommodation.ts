import express from "express";
import AccommodationController from "../controllers/accommodation";
import { uploadUpTo5Images } from "../utils/multer";
import { auth } from "../utils/auth";
const accommodationRouter = express.Router();

accommodationRouter.get("/", AccommodationController.All);
accommodationRouter.post(
  "/create",
  auth,
  AccommodationController.CreateAccommodation
);
accommodationRouter.get(
  "/users-accommodation",
  auth,
  AccommodationController.UsersAccommodation
);
accommodationRouter.post("/delete/:id", auth, AccommodationController.Delete);
accommodationRouter.post(
  "/upload/:id",
  auth,
  uploadUpTo5Images.array("file", 5),
  AccommodationController.UploadImages
);

export default accommodationRouter;
