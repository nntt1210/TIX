import React from 'react';

import { Avatar, Box } from '@mui/material';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ButtonOverlay from '../ButtonOverlay';
import MovieAge from '../MovieAge';
import MovieWrapper from '../MovieWrapper';
import useStyles from './style';

export default function MovieItem(props) {
  const styles = useStyles();
  const { hinhAnh, tenPhim, danhGia, trailer, maPhim } = props;

  return (
    <Box className={classnames(styles.item, 'col-6 col-sm-4 col-md-3')}>
      <Box className={styles.img}>
        <MovieWrapper hinhAnh={hinhAnh} maPhim={maPhim} />
        <ButtonOverlay trailer={trailer} />
      </Box>
      <Box className={styles.title}>
        <MovieAge />
        {tenPhim}
        <ButtonOverlay className={styles.container} buy={maPhim} />
      </Box>
      <Box className={styles.rate}>
        <Box component='span'>{danhGia}</Box>
        <Box className={styles.star}>
          <Avatar variant='square' src='img/star1.png' alt='star' />
          <Avatar variant='square' src='img/star1.png' alt='star' />
          <Avatar variant='square' src='img/star1.png' alt='star' />
          <Avatar variant='square' src='img/star1.png' alt='star' />
          <Avatar variant='square' src='img/star1.png' alt='star' />
        </Box>
      </Box>
    </Box>
  );
}
MovieItem.propTypes = {
  hinhAnh: PropTypes.string,
  tenPhim: PropTypes.string,
  danhGia: PropTypes.number,
  trailer: PropTypes.string,
  maPhim: PropTypes.number,
};
