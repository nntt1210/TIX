import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "../../../Components/Carousel";
import BookTicket from "../../../Components/BookTicket";
import ListMovie from "../../../Components/ListMovie";
import Loader from "../../../Components/Loader";
import MovieTrailer from "../../../Components/MovieTrailer";
import ShowTime from "./../../../Components/ShowTime";
import Footer from "../../../Components/Footer";

export default function HomePage() {
  const trailer = useSelector((state) => state.buttonTrailerReducer.data);
  const movieLoading = useSelector((state) => state.listMovieReducer.loading);
  const cinemaLoading = useSelector(
    (state) => state.showTimeReducer.loadingCinema
  );
  const showTimeLoading = useSelector(
    (state) => state.showTimeReducer.loadingShowTime
  );
  const [loading, setLoading] = useState(false);

  console.log(movieLoading);
  console.log(cinemaLoading);
  console.log(showTimeLoading);

  useEffect(() => {
    setLoading(true);
    if (!movieLoading && !cinemaLoading && !showTimeLoading) setLoading(false);
  });
  // // if (movieLoading || cinemaLoading || showTimeLoading) return <Loader />;
  // // else
  // // if (!movieLoading && !cinemaLoading && !showTimeLoading)
  if (loading) return <Loader />;
  else
    return (
      <React.Fragment>
        <Carousel />
        <BookTicket />
        <ListMovie />
        <ShowTime />
        <Footer />
        {/* <Loader /> */}
        <MovieTrailer trailer={trailer} />
      </React.Fragment>
    );
  // else return <Loader />;
}

// class HomePage extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Carousel />
//         <ListMovie />
//         <ShowTime />
//         {/* <Loader /> */}
//         <MovieTrailer trailer={this.props.trailer} />
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     trailer: state.buttonTrailerReducer.data,
//   };
// };

// export default connect(mapStateToProps, null)(HomePage);

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
