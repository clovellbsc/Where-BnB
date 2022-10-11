import { CarouselItemProps } from "../../../types";

const CarouselItem = ({ photo }: CarouselItemProps) => {
  return (
    <div>
      <img src={photo} alt="" />
    </div>
  );
};

export default CarouselItem;
