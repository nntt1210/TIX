import React from 'react';
import { useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';

import ProfileCard from './ProfileCard';
import useStyles from './style';

const PersonalInfo = () => {
  const styles = useStyles();
  // get account's info
  const account = useSelector((state) => state.userLoginReducer.info);

  return (
    <Box>
      <Box className={styles.content}>
        <Typography className={styles.title} component='h1' variant='h5'>
          Thông tin cá nhân
        </Typography>

        <ProfileCard className={styles.container} account={account} />
      </Box>
    </Box>
  );
};

export default PersonalInfo;
