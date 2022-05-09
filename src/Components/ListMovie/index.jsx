import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import { Box } from '@mui/material';

import MovieItem from '../MovieItem';
import useStyles from './style';
import useContainerStyles from './../MyContainer/style';
import { actListMovieApi } from './modules/action';

export default function ListMovie() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const listMovie = useSelector((state) => state.listMovieReducer.data);
  const dispatch = useDispatch();
  const styles = useStyles();
  const containerStyles = useContainerStyles();
  useEffect(() => {
    if (listMovie.length === 0) dispatch(actListMovieApi('GP04'));
  }, [dispatch, listMovie.length]);
  const renderSlide = (currentIndex, movie) => {
    var items = movie
      .slice(currentIndex, currentIndex + 8)
      .map((item, index) => {
        return (
          <MovieItem
            key={index}
            hinhAnh={item.hinhAnh}
            maPhim={item.maPhim}
            tenPhim={item.tenPhim}
            danhGia={item.danhGia}
            trailer={item.trailer}
          />
        );
      });
    return items;
  };

  const renderMovies = (list) => {
    if (list) {
      let arr = [];
      let currentIndex = 0;
      let length = list.length;
      while (currentIndex < length) {
        let items = renderSlide(currentIndex, list);
        currentIndex += 8;
        arr.push(items);
      }
      return arr.map((item, index) => {
        return (
          <Box
            key={index}
            className='row d-flex'
            style={{ margin: '0 !important' }}
          >
            {item}
          </Box>
        );
      });
    }
  };

  return (
    <Box id='movieList' className={styles.root}>
      <Box className={containerStyles.root}>
        <Box className='tab-content' id='myTabContent'>
          <Box
            className='tab-pane fade show active'
            id='nowShowingFilms'
            role='tabpanel'
            aria-labelledby='home-tab'
          >
            <Box>
              <Slider {...settings}>{renderMovies(listMovie)}</Slider>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
