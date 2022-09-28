import { Request, Response } from "express";
import catchBlock from "../utils/catchBlock";
import accommodationSchema from "../models/accommodation";

const AccommodationController = {
  All: async (req: Request, res: Response) => {
    try {
      const accomodationArray = await accommodationSchema.find().limit(50);

      res
        .status(200)
        .send({ success: "Successful", accommodation: accomodationArray });
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
  CreateAccommodation: async (req: Request, res: Response) => {
    try {
      const userID = req.body.token._id;
      const { name, location, photos, pricePerNight, noOfGuests, noOfBaths } =
        req.body;

      const accommodation = await accommodationSchema.create({
        name: name,
        location: location,
        photos: photos,
        pricePerNight: pricePerNight,
        noOfGuests: noOfGuests,
        noOfBaths: noOfBaths,
        owner: userID,
      });

      res
        .status(200)
        .send({ success: "successful", accommodation: accommodation });
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
  UsersAccommodation: async (req: Request, res: Response) => {
    try {
      const userID = req.body.user;
      const accomodationArray = await accommodationSchema.find({
        user: userID,
      });

      res.send({ success: "Successful", accommodation: accomodationArray });
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
};

export default AccommodationController;
