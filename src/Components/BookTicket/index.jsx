import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Container, Grid, Box } from '@mui/material';

import useStyle from './style';
import DropDown from '../DropDown';

import * as ActionType from './modules/constants';

import { actGetMovieShowTimesApi } from '../../Containers/AdminTemplate/modules/actions/showtimes';
import {
  getCinemas,
  getMovieId,
  getSelectedShowTimeId,
  getShowTimeDates,
  getShowTimes,
} from '../../Helpers/book-ticket-manager';

const BookTicket = (props) => {
  const styles = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const movies = useSelector((state) => state.listMovieReducer.data);
  const movieNames = movies.map((movie) => movie.tenPhim);
  const result = useSelector((state) => state.bookingBoxReducer.result);
  const selectedMovie = useSelector((state) => state.bookingBoxReducer.movie);
  const selectedCinema = useSelector((state) => state.bookingBoxReducer.cinema);
  const selectedDate = useSelector((state) => state.bookingBoxReducer.date);
  const selectedTime = useSelector((state) => state.bookingBoxReducer.showTime);

  useEffect(() => {
    dispatch(actGetMovieShowTimesApi(getMovieId(movies, selectedMovie)));
  }, [dispatch, selectedMovie, movies]);

  const handleGo = () => {
    history.push(
      `/booking/${getSelectedShowTimeId(
        result,
        selectedCinema,
        selectedDate,
        selectedTime
      )}`
    );
  };

  return (
    <Container maxWidth='lg'>
      <Box className={styles.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={4}>
            <Box className={styles.dropDown}>
              <DropDown
                label='Phim'
                list={movieNames}
                state={selectedMovie}
                dispatchType={ActionType.GET_SELECTED_MOVIE}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown
                label='Rạp'
                state={selectedCinema}
                list={getCinemas(result)}
                dispatchType={ActionType.GET_SELECTED_CINEMA}
                placeHolder='Vui lòng chọn phim'
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown
                label='Ngày xem'
                state={selectedDate}
                list={getShowTimeDates(result, selectedCinema)}
                dispatchType={ActionType.GET_SELECTED_DATE}
                placeHolder='Vui lòng chọn phim và rạp'
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown
                label='Suất chiếu'
                state={selectedTime}
                list={getShowTimes(result, selectedCinema, selectedDate)}
                dispatchType={ActionType.GET_SELECTED_SHOW_TIME}
                placeHolder={
                  selectedCinema
                    ? 'Vui lòng chọn ngày xem'
                    : 'Vui lòng chọn phim, rạp và ngày xem'
                }
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Button
              disabled={!selectedTime}
              variant='contained'
              color='secondary'
              classes={{ root: styles.button }}
              onClick={() => handleGo()}
            >
              MUA VÉ NGAY
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BookTicket;
