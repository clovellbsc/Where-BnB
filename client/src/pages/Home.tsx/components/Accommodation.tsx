const Accommodation = ({ accommodation }: AccommodationProps) => {
  const {
    name,
    location,
    photos,
    owner,
    description,
    pricePerNight,
    noOfGuests,
    noOfBaths,
  } = accommodation;

  return (
    <div>
      {photos.length && <div></div>}
      <div>
        <h1>{name}</h1>
        <h4>{location}</h4>
        <div>
          <p>{owner.username}</p>
          <img src={owner.avatar} alt={`${owner.username}'s avatar'`} />
        </div>
      </div>
      <div>
        <h4>Price Per Night: {pricePerNight}</h4>
        <h4>Number of Guests {noOfGuests}</h4>
        <h4>Number of Bathrooms {noOfBaths}</h4>
      </div>
      <div>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Accommodation;
