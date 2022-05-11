import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Box, Container, Grid } from '@mui/material';
import PropTypes from 'prop-types';

import BookingNavBar from '../../../Components/BookingNavBar';
import PriceInfo from '../../../Components/PriceInfo';
import SeatPlan from '../../../Components/SeatPlan';
import Loader from '../../../Components/Loader';
// import BackToTop from "../../components/BackToTop";
// import { getCurrentWebPage } from "../../redux/actions/pageAction";
// import { getSeatList } from "../../redux/actions/bookingAction";
import useStyles from './style';
import { actGetSeatListApi } from './modules/action';

const Booking = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.bookingReducer.data);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   dispatch(getCurrentWebPage(props.match.url));
  // }, [dispatch, props.match.url]);

  useEffect(() => {
    dispatch(actGetSeatListApi(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const userLogin = useSelector((state) => state.userLoginReducer.login);
  // if (info)
  //   return (
  //     <Container className={styles.root}>
  //       <Grid container>
  //         <Grid item xs={12} xl={8}>
  //           <BookingNavBar info={info.thongTinPhim} />
  //           <Box className={styles.seatPlan}>
  //             <SeatPlan info={info.danhSachGhe} />
  //           </Box>
  //         </Grid>
  //         <Grid item xs={12} xl={4}>
  //           <Box className={styles.priceInfo}>
  //             <PriceInfo info={info.thongTinPhim} />
  //           </Box>
  //         </Grid>
  //       </Grid>
  //       {/* <BackToTop showBelow={300} /> */}
  //     </Container>
  //   );
  // else return <Loader/>
  if (userLogin) {
    if (info)
      return (
        <Container className={styles.root}>
          <Grid container>
            <Grid item xs={12} xl={8}>
              <BookingNavBar info={info.thongTinPhim} />
              <Box className={styles.seatPlan}>
                <SeatPlan info={info.danhSachGhe} />
              </Box>
            </Grid>
            <Grid item xs={12} xl={4}>
              <Box className={styles.priceInfo}>
                <PriceInfo info={info.thongTinPhim} />
              </Box>
            </Grid>
          </Grid>
          {/* <BackToTop showBelow={300} /> */}
        </Container>
      );
    else return <Loader />;
  } else {
    return <Redirect to='/signin' />;
  }
};
Booking.propTypes = {
  match: PropTypes.string,
};
export default Booking;
