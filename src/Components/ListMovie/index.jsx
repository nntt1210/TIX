import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actListMovieApi, actListUpcomingMovieApi } from "./modules/action";
import Slider from "react-slick";
import MovieItem from "../MovieItem";
import { Box } from "@material-ui/core";
import { useState } from "react";
import useStyles from "./style";
import useContainerStyles from "./../MyContainer/style";
import { getFullDate } from "../../Helpers/time-manager";

export default function ListMovie(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //   const userLogin = useSelector((state) => state.userLogin);
  const listMovie = useSelector((state) => state.listMovieReducer.data);
  const upcomingMovie = useSelector((state) => state.listMovieReducer.nextData);
  const loading = useSelector((state) => state.listMovieReducer.loading);
  const dispatch = useDispatch();
  const styles = useStyles();
  const containerStyles = useContainerStyles();
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     //   console.log(loading);
  //     //   if (!loading) {
  //     //     dispatch(actListMovieApi("09"));
  //     //   }
  //     //   dispatch(actListUpcomingMovieApi("10"));
  //     async function fetchData() {
  //       await dispatch(actListMovieApi("GP09"));
  //     }
  //     fetchData();
  //   }, []);
  useEffect(() => {
    if (listMovie.length == 0) dispatch(actListMovieApi("GP00"));
  }, [dispatch]);

  //   setLoading(true);

  const renderSlide = (currentIndex, movie) => {
    var items = movie
      .slice(currentIndex, currentIndex + 8)
      .map((item, index) => {
        return (
          <MovieItem
            key={index}
            hinhAnh={item.hinhAnh}
            maPhim={item.maPhim}
            tenPhim={item.tenPhim}
            danhGia={item.danhGia}
            trailer={item.trailer}
          />
        );
      });
    return items;
  };

  const renderMovies = (list) => {
    if (list) {
      let arr = [];
      let currentIndex = 0;
      let length = list.length;
      while (currentIndex < length) {
        let items = renderSlide(currentIndex, list);
        currentIndex += 8;
        arr.push(items);
      }
      return arr.map((item, index) => {
        return (
          <Box
            key={index}
            className="row d-flex"
            style={{ margin: "0 !important" }}
          >
            {item}
          </Box>
        );
      });
    }
  };

  const renderUpcomingMovies = (list) => {
    if (list) {
      console.log(getFullDate(list[0].ngayKhoiChieu));
      let upcomingList = list.filter(
        (item) =>
          new Date(getFullDate(item.ngayKhoiChieu)) >= new Date("7/3/2021")
      );
      console.log(upcomingList);
      return renderMovies(upcomingList);
    }
  };

  return (
    <Box id="movieList" className={styles.root}>
      <Box className={containerStyles.root}>
        <ul
          className={"nav nav-tabs" + " " + styles.nav}
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className={"active" + " " + styles.navLink}
              id="home-tab"
              data-toggle="tab"
              data-target="#nowShowingFilms"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Đang Chiếu
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className={styles.navLink}
              id="profile-tab"
              data-toggle="tab"
              data-target="#comingFilms"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Sắp Chiếu
            </a>
          </li>
        </ul>
        <Box className="tab-content" id="myTabContent">
          <Box
            className="tab-pane fade show active"
            id="nowShowingFilms"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <Box>
              <Slider {...settings}>{renderMovies(listMovie)}</Slider>
            </Box>
          </Box>
          <Box
            className="tab-pane fade show"
            id="comingFilms"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Box>
              {/* <Slider {...settings}>{renderUpcomingMovies(listMovie)}</Slider> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
