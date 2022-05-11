import React from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';

import useStyles from './style';

export default function ButtonTime(props) {
  const { hour, min, disabled, maPhim, maLichChieu } = props;
  const styles = useStyles();

  const renderLink = () => {
    if (maPhim) return '/phim/' + maPhim;
    if (maLichChieu) return '/booking/' + maLichChieu;
  };

  const Component = ({ children }) => {
    return disabled ? (
      <>{children}</>
    ) : (
      <NavLink to={renderLink()}>{children}</NavLink>
    );
  };

  return (
    <Component>
      <Button
        type='button'
        variant='contained'
        className={styles.root}
        disabled
      >
        <Box component='span' className='start'>
          {hour}:{min}
        </Box>{' '}
        ~ {hour + 2}:{min}
      </Button>
    </Component>
  );
}

ButtonTime.propTypes = {
  hour: PropTypes.number,
  min: PropTypes.number,
  disabled: PropTypes.bool,
  maPhim: PropTypes.number,
  maLichChieu: PropTypes.number,
  children: PropTypes.element,
};
