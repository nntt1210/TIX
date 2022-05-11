import React from 'react';
import { useDispatch } from 'react-redux';

import { Avatar, Button } from '@mui/material';
import PropTypes from 'prop-types';

import useStyles from './style';
import { actGetMovieTrailer } from './modules/action';

export default function ButtonTrailer(props) {
  const { trailer } = props;
  const styles = useStyles();
  const dispatch = useDispatch();
  return (
    <Button
      data-toggle='modal'
      data-target='#movieTrailer'
      className={styles.button}
      onClick={() => dispatch(actGetMovieTrailer(trailer))}
    >
      <Avatar
        variant='square'
        className={styles.playImg}
        src='/img/play-video.png'
        alt='play trailer'
      />
    </Button>
  );
}

ButtonTrailer.propTypes = {
  trailer: PropTypes.string,
};
