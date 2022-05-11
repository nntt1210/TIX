import React from 'react';

import { Avatar, Box } from '@mui/material';
import PropTypes from 'prop-types';

import useStyles from './style';
import { renderShowList } from '../../helpers/detail-movie-manager';

export default function LogoWrapperCollapse(props) {
  const styles = useStyles();
  const { src, alt, target, name, movie, listShowTime, currentDate } = props;
  return (
    <Box className={styles.logo}>
      <Box data-toggle='collapse' data-target={'#' + target + '-collapse'}>
        <Box className={styles.detail}>
          <Avatar
            variant='square'
            className='theaterList__image'
            src={src}
            alt={alt}
          />
          <Box component='span' className={styles.name}>
            {name}
          </Box>
          <Box component='span' className={styles.arrow}></Box>
        </Box>
      </Box>
      <Box className='collapse' id={target + '-collapse'}>
        {renderShowList(target, movie, listShowTime, currentDate)}
      </Box>
    </Box>
  );
}
LogoWrapperCollapse.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  target: PropTypes.string,
  name: PropTypes.string,
  movie: PropTypes.object,
  listShowTime: PropTypes.array,
  currentDate: PropTypes.string,
};
