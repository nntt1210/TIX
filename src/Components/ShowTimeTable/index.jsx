import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../../Components/DropDown";
import {
  Grid,
  Box,
  Collapse,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { getFullDate, getTime } from "../../Helpers/time-manager";
// import {
//   getCinemaSystemInfo,
//   getCinemaInfo,
// } from "../../redux/actions/cinemaAction";
// import { getMovies } from "../../redux/actions/movieAction";
// import { getAllCinemaShowTimes } from "../../redux/actions/showTimeAction";
// import {
//   GET_SELECTED_CINEMA_SYSTEM,
//   GET_ID_CINEMA,
//   GET_SELECTED_MOVIE,
// } from "../../redux/actions/actionType";
// import { getCinemaSystemId } from "../../helpers/search-manager";
import { getShowTimeInfo } from "../../Helpers/schedule-cinema-manager";
import Table from "../DataTable";
import useStyles from "./style";
import { actGetMoviesApi } from "../../Containers/AdminTemplate/modules/actions/movies";
// import {
//   actGetAllCinemaShowTimesApi,
//   actGetCinemaSystemId,
// } from "../../Containers/AdminTemplate/modules/actions/showtimes";
import * as ActionType from "./../../Containers/AdminTemplate/modules/constants";
import {
  getCinemaInfo,
  getCinemaSystemInfo,
} from "../../Containers/AdminTemplate/modules/actions/cinemas";
import { getCinemaSystemId } from "../../Helpers/cinema-manager";
import { actGetSystemShowTimeApi } from "../ShowTime/modules/action";

const ShowTimeTable = (props) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const [search, setSearch] = useState(false);

  const cinemaSystems = useSelector((state) => state.cinemaSystemReducer.list);
  const cinemas = useSelector((state) => state.cinemasReducer.list);
  const movies = useSelector((state) => state.moviesReducer.list);
  const showTimes = useSelector((state) => state.showTimeReducer.listShowTime);

  const selectedSystem = useSelector(
    (state) => state.cinemaSystemReducer.selected
  );
  const selectedCinema = useSelector((state) => state.cinemasReducer.selected);
  const selectedMovie = useSelector((state) => state.moviesReducer.selected);

  const cinemaSystemNames = cinemaSystems.map((system) => system.tenHeThongRap);
  const cinemaNames = cinemas.map((cinema) => cinema.tenCumRap);
  const movieNames = movies.map((movies) => movies.tenPhim);

  let headers = [
    "Mã lịch chiếu",
    "Tên rạp",
    "Ngày chiếu",
    "Giờ chiếu",
    "Giá vé",
  ];

  useEffect(() => {
    dispatch(getCinemaSystemInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCinemaInfo(getCinemaSystemId(cinemaSystems, selectedSystem)));
  }, [cinemaSystems, dispatch, selectedSystem]);

  useEffect(() => {
    dispatch(actGetMoviesApi());
  }, [dispatch]);

  useEffect(() => {
    dispatch(actGetSystemShowTimeApi("GP00"));
    console.log("getCinemaShowTimes");
  }, [dispatch]);

  console.log(selectedMovie);

  let tableData = getShowTimeInfo(
    showTimes,
    selectedSystem,
    selectedCinema,
    selectedMovie
  ).map((showTime) => ({
    id: showTime.maLichChieu,
    cinemaNumber: showTime.tenRap,
    showTimeDate: getFullDate(showTime.ngayChieuGioChieu),
    startTime: getTime(showTime.ngayChieuGioChieu),
    price: showTime.giaVe,
  }));

  return (
    <>
      <FormControlLabel
        classes={{ root: styles.checkbox, label: styles.label }}
        control={
          <Checkbox
            checked={search}
            onChange={() => setSearch(!search)}
            name="search"
          />
        }
        label="Tìm kiếm"
      />
      <Collapse in={search} timeout="auto">
        <Grid container spacing={1}>
          <Grid item xs={12} md={4} className={styles.dropDown}>
            <DropDown
              label="Hệ thống rạp"
              state={selectedSystem}
              dispatchType={ActionType.GET_SELECTED_CINEMA_SYSTEM}
              list={cinemaSystemNames}
              placeHolder="Vui lòng chọn hệ thống rạp"
            />
          </Grid>
          <Grid item xs={12} md={4} className={styles.dropDown}>
            <DropDown
              label="Cụm rạp"
              state={selectedCinema}
              dispatchType={ActionType.GET_ID_CINEMA}
              list={cinemaNames}
              placeHolder="Vui lòng chọn hệ thống rạp"
            />
          </Grid>
          <Grid item xs={12} md={4} className={styles.dropDown}>
            <DropDown
              label="Phim"
              state={selectedMovie}
              dispatchType={ActionType.GET_SELECTED_MOVIE}
              list={movieNames}
              placeHolder="Vui lòng chọn phim"
            />
          </Grid>
        </Grid>
      </Collapse>

      <Box className={styles.table}>
        <Table
          headers={headers}
          rows={tableData}
          maxWidth={"100%"}
          maxHeight={500}
        />
      </Box>
    </>
  );
};

export default ShowTimeTable;
