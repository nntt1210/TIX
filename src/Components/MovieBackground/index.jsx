import React from 'react';

import { Avatar, Box } from '@mui/material';
import PropTypes from 'prop-types';

import useStyles from './style';

export default function MovieBackground(props) {
  const styles = useStyles();
  const { hinhAnh, alt } = props;
  return (
    <Box className={styles.root}>
      <Box>
        <Avatar
          variant='square'
          className={styles.background}
          src={hinhAnh}
          alt={alt}
        />
      </Box>
      <Box className={styles.overlay}></Box>
    </Box>
  );
}
MovieBackground.propTypes = {
  hinhAnh: PropTypes.string,
  alt: PropTypes.string,
};
