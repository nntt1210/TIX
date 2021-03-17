import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import useStyles from "./style";
import SeatList from "../SeatList";
import SeatType from "../SeatType";

const SeatPlan = ({ info }) => {
  const styles = useStyles();

  return (
    <Box textAlign="center" className={styles.root}>
      <Box className={styles.screen}>
        <img src="/img/screen.png" alt="screen" width="100%" />
      </Box>
      <Box className={styles.seatList}>
        <SeatList list={info} />
      </Box>
      <Box className={styles.seatNote}>
        <SeatType />
      </Box>
    </Box>
  );
};

SeatPlan.propTypes = {
  info: PropTypes.array,
};

SeatPlan.defaultProps = {
  info: [],
};

export default SeatPlan;
