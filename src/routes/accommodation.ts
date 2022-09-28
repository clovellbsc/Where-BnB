import express from "express";
import AccommodationController from "../controllers/accommodation";
const accommodationRouter = express.Router();

accommodationRouter.get("/", AccommodationController.All);
accommodationRouter.post(
  "/create",
  AccommodationController.CreateAccommodation
);
accommodationRouter.get("/users-accommodation", AccommodationController.All);

export default accommodationRouter;
