import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "../../../Components/Carousel";
import ListMovie from "../../../Components/ListMovie";
import MovieTrailer from "../../../Components/MovieTrailer";

// import CarouselComponent from "./../../../Components/Carousel/CarouselComponent";
// import ListMovieComponent from "./../../../Components/ListMovie/ListMovieComponent";
import ShowTime from "./../../../Components/ShowTime";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <CarouselComponent /> */}
        <Carousel />
        {/* <ListMovieComponent /> */}
        <ListMovie />
        <ShowTime />
        {/* <ShowTimeComponent /> */}
        <MovieTrailer trailer={this.props.trailer} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trailer: state.buttonTrailerReducer.data,
  };
};

export default connect(mapStateToProps, null)(HomePage);

// export default function HomePage() {
//   return (
//     <React.Fragment>
//       <CarouselComponent />
//       <ListMovieComponent />
//       <ShowTimeComponent />
//       <MovieTrailer trailer="https://www.youtube.com/embed/LdOM0x0XDMo" />
//     </React.Fragment>
//   );
// }
