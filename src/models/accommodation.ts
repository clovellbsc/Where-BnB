import { Schema, model } from "mongoose";

interface IAccommodation {
  name: string;
  location: string;
  photos: [type: Schema.Types.ObjectId];
  owner: Schema.Types.ObjectId;
  pricePerNight: number;
  noOfGuests: Number;
  noOfBaths: Number;
}

const AccommodationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  photos: [
    {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
  ],
  pricePerNight: {
    type: Number,
    required: true,
  },
  noOfGuests: {
    type: Number,
    required: true,
  },
  noOfBaths: {
    type: Number,
    required: true,
  },
});

const Accommodation = model<IAccommodation>(
  "Accommodation",
  AccommodationSchema
);

export default Accommodation;
