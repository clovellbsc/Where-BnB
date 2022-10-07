interface IAccommodation {
  _id: string;
  name: string;
  location: string;
  photos: string[];
  owner: { username: string; avatar: string };
  pricePerNight: number;
  noOfGuests: number;
  noOfBaths: number;
  description: string;
}

interface AccommodationProps {
  accommodation: IAccommodation;
}
