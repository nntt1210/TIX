import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Search from "../SearchMovie";
import { Box } from "@material-ui/core";
import Table from "../DataTable";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { getFullDate } from "../../Helpers/time-manager";
import useStyles from "./style";
import { actDeleteMovie } from "../../Containers/AdminTemplate/modules/action";
import { actGetMoviesApi } from "../../Containers/AdminTemplate/modules/actions/movies";
import * as ActionType from "./../../Containers/AdminTemplate/modules/constants";
// import { getMovies } from "../../redux/actions/movieAction";
// import { deleteMovie } from "../../redux/actions/adminAction";
// import {
//   GET_EDIT_MOVIE_STATUS,
//   GET_EDITED_MOVIE,
//   GET_KEYWORD_MOVIE,
// } from "../../redux/actions/actionType";

const MovieTable = (props) => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const movies = useSelector((state) => state.moviesReducer.list);
  const user = useSelector((state) => state.userLoginReducer.login);

  let headers = [
    "Mã phim",
    "Tên phim",
    "Ngày khởi chiếu",
    "Đánh giá",
    "Hình ảnh",
    "Chỉnh sửa",
    "Xoá",
  ];

  useEffect(() => {
    dispatch(actGetMoviesApi());
  }, [dispatch]);

  const handleEdit = (account) => {
    dispatch({ type: ActionType.GET_EDIT_MOVIE_STATUS, payload: true });
    dispatch({ type: ActionType.GET_EDITED_MOVIE, payload: account });
    window.scrollTo(0, 0);
  };

  const handleDelete = (id) => {
    dispatch(actDeleteMovie(id, user.accessToken));
  };

  let data = movies.map((movie) => ({
    id: movie.maPhim,
    name: movie.tenPhim,
    startDate: getFullDate(movie.ngayKhoiChieu),
    score: parseFloat(movie.danhGia).toFixed(1),
    poster: <img src={movie.hinhAnh} alt="img" className={styles.image} />,
    edit: (
      <IconButton
        onClick={() => handleEdit(movie)}
        className={styles.iconButton}
      >
        <CreateIcon color="primary" />
      </IconButton>
    ),
    delete: (
      <IconButton
        onClick={() => handleDelete(movie.maPhim)}
        className={styles.iconButton}
      >
        <DeleteIcon color="error" />
      </IconButton>
    ),
  }));

  return (
    <>
      {/* <Box className={styles.search}>
        <Search
          placeholder="Nhập tên phim..."
          state={keyWord}
          dispatchType={GET_KEYWORD_MOVIE}
          searchAction={handleSearch}
        />
      </Box> */}
      <Box className={styles.table}>
        <Table
          headers={headers}
          rows={data}
          maxWidth={"100%"}
          maxHeight={500}
        />
      </Box>
    </>
  );
};

export default MovieTable;
