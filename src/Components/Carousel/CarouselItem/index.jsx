import React from 'react';

import { Avatar, Box } from '@mui/material';
import PropTypes from 'prop-types';

import ButtonOverlay from '../../ButtonOverlay';
import useStyles from './style';

export default function CarouselItem(props) {
  const { hinhAnh, trailer } = props;

  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Avatar
        variant='square'
        className={styles.trailerImg}
        src={hinhAnh}
        alt='trailer'
      />
      <ButtonOverlay trailer={trailer} />
    </Box>
  );
}

CarouselItem.propTypes = {
  hinhAnh: PropTypes.string,
  trailer: PropTypes.string,
};
