import React from 'react';

import { Box, Typography } from '@mui/material';
import moment from 'moment';
import PropTypes from 'prop-types';

import ButtonBuy from '../ButtonBuy';
import ButtonOverlay from '../ButtonOverlay';
import MovieAge from '../MovieAge';
import MovieWrapper from '../MovieWrapper';
import RatingPoint from '../RatingPoint';
import useStyles from './style';

export default function MovieDetails(props) {
  const styles = useStyles();
  const { hinhAnh, trailer, ngayKhoiChieu, tenPhim, danhGia } = props;
  return (
    <Box className={`${styles.root} ${styles.container}`}>
      <Box className='row align-items-center'>
        <Box className={`${styles.thumbnail} col-3`}>
          <Box className={styles.imgThumbnail}>
            <MovieWrapper hinhAnh={hinhAnh} />
            <ButtonOverlay trailer={trailer} />
          </Box>
        </Box>
        <Box className='col-6'>
          <Box className='row align-items-center'>
            <Box className='col-9 col-md-12'>
              <Typography component='p'>
                Khởi chiếu:{' '}
                {moment(new Date(ngayKhoiChieu)).format('DD/MM/YYYY')}
              </Typography>
              <Typography component='h6' className={styles.title}>
                <MovieAge />
                {tenPhim}
              </Typography>
            </Box>
            <Box className='col-3 text-center text-md-left'>
              <ButtonBuy />
            </Box>
          </Box>
        </Box>
        <RatingPoint danhGia={danhGia} />
      </Box>
    </Box>
  );
}
MovieDetails.propTypes = {
  hinhAnh: PropTypes.string,
  trailer: PropTypes.string,
  ngayKhoiChieu: PropTypes.string,
  tenPhim: PropTypes.string,
  danhGia: PropTypes.number,
};
