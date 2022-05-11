import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';
// import classNames from "classnames";

import DayList from '../../../components/DayList';
import Loader from '../../../components/Loader';
import MovieBackground from '../../../components/MovieBackground';
import MovieDetails from '../../../components/MovieDetails';
import MovieDiscussion from '../../../components/MovieDiscussion';
import MovieInfo from '../../../components/MovieInfo';
import MovieTrailer from '../../../components/MovieTrailer';

import {
  actGetSystemCinemaApi,
  actGetSystemShowTimeApi,
} from '../../../components/ShowTime/modules/action';
import {
  renderCinemaContent,
  renderCinemaTabs,
  renderCollapseCinemaTabs,
} from '../../../helpers/detail-movie-manager';
import { actDetailMovieApi } from './modules/action';

import useStyles from './style';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DetailMoviePage(props) {
  const styles = useStyles();
  const [currentDate, setCurrentDate] = useState('01');
  // const loading = useSelector((state) => state.detailMovieReducer.loading);
  const detailMovie = useSelector(
    (state) => state.detailMovieReducer.detailMovie
  );
  //   const err = useSelector((state) => state.detailMovieReducer.err);
  const listCinema = useSelector((state) => state.showTimeReducer.listCinema);
  const listShowTime = useSelector(
    (state) => state.showTimeReducer.listShowTime
  );
  const id = props.match.params.id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actDetailMovieApi(id));
    if (listCinema.length === 0) dispatch(actGetSystemCinemaApi());
    if (listShowTime.length === 0) dispatch(actGetSystemShowTimeApi('GP03'));
  }, [dispatch, id, listCinema.length, listShowTime.length]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (detailMovie && listCinema && listShowTime) {
    const { tenPhim, trailer, hinhAnh, ngayKhoiChieu, danhGia, moTa } =
      detailMovie;
    return (
      <Box>
        <Box className={styles.content}>
          <MovieBackground hinhAnh={hinhAnh} alt={tenPhim} />
          <MovieDetails
            hinhAnh={hinhAnh}
            trailer={trailer}
            ngayKhoiChieu={ngayKhoiChieu}
            tenPhim={tenPhim}
            danhGia={danhGia}
          />
        </Box>
        <Box id='movieDetail' className={styles.detail}>
          <Box className={styles.myContainer}>
            <Box>
              <Tabs
                className={styles.nav}
                value={value}
                onChange={handleChange}
                aria-label='basic tabs example'
              >
                <Tab label='Lịch chiếu' {...a11yProps(0)} />
                <Tab label='Thông tin' {...a11yProps(1)} />
                <Tab label='Đánh giá' {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Box className={styles.listTime}>
                <Box className={styles.detailWrapper}>
                  <Box className={`nav ${styles.listOfDay}`} role='tablist'>
                    <DayList onClick={(date) => setCurrentDate(date)} />
                  </Box>
                  <Box className={`nav ${styles.detailCinema}`} role='tablist'>
                    {renderCinemaTabs(listCinema)}
                  </Box>
                  <Box
                    className={`nav ${styles.collapseDetailCinema}`}
                    role='tablist'
                  >
                    {renderCollapseCinemaTabs(
                      listCinema,
                      detailMovie,
                      listShowTime,
                      currentDate
                    )}
                  </Box>
                  <Box className={styles.detailShowList}>
                    {renderCinemaContent(
                      listCinema,
                      detailMovie,
                      listShowTime,
                      currentDate
                    )}
                  </Box>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <MovieInfo ngayKhoiChieu={ngayKhoiChieu} moTa={moTa} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <MovieDiscussion />
            </TabPanel>
          </Box>
        </Box>
        <MovieTrailer trailer={trailer} />
      </Box>
    );
  } else return <Loader />;
}
DetailMoviePage.propTypes = {
  match: PropTypes.object,
};
