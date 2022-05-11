import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../../../components/Carousel';
import BookTicket from '../../../components/BookTicket';
import ListMovie from '../../../components/ListMovie';
import Loader from '../../../components/Loader';
import MovieTrailer from '../../../components/MovieTrailer';
import ShowTime from './../../../components/ShowTime';
import Footer from '../../../components/Footer';

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
