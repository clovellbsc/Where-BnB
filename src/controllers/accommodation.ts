import { Request, Response } from "express";
import catchBlock from "../utils/catchBlock";
import accommodationSchema from "../models/accommodation";

const AccommodationController = {
  All: async (req: Request, res: Response) => {
    try {
      const accomodationArray = accommodationSchema.find().limit(50);

      res
        .status(200)
        .send({ success: "Successful", accommodation: accomodationArray });
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
};

export default AccommodationController;
