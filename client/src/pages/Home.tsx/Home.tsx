import { useEffect, useState } from "react";
import axios from "axios";
import Accommodation from "./components/Accommodation";

const url = process.env.REACT_APP_BASE_URL + "/accommodation";
const defaultAccommodation: IAccommodation[] = [];

function Home() {
  const [accommodation, setAccommodation]: [
    IAccommodation[],
    (posts: IAccommodation[]) => void
  ] = useState(defaultAccommodation);

  const response = async () => {
    const response = await axios.get(url);
    const accommodationResponse: IAccommodation[] = response.data.accommodation;
    setAccommodation(accommodationResponse);
  };

  useEffect(() => {
    try {
      response();
    } catch (e: unknown) {
      console.log(`Error: ${e}`);
    }
  }, []);

  const accommodationList = () => {
    if (accommodation.length) {
      return accommodation.map((accommodation) => {
        return (
          <Accommodation
            key={accommodation._id}
            accommodation={accommodation}
          />
        );
      });
    } else {
      return null;
    }
  };

  return (
    <div>
      <div>Accommodation</div>
      <div>{accommodationList()}</div>
    </div>
  );
}

export default Home;
