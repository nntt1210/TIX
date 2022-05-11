import React from 'react';

import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import useStyles from './style';

export default function MovieTrailer(props) {
  const styles = useStyles();
  const { trailer } = props;
  return (
    <Box
      id='movieTrailer'
      className='modal fade'
      sx={{ overflow: 'hidden!important' }}
      aria-hidden='true'
      tabIndex={-1}
    >
      <Box className={`modal-dialog ${styles.dialog}`}>
        <Box className={`modal-content ${styles.content}`}>
          <Box className={`modal-body" ${styles.body}`}>
            <iframe
              id='iframe'
              title='trailer video'
              width='100%'
              height='85%'
              className={styles.video}
              src={trailer}
              frameBorder={0}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

MovieTrailer.propTypes = {
  trailer: PropTypes.string,
};
