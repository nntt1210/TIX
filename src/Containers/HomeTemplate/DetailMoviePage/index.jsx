import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DayList from "../../../Components/DayList";
import Loader from "../../../Components/Loader";
import MovieBackground from "../../../Components/MovieBackground";
import MovieDetails from "../../../Components/MovieDetails";
import MovieDiscussion from "../../../Components/MovieDiscussion";
import MovieInfo from "../../../Components/MovieInfo";
import MovieTrailer from "../../../Components/MovieTrailer";
import NavigationTab from "../../../Components/NavigationTab";
import {
  actGetSystemCinemaApi,
  actGetSystemShowTimeApi,
} from "../../../Components/ShowTime/modules/action";
import {
  renderCinemaContent,
  renderCinemaTabs,
  renderCollapseCinemaTabs,
} from "../../../Helpers/detail-movie-manager";
import { actDetailMovieApi } from "./modules/action";

import useStyles from "./style";

export default function DetailMoviePage(props) {
  const styles = useStyles();
  const [currentDate, setCurrentDate] = useState("01");
  // const loading = useSelector((state) => state.detailMovieReducer.loading);
  const detailMovie = useSelector(
    (state) => state.detailMovieReducer.detailMovie
  );
  //   const err = useSelector((state) => state.detailMovieReducer.err);
  const listCinema = useSelector((state) => state.showTimeReducer.listCinema);
  const listShowTime = useSelector(
    (state) => state.showTimeReducer.listShowTime
  );
  const id = props.match.params.id;
  console.log(id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actDetailMovieApi(id));
    if (listCinema.length === 0) dispatch(actGetSystemCinemaApi());
    if (listShowTime.length === 0) dispatch(actGetSystemShowTimeApi("GP09"));
  }, [dispatch, id, listCinema.length, listShowTime.length]);

  if (detailMovie && listCinema && listShowTime) {
    const { tenPhim, trailer, hinhAnh, ngayKhoiChieu, danhGia, moTa } =
      detailMovie;
    return (
      <section>
        <Box className={styles.content}>
          <MovieBackground hinhAnh={hinhAnh} alt={tenPhim} />
          <MovieDetails
            hinhAnh={hinhAnh}
            trailer={trailer}
            ngayKhoiChieu={ngayKhoiChieu}
            tenPhim={tenPhim}
            danhGia={danhGia}
          />
        </Box>
        <Box id="movieDetail" className={styles.detail}>
          <Box className={styles.myContainer}>
            <ul className={`nav nav-tabs ${styles.nav}`} role="tablist">
              <NavigationTab
                id="lichChieu"
                content="Lịch chiếu"
                active={true}
              />
              <NavigationTab id="thongTin" content="Thông tin" active={false} />
              <NavigationTab id="danhGia" content="Đánh giá" active={false} />
            </ul>
            {/* className="tab-content" */}
            <Box>
              <Box
                className={`tab-pane fade show active ${styles.largeScreen}`}
                id="lichChieu"
                role="tabpanel"
                aria-labelledby="lichChieu-tab"
              >
                <Box className={styles.listTime}>
                  <Box className={styles.detailWrapper}>
                    <Box className={`nav ${styles.listOfDay}`} role="tablist">
                      <DayList onClick={(date) => setCurrentDate(date)} />
                    </Box>
                    <Box
                      className={`nav ${styles.detailCinema}`}
                      role="tablist"
                    >
                      {renderCinemaTabs(listCinema)}
                    </Box>
                    <Box
                      className={`nav ${styles.collapseDetailCinema}`}
                      role="tablist"
                    >
                      {renderCollapseCinemaTabs(
                        listCinema,
                        detailMovie,
                        listShowTime,
                        currentDate
                      )}
                    </Box>
                    <Box className={styles.detailShowList}>
                      {renderCinemaContent(
                        listCinema,
                        detailMovie,
                        listShowTime,
                        currentDate
                      )}
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
  } else return <Loader />;
  // return <div className="text-center">Loading</div>;
}
