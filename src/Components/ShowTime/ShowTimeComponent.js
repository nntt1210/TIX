import React, { Component } from "react";
import { connect } from "react-redux";
import ButtonTime from "../ButtonTime";
import CinemaItem from "../CinemaItem";
import ImgWrapper from "../ImgWrapper";
import LogoWrapper from "../LogoWrapper";

import {
  actGetSystemCinemaApi,
  actGetSystemShowTimeApi,
} from "./modules/action";

class ShowTimeComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getListCinema();
    this.props.getListShowTime("GP09");
    window.addEventListener("resize", this.handleResize);
    console.log(window.innerWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.forceUpdate();
  };

  resetActiveCinema = (id) => {
    let systemCinema = document.getElementById(id);
    let listCinema = systemCinema.getElementsByClassName("cinema-item");
    let activeCinema = systemCinema.getElementsByClassName("active");
    for (let i = 0; i < listCinema.length; i++) {
      if (listCinema[0] != activeCinema) {
        listCinema[0].classList.add("active");
        listCinema[0].setAttribute("aria-selected", true);
        let target = listCinema[0].getAttribute("data-target");
        let id = target.substr(1);
        let list = document.getElementsByClassName("cinemaList__movies");
        for (let i = 0; i < list[0].childNodes.length; i++) {
          if (list[0].childNodes[i].classList.contains("active")) {
            list[0].childNodes[i].classList.remove("active");
            list[0].childNodes[i].classList.remove("show");
          }
        }
        document.getElementById(id).classList.add("active");
        document.getElementById(id).classList.add("show");
      }
      if (i != 0 && listCinema[i].classList.contains("active")) {
        listCinema[i].classList.remove("active");
        listCinema[i].setAttribute("aria-selected", false);
      }
    }
  };

  renderCinemaTabs = () => {
    if (this.props.listCinema) {
      const width = window.innerWidth;
      if (width >= 768) {
        return this.props.listCinema.map((item, index) => {
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
      } // else {
      //   return this.props.listCinema.map((item, index) => {
      //     if (index == 0) {
      //       return (
      //         <div
      //           className="logoWrapper active"
      //           data-toggle="tab"
      //           data-target={"#" + item.maHeThongRap}
      //           role="tab"
      //         >
      //           <img src={item.logo} alt={item.maHeThongRap} />
      //         </div>
      //       );
      //     } else {
      //       return (
      //         <div
      //           className="logoWrapper"
      //           data-toggle="tab"
      //           data-target={"#" + item.maHeThongRap}
      //           role="tab"
      //         >
      //           <img src={item.logo} alt={item.maHeThongRap} />
      //         </div>
      //       );
      //     }
      //   });
      // }
    }
  };

  resetActiveDetailCinema = (maCumRap, active) => {
    let detailCinema = document.getElementById(maCumRap);
    if (active) {
      detailCinema.classList.add("active");
    } else detailCinema.classList.remove("active");
  };

  renderCinemaName = (cinema) => {
    let index = cinema.indexOf("-");
    cinema = cinema.substr(0, index);
    return cinema;
  };

  renderCinemaAddress = (cinema) => {
    let index = cinema.indexOf("-");
    cinema = cinema.substr(index + 2);
    return cinema;
  };

  renderCinema = (arr, id) => {
    const width = window.innerWidth;
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
          <div className="cinema-item" key={index}>
            <div
              className="collapsed"
              data-toggle="collapse"
              data-target={"#" + rap.maCumRap}
            >
              <div className="cinema__details">
                <img
                  className="cinemaImg"
                  src={`./img/${id}_theater.jpg`}
                  alt={rap.maCumRap}
                />
                <div className="cinemaInfo">
                  <span className="cinemaName">
                    <span className={id}>
                      {this.renderCinemaName(rap.tenCumRap)}
                    </span>
                    - {this.renderCinemaAddress(rap.tenCumRap)}
                  </span>
                  <span className="cinemaAddress">{rap.diaChi}</span>
                  {/* <span className="redDetail">[chi tiết]</span> */}
                </div>
              </div>
            </div>
            <div className="movies-cinema collapse" id={rap.maCumRap}>
              {this.renderDetailCinemaMovies(rap.danhSachPhim, rap.maCumRap)}
            </div>
          </div>
        );
      });
    }
  };

  renderSystemCinemas = () => {
    return this.props.listShowTime.map((item, index) => {
      if (index == 0) {
        return (
          <div
            className="tab-pane fade show active cinemaList"
            id={item.maHeThongRap}
          >
            <div class="nav nav-tabs listMovies">
              {this.renderCinema(item.lstCumRap, item.maHeThongRap)}
            </div>
          </div>
        );
      } else {
        return (
          <div className="tab-pane fade cinemaList" id={item.maHeThongRap}>
            <div class="nav nav-tabs listMovies">
              {this.renderCinema(item.lstCumRap, item.maHeThongRap)}
            </div>
          </div>
        );
      }
    });
  };

  renderDataTarget = (maCumRap, maPhim) => {
    return "#" + maCumRap + "_" + maPhim;
  };

  renderID = (maCumRap, maPhim) => {
    return maCumRap + "_" + maPhim;
  };

  isValid = (ngayChieuGioChieu) => {
    let date = new Date(ngayChieuGioChieu);

    if (
      date.getDate() == 1 &&
      date.getMonth() + 1 == 1 &&
      date.getFullYear() == 2019
    )
      return true;
    return false;
  };

  renderTime = (ngayChieuGioChieu) => {
    let date = new Date();
    date = Date.parse(ngayChieuGioChieu);
    return date.getHours() + ":" + date.getMinutes();
  };

  renderMovieTimes = (arr) => {
    return arr.map((item, index) => {
      if (this.isValid(item.ngayChieuGioChieu)) {
        let flag = true;
        let date = new Date(item.ngayChieuGioChieu);
        let hours = date.getHours();
        let min = date.getMinutes();
        let endTime = hours + 2;
        let currentDate = new Date();
        let currentHour = currentDate.getHours();
        let currentMin = currentDate.getMinutes();
        if (currentHour > hours || (currentHour == hours && currentMin > min))
          flag = false;
        if (hours < 10) hours = "0" + hours;
        if (endTime < 10) endTime = "0" + endTime;

        if (min < 10) min = "0" + min;
        if (flag) {
          return (
            // <button className="btn btn-time" key={index}>
            //   <span className="start">
            //     {hours}:{min}
            //   </span>{" "}
            //   ~ {endTime}:{min}
            // </button>
            <ButtonTime />
          );
        } else {
          return (
            // <button className="btn btn-time" key={index} disabled>
            //   <span className="start">
            //     {hours}:{min}
            //   </span>{" "}
            //   ~ {endTime}:{min}
            // </button>
            <ButtonTime />
          );
        }
      }
    });
  };

  renderDetailCinemaMovies = (arr, maCumRap) => {
    for (let i = 0; i < arr.length; i++) {
      let listLichChieu = arr[i].lstLichChieuTheoPhim;
      listLichChieu = listLichChieu.filter((item) =>
        this.isValid(item.ngayChieuGioChieu)
      );
      arr[i].lstLichChieuTheoPhim = listLichChieu;
    }

    let flag = false;
    return arr.map((item, index) => {
      if (item.lstLichChieuTheoPhim.length > 0) {
        flag = true;
        return (
          <div className="wrapper__collapse" key={index}>
            <div
              className="main__collapse"
              data-toggle="collapse"
              data-target={this.renderDataTarget(maCumRap, item.maPhim)}
              aria-expanded="true"
            >
              {/* <img
                className="theater__img"
                src={item.hinhAnh}
                alt={item.tenPhim}
              /> */}
              <ImgWrapper src={item.hinhAnh} alt={item.tenPhim} />
              <div className="wrapInfo">
                <span className="movieName">
                  <span className="showing__age">C13</span> - {item.tenPhim}
                </span>
                <span className="movieDetail">116 phút - TIX 8.6 - IMDb 0</span>
              </div>
            </div>
            <div
              className="collapse show"
              id={this.renderID(maCumRap, item.maPhim)}
            >
              <div className="pt-3 row">
                <div className="col-12 digital">2D Digital</div>
                <div className="col-12">
                  {this.renderMovieTimes(item.lstLichChieuTheoPhim)}
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

  renderDetailTimes = (arr, active) => {
    return arr.map((item, index) => {
      if (index == 0 && active) {
        return (
          <div
            className="tab-pane fade active show"
            id={item.maCumRap}
            key={index}
          >
            {this.renderDetailCinemaMovies(item.danhSachPhim, item.maCumRap)}
          </div>
        );
      } else {
        return (
          <div className="tab-pane fade" id={item.maCumRap} key={index}>
            {this.renderDetailCinemaMovies(item.danhSachPhim, item.maCumRap)}
          </div>
        );
      }
    });
  };

  renderShowTimes = () => {
    // console.log(this.props.listShowTime);
    return this.props.listShowTime.map((item, index) => {
      if (index == 0) return this.renderDetailTimes(item.lstCumRap, true);
      return this.renderDetailTimes(item.lstCumRap, false);
    });
  };

  render() {
    const width = window.innerWidth;
    console.log(width);
    if (!this.props.listCinema || !this.props.listShowTime)
      return <div className="loader"></div>;
    else {
      console.log("Render");
      if (width >= 768) {
        return (
          <section id="cinemas" className="movieList">
            <div className="myContainer">
              <div className="row flex-md-row flex-column">
                <div
                  className="nav nav-tabs listCinemas"
                  id="cinemaTab"
                  role="tablist"
                >
                  {this.renderCinemaTabs()}
                </div>
                <div className="tab-content" id="cinemaTabContent">
                  {this.renderSystemCinemas()}
                </div>
                <div className="tab-content cinemaList__movies">
                  {this.renderShowTimes()}
                </div>
              </div>
            </div>
          </section>
        );
      } else
        return (
          <section id="cinemas" className="movieList">
            <div className="myContainer">
              <div className="row flex-md-row flex-column">
                <div
                  className="nav nav-tabs listCinemas"
                  id="cinemaTab"
                  role="tablist"
                >
                  {this.renderCinemaTabs()}
                </div>
                <div className="tab-content" id="cinemaTabContent">
                  {this.renderSystemCinemas()}
                </div>
              </div>
            </div>
          </section>
        );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    listCinema: state.showTimeReducer.listCinema,
    listShowTime: state.showTimeReducer.listShowTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListCinema: () => {
      dispatch(actGetSystemCinemaApi());
    },
    getListShowTime: (groupID) => {
      dispatch(actGetSystemShowTimeApi(groupID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowTimeComponent);
