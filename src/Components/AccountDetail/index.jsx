import React from "react";
import useStyles from "./style";
import PersonalInfo from "../PersonalInfo";
import BookingInfo from "../BookingInfo";
// import wrapper from "../../HOCs/Wrapper";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getCurrentWebPage } from "../../redux/actions/pageAction";
import { useEffect } from "react";
import { Container } from "@mui/material";
import { getAccountInfo } from "../../Containers/AuthPage/modules/action";
// import { getAccountInfo } from "../../redux/actions/userAction";

const AccountDetail = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLoginReducer.login);

  //   useEffect(() => {
  //     dispatch(getCurrentWebPage(props.match.url));
  //   }, [dispatch, props.match.url]);

  useEffect(() => {
    dispatch(getAccountInfo(user, { taiKhoan: user.taiKhoan }));
  }, [dispatch, user]);

  if (user) {
    return (
      <Container maxWidth="lg" className={styles.root}>
        <PersonalInfo />
        <BookingInfo />
        {/* <BackToTop showBelow={300} /> */}
      </Container>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default AccountDetail;
