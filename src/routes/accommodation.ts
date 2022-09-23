import express from "express";
import AccommodationController from "../controllers/accommodation";
const accommodationRouter = express.Router();

accommodationRouter.get("/", AccommodationController.All);

export default accommodationRouter;
