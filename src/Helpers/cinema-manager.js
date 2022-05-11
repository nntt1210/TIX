import React from 'react';

import { Box } from '@mui/material';
import classNames from 'classnames';

import ButtonTime from '../components/ButtonTime';
import CinemaItem from '../components/CinemaItem';
import ImgWrapper from '../components/ImgWrapper';
import MovieAge from '../components/MovieAge';
import LogoWrapper from '../components/LogoWrapper';

export const renderCinemaTabs = (listCinema = [], width) => {
  if (width >= 768) {
    return listCinema.map((item, index) => {
      if (index === 0) {
        return (
          <LogoWrapper
            key={index}
            src={item.logo}
            alt={item.maHeThongRap}
            active={true}
            target={'#' + item.maHeThongRap}
          ></LogoWrapper>
        );
      } else {
        return (
          <LogoWrapper
            key={index}
            src={item.logo}
            alt={item.maHeThongRap}
            active={false}
            target={'#' + item.maHeThongRap}
          ></LogoWrapper>
        );
      }
    });
  }
};

export const renderCinemaName = (cinema) => {
  let index = cinema.indexOf('-');
  cinema = cinema.substr(0, index);
  return cinema;
};

export const renderCinemaAddress = (cinema) => {
  let index = cinema.indexOf('-');
  cinema = cinema.substr(index + 2);
  return cinema;
};

export const renderCinema = (width, arr, id) => {
  if (arr) {
    if (width >= 768) {
      return arr.map((rap, index) => {
        if (index === 0) {
          return (
            <CinemaItem
              key={index}
              system={id}
              id={rap.maCumRap}
              target={'#' + rap.maCumRap}
              name={rap.tenCumRap}
              address={rap.diaChi}
              active={true}
            />
          );
        } else {
          return (
            <CinemaItem
              key={index}
              system={id}
              id={rap.maCumRap}
              target={'#' + rap.maCumRap}
              name={rap.tenCumRap}
              address={rap.diaChi}
              active={false}
            />
          );
        }
      });
    } else {
      return arr.map((rap, index) => {
        return (
          <CinemaItem
            key={index}
            system={id}
            id={rap.maCumRap}
            target={'#' + rap.maCumRap}
            name={rap.tenCumRap}
            address={rap.diaChi}
            active={false}
            collapse={true}
          />
        );
      });
    }
  }
};

export const renderSystemCinemas = (width, listShowTime = [], styles) => {
  if (listShowTime.length > 0) {
    return listShowTime.map((item, index) => {
      if (index === 0) {
        return (
          <Box
            key={index}
            className='tab-pane fade show active'
            id={item.maHeThongRap}
          >
            <Box className={`nav nav-tabs ${styles.listMovies}`}>
              {renderCinema(width, item.lstCumRap, item.maHeThongRap)}
            </Box>
          </Box>
        );
      } else {
        return (
          <Box key={index} className='tab-pane fade' id={item.maHeThongRap}>
            <Box className={`nav nav-tabs ${styles.listMovies}`}>
              {renderCinema(width, item.lstCumRap, item.maHeThongRap)}
            </Box>
          </Box>
        );
      }
    });
  }
};

export const renderDataTarget = (maCumRap, maPhim) => {
  return '#' + maCumRap + '_' + maPhim;
};

export const renderID = (maCumRap, maPhim) => {
  return maCumRap + '_' + maPhim;
};

export const isValid = (ngayChieuGioChieu) => {
  let date = new Date(ngayChieuGioChieu);

  if (
    date.getDate() === 1 &&
    date.getMonth() + 1 === 1 &&
    date.getFullYear() === 2019
  )
    return true;
  return false;
};

export const renderTime = (ngayChieuGioChieu) => {
  let date = new Date();
  date = Date.parse(ngayChieuGioChieu);
  return date.getHours() + ':' + date.getMinutes();
};

export const renderMovieTimes = (arr) => {
  return arr.map((item, index) => {
    if (isValid(item.ngayChieuGioChieu)) {
      let flag = true;
      let date = new Date(item.ngayChieuGioChieu);
      let hour = date.getHours();
      let min = date.getMinutes();
      let currentDate = new Date();
      let currentHour = currentDate.getHours();
      let currentMin = currentDate.getMinutes();
      if (currentHour > hour || (currentHour === hour && currentMin > min))
        flag = false;
      if (flag) {
        return (
          <ButtonTime
            key={index}
            hour={hour}
            min={min}
            maLichChieu={item.maLichChieu}
            disabled={false}
          />
        );
      } else {
        return <ButtonTime key={index} hour={hour} min={min} disabled={true} />;
      }
    } else {
      return null;
    }
  });
};

export const renderDetailCinemaMovies = (arr, maCumRap, styles) => {
  for (let i = 0; i < arr.length; i++) {
    let listLichChieu = arr[i].lstLichChieuTheoPhim;
    listLichChieu = listLichChieu.filter((item) =>
      isValid(item.ngayChieuGioChieu)
    );
    arr[i].lstLichChieuTheoPhim = listLichChieu;
  }

  let flag = false;
  return arr.map((item, index) => {
    if (item.lstLichChieuTheoPhim.length > 0) {
      flag = true;
      return (
        <Box className={styles.wrapperCollapse} key={index}>
          <Box
            className={styles.mainCollapse}
            data-toggle='collapse'
            data-target={renderDataTarget(maCumRap, item.maPhim)}
            aria-expanded='true'
          >
            {/* <img
                className="theater__img"
                src={item.hinhAnh}
                alt={item.tenPhim}
              /> */}
            <ImgWrapper src={item.hinhAnh} alt={item.tenPhim} />
            <Box className={styles.wrapInfo}>
              <span className={styles.movieName}>
                <MovieAge /> - {item.tenPhim}
              </span>
              <span className={styles.movieDetail}>
                116 phút - TIX 8.6 - IMDb 0
              </span>
            </Box>
          </Box>
          <Box className='collapse show' id={renderID(maCumRap, item.maPhim)}>
            <Box className='pt-3 row'>
              <Box className={classNames('col-12', styles.digital)}>
                2D Digital
              </Box>
              <Box className='col-12'>
                {renderMovieTimes(item.lstLichChieuTheoPhim)}
              </Box>
            </Box>
          </Box>
        </Box>
      );
    } else if (index === arr.length - 1 && !flag) {
      return (
        <Box key={index} className='alert alert-danger'>
          Cụm rạp này hôm nay không có phim
        </Box>
      );
    } else return null;
  });
};

export const renderDetailTimes = (arr = [], active, styles) => {
  return arr.map((item, index) => {
    if (index === 0 && active) {
      return (
        <Box
          className='tab-pane fade active show'
          id={item.maCumRap}
          key={index}
        >
          {renderDetailCinemaMovies(item.danhSachPhim, item.maCumRap, styles)}
        </Box>
      );
    } else {
      return (
        <Box className='tab-pane fade' id={item.maCumRap} key={index}>
          {renderDetailCinemaMovies(item.danhSachPhim, item.maCumRap, styles)}
        </Box>
      );
    }
  });
};

export const renderShowTimes = (listShowTime = [], styles) => {
  // if (listShowTime)
  return listShowTime.map((item, index) => {
    if (index === 0) return renderDetailTimes(item.lstCumRap, true, styles);
    return renderDetailTimes(item.lstCumRap, false, styles);
  });
};

export const getCinemaSystemId = (data, systemName) => {
  if (data) {
    return data
      .filter((cinemaSystem) => cinemaSystem.tenHeThongRap === systemName)
      .map((cinemaSystem) => cinemaSystem.maHeThongRap);
  }
  return '';
};
