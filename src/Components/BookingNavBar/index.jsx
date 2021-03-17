import React from "react";
import PropTypes from "prop-types";
import { Box, AppBar, Toolbar, useTheme, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import MovieInfo from "../MovieInfo";
import CinemaInfo from "../CinemaInfo";
import Tag from "../Tag";
import useStyles from "./style";
import { useSelector } from "react-redux";

const BookingNavBar = ({ info }) => {
  const styles = useStyles();
  const theme = useTheme();
  const user = useSelector((state) => state.userLoginReducer.login);

  return (
    <AppBar className={styles.root}>
      <Toolbar className={`${styles.toolBar} ${styles.largeBar}`}>
        {/* <Box className={styles.info}>
          <MovieInfo movie={info} hasInfo />
        </Box> */}
        <Box className={styles.info}>
          <CinemaInfo cinema={info} hasInfo />
        </Box>
        <Typography
          color="secondary"
          variant="subtitle2"
          className={styles.notification}
        >
          Vui lòng chọn ghế!
        </Typography>
        <Box>
          <Tag
            iconElement={<AccountCircleIcon fontSize="large" />}
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
