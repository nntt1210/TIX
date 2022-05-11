import React from 'react';

import { Avatar, Box } from '@mui/material';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import useStyles from './style';

export default function LogoWrapper(props) {
  const { src, alt, active, target, detail, name } = props;
  const styles = useStyles();
  if (detail) {
    return (
      <Box
        className={classnames(styles.logo, active && 'active')}
        data-toggle='tab'
        data-target={target}
        role='tab'
        style={{ padding: 0 }}
      >
        <Box className={styles.detail}>
          <Avatar variant='square' src={src} alt={alt} />
          <Box component='span' className={styles.name}>
            {name}
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        className={classnames(styles.logo, active && 'active')}
        data-toggle='tab'
        data-target={target}
        role='tab'
      >
        <Box className={styles.detail} style={{ padding: 0 }}>
          <Avatar variant='square' src={src} alt={alt} />
        </Box>
      </Box>
    );
  }
}
LogoWrapper.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  active: PropTypes.bool,
  target: PropTypes.string,
  detail: PropTypes.bool,
  name: PropTypes.string,
};
