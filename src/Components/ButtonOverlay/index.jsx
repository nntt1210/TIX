import React from 'react';

import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import ButtonTrailer from './../ButtonTrailer';
import ButtonBuy from './../ButtonBuy';
import useStyles from './style';

export default function ButtonOverlay(props) {
  const styles = useStyles();
  const { trailer, buy } = props;

  if (trailer != null)
    return (
      <Box className={`${styles.overlay} overlay`}>
        <ButtonTrailer trailer={trailer} />
      </Box>
    );
  else if (buy != null)
    return (
      <Box className={`${styles.overlay} overlay`} width='100%' height='100%'>
        <ButtonBuy buy={buy} />
      </Box>
    );
  else return <Box id='overlay' className={styles.overlay}></Box>;
}

ButtonOverlay.propTypes = {
  trailer: PropTypes.string,
  buy: PropTypes.number,
};
