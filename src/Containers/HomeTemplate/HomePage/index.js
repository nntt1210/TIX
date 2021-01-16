import React from "react";
import HeaderComponent from "./../../../Components/Header/HeaderComponent";
import CarouselComponent from "./../../../Components/Carousel/CarouselComponent";
import ListMovieComponent from "./../../../Components/ListMovie/ListMovieComponent";
import ShowTimeComponent from "./../../../Components/ShowTime/ShowTimeComponent";

export default function HomePage() {
  return (
    <React.Fragment>
      {/* <HeaderComponent /> */}
      <CarouselComponent />
      <ListMovieComponent />
      <ShowTimeComponent />
    </React.Fragment>
  );
}
