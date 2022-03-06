import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../../../Components/Carousel';
import BookTicket from '../../../Components/BookTicket';
import ListMovie from '../../../Components/ListMovie';
import Loader from '../../../Components/Loader';
import MovieTrailer from '../../../Components/MovieTrailer';
import ShowTime from './../../../Components/ShowTime';
import Footer from '../../../Components/Footer';

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

  useEffect(() => {
    setLoading(true);
    if (!movieLoading && !cinemaLoading && !showTimeLoading) setLoading(false);
  }, [movieLoading, cinemaLoading, showTimeLoading]);

  if (loading) return <Loader />;
  else
    return (
      <React.Fragment>
        <Carousel />
        <BookTicket />
        <ListMovie />
        <ShowTime />
        <Footer />
        <MovieTrailer trailer={trailer} />
      </React.Fragment>
    );
}
