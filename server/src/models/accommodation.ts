import { Schema, model, Document } from "mongoose";

export interface IAccommodation extends Document {
  name: string;
  location: string;
  photos: string[];
  owner: Schema.Types.ObjectId;
  pricePerNight: number;
  noOfGuests: Number;
  noOfBaths: Number;
  description: string;
}

const AccommodationSchema = new Schema({
  name: {
    type: String,
    required: [true, "Add a name for your new listing."],
  },
  location: {
    type: String,
    required: [true, "Please add a location for your new listing."],
  },
  photos: [{ type: String }],
  pricePerNight: {
    type: Number,
    required: [true, "Please add a Price per night for your new listing."],
  },
  noOfGuests: {
    type: Number,
    required: [true, "Please state how many guests your new listing can hold."],
  },
  noOfBaths: {
    type: Number,
    required: [true, "Please state how many bathrooms your new listing has."],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    req: true,
  },
  description: String,
});

const Accommodation = model<IAccommodation>(
  "Accommodation",
  AccommodationSchema
);

export default Accommodation;
