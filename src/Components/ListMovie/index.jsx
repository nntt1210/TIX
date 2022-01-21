import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actListMovieApi } from "./modules/action";
import Slider from "react-slick";
import MovieItem from "../MovieItem";
import { Box, List, ListItem } from "@material-ui/core";
import useStyles from "./style";
import useContainerStyles from "./../MyContainer/style";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
// import { getFullDate } from "../../Helpers/time-manager";

export default function ListMovie(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const listMovie = useSelector((state) => state.listMovieReducer.data);
  const dispatch = useDispatch();
  const styles = useStyles();
  const containerStyles = useContainerStyles();
  useEffect(() => {
    if (listMovie.length === 0) dispatch(actListMovieApi("GP03"));
  }, [dispatch, listMovie.length]);
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

  // const renderUpcomingMovies = (list) => {
  //   if (list) {
  //     console.log(getFullDate(list[0].ngayKhoiChieu));
  //     let upcomingList = list.filter(
  //       (item) =>
  //         new Date(getFullDate(item.ngayKhoiChieu)) >= new Date("7/3/2021")
  //     );
  //     console.log(upcomingList);
  //     return renderMovies(upcomingList);
  //   }
  // };

  return (
    <Box id="movieList" className={styles.root}>
      <Box className={containerStyles.root}>
        {/* <List
          className={classNames("nav nav-tabs", styles.nav)}
          id="myTab"
          role="tablist"
        >
          <ListItem className="nav-item" role="presentation">
            <NavLink
              to="/#"
              className={classNames("active", styles.navLink)}
              id="now-showing-tab"
              data-toggle="tab"
              data-target="#nowShowingFilms"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Đang Chiếu
            </NavLink>
          </ListItem>
          <ListItem className="nav-item" role="presentation">
            <NavLink
              to="/#"
              className={classNames("active", styles.navLink)}
              id="upcoming-tab"
              data-toggle="tab"
              data-target="#upcomingFilms"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Sắp Chiếu
            </NavLink>
          </ListItem>
        </List> */}
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
        </Box>
      </Box>
    </Box>
  );
}
