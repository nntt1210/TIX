import ButtonTime from "../Components/ButtonTime";
import CinemaItem from "../Components/CinemaItem";
import ImgWrapper from "../Components/ImgWrapper";
import MovieAge from "../Components/MovieAge";
import LogoWrapper from "../Components/LogoWrapper";
// import useStyles from "../Components/ShowTime/style";

// const styles = useStyles();

export const renderCinemaTabs = (listCinema, width) => {
  if (width >= 768) {
    return listCinema.map((item, index) => {
      if (index == 0) {
        return (
          <LogoWrapper
            src={item.logo}
            alt={item.maHeThongRap}
            active={true}
            target={"#" + item.maHeThongRap}
          ></LogoWrapper>
        );
      } else {
        return (
          <LogoWrapper
            src={item.logo}
            alt={item.maHeThongRap}
            active={false}
            target={"#" + item.maHeThongRap}
          ></LogoWrapper>
        );
      }
    });
  }
};

export const renderCinemaName = (cinema) => {
  let index = cinema.indexOf("-");
  cinema = cinema.substr(0, index);
  return cinema;
};

export const renderCinemaAddress = (cinema) => {
  let index = cinema.indexOf("-");
  cinema = cinema.substr(index + 2);
  return cinema;
};

export const renderCinema = (width, arr, id) => {
  if (width >= 768) {
    return arr.map((rap, index) => {
      if (index == 0) {
        return (
          <CinemaItem
            system={id}
            id={rap.maCumRap}
            target={"#" + rap.maCumRap}
            name={rap.tenCumRap}
            address={rap.diaChi}
            active={true}
          />
        );
      } else {
        return (
          <CinemaItem
            system={id}
            id={rap.maCumRap}
            target={"#" + rap.maCumRap}
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
          system={id}
          id={rap.maCumRap}
          target={"#" + rap.maCumRap}
          name={rap.tenCumRap}
          address={rap.diaChi}
          active={false}
          collapse={true}
        />
      );
    });
  }
};

{
  /* <div className="movies-cinema collapse" id={rap.maCumRap}>
{renderDetailCinemaMovies(rap.danhSachPhim, rap.maCumRap)}
</div> */
}

export const renderSystemCinemas = (width, listShowTime, styles) => {
  return listShowTime.map((item, index) => {
    if (index == 0) {
      return (
        <div className="tab-pane fade show active" id={item.maHeThongRap}>
          <div class={"nav nav-tabs" + " " + styles.listMovies}>
            {renderCinema(width, item.lstCumRap, item.maHeThongRap)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="tab-pane fade" id={item.maHeThongRap}>
          <div class={"nav nav-tabs" + " " + styles.listMovies}>
            {renderCinema(width, item.lstCumRap, item.maHeThongRap)}
          </div>
        </div>
      );
    }
  });
};

export const renderDataTarget = (maCumRap, maPhim) => {
  return "#" + maCumRap + "_" + maPhim;
};

export const renderID = (maCumRap, maPhim) => {
  return maCumRap + "_" + maPhim;
};

export const isValid = (ngayChieuGioChieu) => {
  let date = new Date(ngayChieuGioChieu);

  if (
    date.getDate() == 1 &&
    date.getMonth() + 1 == 1 &&
    date.getFullYear() == 2019
  )
    return true;
  return false;
};

export const renderTime = (ngayChieuGioChieu) => {
  let date = new Date();
  date = Date.parse(ngayChieuGioChieu);
  return date.getHours() + ":" + date.getMinutes();
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
      if (currentHour > hour || (currentHour == hour && currentMin > min))
        flag = false;
      if (flag) {
        return (
          <ButtonTime key={index} hour={hour} min={min} disabled={false} />
        );
      } else {
        return <ButtonTime key={index} hour={hour} min={min} disabled={true} />;
      }
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
        <div className={styles.wrapperCollapse} key={index}>
          <div
            className={styles.mainCollapse}
            data-toggle="collapse"
            data-target={renderDataTarget(maCumRap, item.maPhim)}
            aria-expanded="true"
          >
            {/* <img
                className="theater__img"
                src={item.hinhAnh}
                alt={item.tenPhim}
              /> */}
            <ImgWrapper src={item.hinhAnh} alt={item.tenPhim} />
            <div className={styles.wrapInfo}>
              <span className={styles.movieName}>
                <MovieAge /> - {item.tenPhim}
              </span>
              <span className={styles.movieDetail}>
                116 phút - TIX 8.6 - IMDb 0
              </span>
            </div>
          </div>
          <div className="collapse show" id={renderID(maCumRap, item.maPhim)}>
            <div className="pt-3 row">
              <div className={"col-12" + " " + styles.digital}>2D Digital</div>
              <div className="col-12">
                {renderMovieTimes(item.lstLichChieuTheoPhim)}
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (index == arr.length - 1 && !flag) {
      return (
        <div className="alert alert-danger">
          Cụm rạp này hôm nay không có phim
        </div>
      );
    }
  });
};

export const renderDetailTimes = (arr, active, styles) => {
  return arr.map((item, index) => {
    if (index == 0 && active) {
      return (
        <div
          className="tab-pane fade active show"
          id={item.maCumRap}
          key={index}
        >
          {renderDetailCinemaMovies(item.danhSachPhim, item.maCumRap, styles)}
        </div>
      );
    } else {
      return (
        <div className="tab-pane fade" id={item.maCumRap} key={index}>
          {renderDetailCinemaMovies(item.danhSachPhim, item.maCumRap, styles)}
        </div>
      );
    }
  });
};

export const renderShowTimes = (listShowTime, styles) => {
  return listShowTime.map((item, index) => {
    if (index == 0) return renderDetailTimes(item.lstCumRap, true, styles);
    return renderDetailTimes(item.lstCumRap, false, styles);
  });
};
