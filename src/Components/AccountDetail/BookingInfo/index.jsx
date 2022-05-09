import React from 'react';
import { useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';

import Table from '../../DataTable';
import useStyles from './style';
import { getFullDate, getTime } from '../../../Helpers/time-manager';
import { flatArray } from '../../../Helpers/array-manager';

const BookingInfo = () => {
  // get user's booking info
  const bookingInfo = useSelector(
    (state) => state.userLoginReducer.info.thongTinDatVe
  );
  const styles = useStyles();

  let headers = [
    'Ngày đặt',
    'Mã vé',
    'Tên phim',
    'Giá vé (VND)',
    'Thời lượng (phút)',
    'Cụm rạp',
    'Tên rạp',
    'Số ghế',
  ];

  let data = [];

  // return list of booking seats for each ticket
  if (bookingInfo) {
    data = bookingInfo.map((ticket) =>
      ticket.danhSachGhe.map((seat) => ({
        date: `${getFullDate(ticket.ngayDat)} ${getTime(ticket.ngayDat)}`,
        ticketId: ticket.maVe,
        movieTitle: ticket.tenPhim,
        price: ticket.giaVe,
        duration: ticket.thoiLuongPhim,
        cinema: seat.tenHeThongRap,
        cinemaNumber: seat.tenRap,
        seatNumber: seat.tenGhe,
      }))
    );

    data = flatArray(data);
  }

  return (
    <>
      <Box className={styles.info}>
        <Typography className={styles.title} component='h1' variant='h5'>
          Thông tin đặt vé
        </Typography>

        <Box className={styles.table}>
          <Table
            headers={headers}
            rows={data}
            maxWidth={'100%'}
            maxHeight={500}
          />
        </Box>
      </Box>
    </>
  );
};

export default BookingInfo;
