import React from "react";

import CarouselComponent from "./../../../Components/Carousel/CarouselComponent";
import ListMovieComponent from "./../../../Components/ListMovie/ListMovieComponent";
import ShowTimeComponent from "./../../../Components/ShowTime/ShowTimeComponent";

export default function HomePage() {
  return (
    <React.Fragment>
      <CarouselComponent />
      <ListMovieComponent />
      <ShowTimeComponent />
    </React.Fragment>
  );
}
