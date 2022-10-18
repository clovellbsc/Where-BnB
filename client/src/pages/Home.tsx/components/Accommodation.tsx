import "./accommodationStyle.css";
import { ReactComponent as Star } from "../../../../src/star-full-icon.svg";

const AccommodationSnippet = ({ accommodation }: AccommodationProps) => {
  const { _id, location, photos, owner, pricePerNight } = accommodation;

  return (
    <a href={`/${_id}`}>
      <div className="container">
        <div className="image-container">
          {!!photos.length && <img src={photos[0]} alt="" />}
        </div>
        <main className="body">
          <div className="info">
            <p className="bold">{location}</p>
            <p className="dim">{owner.username}</p>
            <p className="underlined">
              <span className="bold">£{pricePerNight}</span> per night
            </p>
          </div>
          <div className="rating">
            <p>
              <Star style={{ height: "0.75rem", width: "0.75rem" }} /> 5.00
            </p>
          </div>
        </main>
      </div>
    </a>
  );
};

export default AccommodationSnippet;
