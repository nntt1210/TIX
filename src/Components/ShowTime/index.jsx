import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  renderCinemaTabs,
  renderShowTimes,
  renderSystemCinemas,
} from '../../Helpers/cinema-manager';
import {
  actGetSystemCinemaApi,
  actGetSystemShowTimeApi,
} from './modules/action';
import useStyles from './style';
import useContainerStyles from './../MyContainer/style';
import { Box } from '@mui/material';

export default function ShowTime() {
  const width = window.innerWidth;

  const styles = useStyles();
  const containerStyles = useContainerStyles();
  const listCinema = useSelector((state) => state.showTimeReducer.listCinema);

  const listShowTime = useSelector(
    (state) => state.showTimeReducer.listShowTime
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (listCinema.length === 0) dispatch(actGetSystemCinemaApi());
    if (listShowTime.length === 0) dispatch(actGetSystemShowTimeApi('GP04'));
  }, [listCinema, listShowTime, dispatch]);

  if (listShowTime && listCinema) {
    if (width >= 768) {
      return (
        <Box id='scheduleCinema' className={styles.root}>
          <Box className={containerStyles.root}>
            <Box className='row flex-md-row flex-column'>
              <Box
                className={`nav nav-tabs ${styles.listCinema}`}
                id='cinemaTab'
                // role="tablist"
              >
                {renderCinemaTabs(listCinema, width)}
              </Box>
              <Box className={styles.cinemaTabContent} id='cinemaTabContent'>
                {renderSystemCinemas(width, listShowTime, styles)}
              </Box>
              <Box className={`tab-content ${styles.cinemaMovies}`}>
                {renderShowTimes(listShowTime, styles)}
              </Box>
            </Box>
          </Box>
        </Box>
      );
    } else
      return (
        <Box id='scheduleCinema' className={styles.root}>
          <Box className={containerStyles.root}>
            <Box className='row flex-md-row flex-column'>
              <Box
                className={`nav nav-tabs ${styles.listCinema}`}
                id='cinemaTab'
                role='tablist'
              >
                {renderCinemaTabs(listCinema, width)}
              </Box>
              <Box className={styles.cinemaTabContent} id='cinemaTabContent'>
                {renderSystemCinemas(listShowTime, styles)}
              </Box>
            </Box>
          </Box>
        </Box>
      );
  } else return <Box className='text-center'>Loading</Box>;
}
