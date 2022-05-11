import React from 'react';

import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

import useStyles from './style';

export default function ImgWrapper(props) {
  const { src, alt } = props;
  const styles = useStyles();
  return <Avatar variant='square' className={styles.img} src={src} alt={alt} />;
}
ImgWrapper.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
