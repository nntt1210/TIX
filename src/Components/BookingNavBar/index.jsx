import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { Box, AppBar, Toolbar, useTheme, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classnames from 'classnames';

import CinemaInfo from '../CinemaInfo';
import Tag from '../Tag';
import useStyles from './style';

const BookingNavBar = ({ info }) => {
  const styles = useStyles();
  const theme = useTheme();
  const user = useSelector((state) => state.userLoginReducer.login);

  return (
    <AppBar className={styles.root}>
      <Toolbar className={classnames(styles.toolBar, styles.largeBar)}>
        <Box className={styles.info}>
          <CinemaInfo cinema={info} hasInfo />
        </Box>
        <Typography
          color='secondary'
          variant='subtitle2'
          className={styles.notification}
        >
          Vui lòng chọn ghế!
        </Typography>
        <Box>
          <Tag
            iconElement={<AccountCircleIcon fontSize='large' />}
            color={theme.color.orange.main}
            hoverColor={theme.color.orange.main}
            title={user.taiKhoan}
            noPointer
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

BookingNavBar.propTypes = {
  info: PropTypes.object,
};

BookingNavBar.defaultProps = {
  info: {},
};

export default BookingNavBar;
