import { Request, Response } from "express";
import catchBlock from "../utils/catchBlock";
import accommodationSchema from "../models/accommodation";
import { s3Uploadv2 } from "../utils/s3Service";

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
  Delete: async (req: Request, res: Response) => {
    const accommodationID = req.params.id;
    try {
      const accommodation = await accommodationSchema.findByIdAndRemove({
        _id: accommodationID,
      });

      res.send({
        success: "Successfully deleted",
        accommodation: accommodation,
      });
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
  UploadImages: async (req: Request, res: Response) => {
    const accommodationId = req.params.id;
    const accommodation = await accommodationSchema.findOne({
      _id: accommodationId,
    });
    const files = req.files as Express.Multer.File[];

    try {
      const results = await s3Uploadv2(files);
      console.log(results);
      if (accommodation) {
        results.forEach((file) => accommodation.photos.push(file.Location));
        await accommodation.save();
        res.send({ success: "successful", accommodation });
      } else {
        res.status(400).send("No such accommodation");
      }
      res.send({ success: "successful", results });
    } catch (e: unknown) {
      catchBlock(e, res);
    }
  },
};

export default AccommodationController;
