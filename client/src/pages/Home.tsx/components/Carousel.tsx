const Carousel = (photos: string[]) => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {photos.map((photo) => {
          return <img key={photo} src={photo} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
