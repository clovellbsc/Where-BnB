import { Schema, model } from "mongoose";

interface IAccommodation {
  name: string;
  location: string;
  photos: string[];
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
  photos: [{ type: String }],
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
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Accommodation = model<IAccommodation>(
  "Accommodation",
  AccommodationSchema
);

export default Accommodation;
