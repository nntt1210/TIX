import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Container } from '@mui/material';

import PersonalInfo from '../PersonalInfo';
import BookingInfo from './BookingInfo';
import useStyles from './style';
import { getAccountInfo } from '../../Containers/AuthPage/modules/action';

const AccountDetail = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  // get user login info from reducer ()
  const user = useSelector((state) => state.userLoginReducer.login);
  useEffect(() => {
    dispatch(getAccountInfo(user, { taiKhoan: user.taiKhoan }));
  }, [dispatch, user]);

  if (user) {
    return (
      <Container maxWidth='lg' className={styles.root}>
        <PersonalInfo />
        <BookingInfo />
        {/* <BackToTop showBelow={300} /> */}
      </Container>
    );
  } else {
    return <Redirect to='/signin' />;
  }
};

export default AccountDetail;
