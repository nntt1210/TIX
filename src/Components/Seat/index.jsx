import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { IconButton, Typography } from '@mui/material';
import WeekendIcon from '@mui/icons-material/Weekend';
import PropTypes from 'prop-types';

import useStyles from './style';
import { actChooseSeat } from './modules/action';
// import { CHOOSE_SEAT } from "../../redux/actions/actionType";

const Seat = (props) => {
  const styles = useStyles(props);
  const dispatch = useDispatch();
  const [pick, setPick] = useState(false);
  const { seat, seatNumber, seatLetter, reserved } = props;
  let newSeat = { ...seat, letter: seatLetter };
  const handleClick = () => {
    setPick(!pick);
    dispatch(actChooseSeat(newSeat));
  };

  return (
    <IconButton
      className={styles.root}
      disabled={reserved}
      onClick={() => handleClick()}
      size='large'
    >
      <WeekendIcon
        fontSize='large'
        className={
          reserved ? styles.reserved : pick ? styles.pick : styles.seat
        }
      />
      <Typography className={styles.number}>{seatNumber}</Typography>
    </IconButton>
  );
};

Seat.propTypes = {
  seat: PropTypes.object,
  type: PropTypes.oneOf(['Thuong', 'Vip']),
  seatNumber: PropTypes.string,
  seatLetter: PropTypes.string,
  reserved: PropTypes.bool,
};

Seat.defaultProps = {
  type: 'Thuong',
  seatNumber: '00',
  reserved: false,
};

export default Seat;
