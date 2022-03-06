import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import useStyles from "./style";
import { getAccountInfo } from "../../Containers/AuthPage/modules/action";
import * as ActionType from "./../../Containers/HomeTemplate/BookingPage/modules/constants";
import { actBookTicketApi } from "../../Containers/HomeTemplate/BookingPage/modules/action";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { resetChosenSeats } from "../Seat/modules/action";
import Table from "../DataTable";

const PriceInfo = ({ info }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const seatList = useSelector((state) => state.chosenSeatReducer);
  const user = useSelector((state) => state.userLoginReducer.login);
  // const bookingInfo = useSelector(
  //   (state) => state.bookingReducer.data.thongTinPhim
  // );
  const { email, soDT } = user;

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getAccountInfo(user, { taiKhoan: user.taiKhoan }));
  }, [dispatch, user]);

  let headers = ["Tên phim", "Cụm rạp", "Rạp", "Suất chiếu", "Ghế", "Giá vé"];

  let data = seatList.map((seat) => ({
    tenPhim: info.tenPhim,
    cumRap: info.diaChi,
    rap: info.tenRap,
    suatChieu: info.gioChieu + " - " + info.ngayChieu,
    ghe: seat.letter + seat.tenGhe,
    giaVe: seat.giaVe,
  }));

  let ticketData = {
    maLichChieu: info.maLichChieu,
    danhSachVe: seatList.map((seat) => ({
      maGhe: seat.maGhe,
      giaVe: seat.giaVe,
    })),
    taiKhoanNguoiDung: user.taiKhoan,
  };

  const renderChosenSeats = (list) => {
    let seats = [];
    if (list.length) {
      seats.push(<span>{list[0].letter + list[0].tenGhe}</span>);

      for (let i = 1; i < list.length; i++) {
        seats.push(<span>-{list[i].letter + list[i].tenGhe}</span>);
      }
    }

    return seats;
  };

  let money = (seatList) => {
    let total = 0;
    for (let i = 0; i < seatList.length; i++) {
      total += seatList[i].giaVe;
    }
    return total;
  };

  const handleClick = () => {
    dispatch(actBookTicketApi(ticketData, user.accessToken));
    dispatch({ type: ActionType.RESET_STATE });
    dispatch(resetChosenSeats());
    history.push("/home");
  };

  const renderTickets = (seatList) => {
    return (
      <Box className={styles.table}>
        <Table
          headers={headers}
          rows={data}
          maxWidth={"100%"}
          maxHeight={500}
        />
      </Box>
    );
  };

  return (
    <Box className={styles.root}>
      <Box className={`${styles.totalPrice} ${styles.dashedBoder}`}>
        <Typography variant="h4" className={`${styles.price} ${styles.center}`}>
          {money(seatList)} VND
        </Typography>
      </Box>

      <Box className={`${styles.showTimeInfo} ${styles.dashedBoder}`}>
        <Typography variant="subtitle1">Tên phim: {info.tenPhim}</Typography>
        <Typography variant="body2">{`Cụm rạp: ${info.diaChi}`}</Typography>
        <Typography variant="body2">{`Rạp: ${info.tenRap}`}</Typography>
        <Typography variant="body2">{`Suất chiếu: ${info.gioChieu} - ${info.ngayChieu}`}</Typography>
      </Box>
      <Grid container className={`${styles.seats} ${styles.dashedBoder}`}>
        <Grid item xs={7}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="span"
          >
            {`Ghế: `}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="span"
          >
            {renderChosenSeats(seatList)}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography className={`${styles.price} ${styles.right}`}>
            {money(seatList)} VND
          </Typography>
        </Grid>
      </Grid>

      <Box className={styles.userInfo}>
        <TextField
          className={styles.input}
          label="Email"
          variant="outlined"
          value={email}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className={styles.input}
          label="Số điện thoại"
          variant="outlined"
          type="text"
          value={soDT}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      <Button
        variant="contained"
        color="secondary"
        className={styles.button}
        onClick={() => handleClickOpen()}
        disabled={ticketData.danhSachVe.length === 0}
      >
        ĐẶT VÉ
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={styles.dialog}
      >
        <DialogTitle id="form-dialog-title">Xác nhận thanh toán</DialogTitle>
        <DialogContent>{renderTickets(seatList)}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleClick} color="primary">
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

PriceInfo.propTypes = {
  info: PropTypes.object,
};

PriceInfo.defaultProps = {
  info: {},
};

export default PriceInfo;
