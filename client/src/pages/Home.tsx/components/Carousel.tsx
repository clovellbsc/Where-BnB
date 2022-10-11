import CarouselItem from "./CarouselItem";

const Carousel = ({ photos }: CarouselProps) => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {photos.map((photo) => {
          return <CarouselItem photo={photo} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
