import React, { Component } from "react";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import containerStyle from "./../../../Components/MyContainer/style";
import MovieTrailer from "../../../Components/MovieTrailer";
import { actGetSystemCinemaApi } from "../../../Components/ShowTime/modules/action";
import { actDetailMovieApi } from "./modules/action";
import LogoWrapper from "../../../Components/LogoWrapper";
import MovieInfo from "../../../Components/MovieInfo";
import NavigationTab from "../../../Components/NavigationTab";
import MovieBackground from "../../../Components/MovieBackground";
import MovieDetails from "../../../Components/MovieDetails";
import DayList from "../../../Components/DayList";
import CinemaCollapse from "../../../Components/CinemaCollapse";
import MovieDiscussion from "../../../Components/MovieDiscussion";

const styles = (theme) => ({
  content: {
    marginTop: "60px",
    marginBottom: 0,
    color: "#e9e9e9",
    fontSize: "14px",
    position: "relative",
  },
  detail: {
    padding: "30px 0",
    background: "#0a2029",
  },
  container: {
    // containerStyle,
    margin: "0 auto",
    maxWidth: "940px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 30px)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(100% - 20px)",
    },
    "& .tab-pane": {
      display: "none",
    },
    "& .active": {
      display: "block",
    },
  },
  nav: {
    border: "none",
    justifyContent: "center",
  },
  listTime: {
    margin: "30px 0 0",
    background: "#fff",
    paddingBottom: "10px",
  },
  detailWrapper: {
    boxShadow: "0 0 15px hsla(0, 0%, 100%, 0.3)",
    display: "grid",
    gridTemplateRows: "minmax(auto, 90px) 1fr",
    gridTemplateColumns: "1fr",
    gridTemplateAreas: `ld"  "tr"  "sh"`,
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(10, 1fr)",
      gridTemplateAreas: `"tr tr tr ld ld ld ld ld ld ld"  "tr tr tr sh sh sh sh sh sh sh"`,
    },
  },
  listOfDay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "20px 5px",
    margin: 0,
    overflowY: "hidden",
    overflowX: "auto",
    //
    gridArea: "ld",
    maxHeight: "90px",
    border: "1px solid #ebebec",
  },
  detailCinema: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexWrap: "nowrap",
    flexBasis: "100%",
    overflowY: "auto",
    //
    gridArea: "tr",
    maxHeight: "735px",
    border: "1px solid #ebebec",
  },
  detailShowList: {
    overflowY: "auto",
    //
    gridArea: "sh",
    maxHeight: "645px",
    border: "1px solid #ebebec",
    "& .tab-pane": {
      display: "none",
    },
    "& .active": {
      display: "block",
    },
  },
  wrapperCollapse: {
    position: "relative",
    width: "100%",
    padding: "20px",
    border: "none",
    opacity: 1,
    transition: "all 0.5s",
  },
});

class DetailMoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: "01",
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchDetailMovie(id);
    if (!this.props.listCinema) {
      this.props.fetchListCinema();
    }
    // console.log(this.props.listCinema);
    // console.log("componentDidMount");
  }

  renderCinemaTabs = () => {
    if (this.props.listCinema) {
      return this.props.listCinema.map((item, index) => {
        if (index == 0) {
          return (
            <LogoWrapper
              src={item.logo}
              alt={item.maHeThongRap}
              target={"#" + item.maHeThongRap}
              detail={true}
              name={item.tenHeThongRap}
              active={true}
            />
          );
        } else {
          return (
            <LogoWrapper
              src={item.logo}
              alt={item.maHeThongRap}
              target={"#" + item.maHeThongRap}
              detail={true}
              name={item.tenHeThongRap}
            />
          );
        }
      });
    }
  };

  // resetActiveDay = () => {
  //   let listDay = document.getElementsByClassName("detail__listOfDay--item");

  // }
  renderCinemaContent = () => {
    if (this.props.listCinema) {
      return this.props.listCinema.map((item, index) => {
        if (index == 0) {
          return (
            <Box className="tab-pane fade active show" id={item.maHeThongRap}>
              {this.renderShowList(item.maHeThongRap)}
            </Box>
          );
        } else {
          return (
            <Box className="tab-pane fade" id={item.maHeThongRap}>
              {this.renderShowList(item.maHeThongRap)}
            </Box>
          );
        }
      });
    }
  };

  renderShowList = (maHeThongRap) => {
    const { detailMovie, listShowTime } = this.props;
    let list = detailMovie.lichChieu.filter(
      (item) => item.thongTinRap.maHeThongRap === maHeThongRap
    );
    list = list.filter(
      (item) =>
        new Date(item.ngayChieuGioChieu).getDate() ===
          parseInt(this.state.currentDate) &&
        new Date(item.ngayChieuGioChieu).getMonth() + 1 === 1
    );
    // console.log(list);
    let newLST = listShowTime.filter(
      (item) => item.maHeThongRap === maHeThongRap
    );

    // console.log(lst);
    let lstCumRap = newLST[0].lstCumRap;
    for (let i = 0; i < lstCumRap.length; i++) {
      let newList = list.filter(
        (item) => item.thongTinRap.maCumRap === lstCumRap[i].maCumRap
      );
      console.log(newList);
      if (newList.length > 0) {
        return (
          <CinemaCollapse
            maHeThongRap={maHeThongRap}
            maCumRap={newList[0].thongTinRap.maCumRap}
            tenCumRap={newList[0].thongTinRap.tenCumRap}
            list={newList}
          />
        );
      } else
        return (
          <Box className="alert alert-danger">
            Ngày này không có lịch chiếu !
          </Box>
        );
    }
  };

  setCurrentDate = (date) => {
    this.setState(
      {
        currentDate: date,
      },
      () => {
        console.log(this.state.currentDate);
      }
    );
  };

  render() {
    if (this.props.detailMovie) {
      const {
        maPhim,
        tenPhim,
        trailer,
        hinhAnh,
        ngayKhoiChieu,
        danhGia,
        moTa,
      } = this.props.detailMovie;
      const { classes } = this.props;
      return (
        // className="movie__times"
        <section>
          <Box className={classes.content}>
            <MovieBackground hinhAnh={hinhAnh} alt={tenPhim} />
            <MovieDetails
              hinhAnh={hinhAnh}
              trailer={trailer}
              ngayKhoiChieu={ngayKhoiChieu}
              tenPhim={tenPhim}
              danhGia={danhGia}
            />
          </Box>
          <Box className={classes.detail}>
            <Box className={classes.container}>
              <ul
                className={"nav nav-tabs" + " " + `${classes.nav}`}
                role="tablist"
              >
                <NavigationTab
                  id="lichChieu"
                  content="Lịch chiếu"
                  active={true}
                />
                <NavigationTab
                  id="thongTin"
                  content="Thông tin"
                  active={false}
                />
                <NavigationTab id="danhGia" content="Đánh giá" active={false} />
              </ul>
              {/* className="tab-content" */}
              <Box>
                <Box
                  className="tab-pane fade show active"
                  id="lichChieu"
                  role="tabpanel"
                  aria-labelledby="lichChieu-tab"
                >
                  <Box className={classes.listTime}>
                    <Box className={classes.detailWrapper}>
                      <Box
                        className={"nav" + " " + `${classes.listOfDay}`}
                        role="tablist"
                      >
                        <DayList
                          onClick={(date) => this.setCurrentDate(date)}
                        />
                      </Box>
                      <Box
                        className={"nav" + " " + `${classes.detailCinema}`}
                        role="tablist"
                      >
                        {this.renderCinemaTabs()}
                      </Box>
                      <Box className={classes.detailShowList}>
                        {this.renderCinemaContent()}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="tab-pane fade"
                  id="thongTin"
                  role="tabpanel"
                  aria-labelledby="thongTin-tab"
                >
                  <MovieInfo ngayKhoiChieu={ngayKhoiChieu} moTa={moTa} />
                </Box>
                <Box
                  className="tab-pane fade"
                  id="danhGia"
                  role="tabpanel"
                  aria-labelledby="danhGia-tab"
                >
                  <MovieDiscussion />
                </Box>
              </Box>
            </Box>
          </Box>
          <MovieTrailer trailer={trailer} />
        </section>
      );
    } else return <Box className="text-center">Loading...</Box>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    detailMovie: state.detailMovieReducer.detailMovie,
    err: state.detailMovieReducer.err,
    listCinema: state.showTimeReducer.listCinema,
    listShowTime: state.showTimeReducer.listShowTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailMovie: (id) => {
      dispatch(actDetailMovieApi(id));
    },
    fetchListCinema: () => {
      dispatch(actGetSystemCinemaApi());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(DetailMoviePage);
// export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
