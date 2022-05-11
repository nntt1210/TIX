import React from 'react';

import { Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

import useStyles from './style';

export default function RatingPoint(props) {
  const { danhGia } = props;
  const styles = useStyles();
  return (
    <Box className='col-3 d-flex flex-column align-items-center mx-auto'>
      <Box className={styles.percentage}>
        <Box className={styles.circleBorder}></Box>
        <Box className={styles.pointGroup}>
          <Box
            className={styles.bar}
            //   style={{
            //     clipPath:
            //       "polygon(50% 0%, 100% 0px, 100% 100%, 0px 100%, 0px 0px, 0px 37.5676%, 50% 50%)",
            //   }}
          ></Box>
        </Box>
        <Box component='span' className={styles.point}>
          {danhGia}
        </Box>
      </Box>
      <Box>
        {/* <img src="/img/star1.png" alt="Star" />
        <img src="/img/star1.png" alt="Star" />
        <img src="/img/star1.png" alt="Star" />
        <img src="/img/star1.png" alt="Star" />
        <img src="/img/star1.png" alt="Star" /> */}
        <Rating
          className={styles.star}
          name='half-rating-read'
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
      </Box>
      <Typography component='p' className={styles.rating}>
        37 lượt đánh giá
      </Typography>
    </Box>
  );
}
RatingPoint.propTypes = {
  danhGia: PropTypes.number,
};
