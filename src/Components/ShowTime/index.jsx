import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  renderCinemaTabs,
  renderShowTimes,
  renderSystemCinemas,
} from "../../Helpers/cinema-manager";
import {
  actGetSystemCinemaApi,
  actGetSystemShowTimeApi,
} from "./modules/action";
import useStyles from "./style";
import useContainerStyles from "./../MyContainer/style";

export default function ShowTime() {
  const width = window.innerWidth;
  // console.log(width);
  const styles = useStyles();
  const containerStyles = useContainerStyles();
  const listCinema = useSelector((state) => state.showTimeReducer.listCinema);
  const listShowTime = useSelector(
    (state) => state.showTimeReducer.listShowTime
  );

  // const useFetching = (someFetchActionCreator) => {
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(someFetchActionCreator());
  //   }, []);
  // };

  // useFetching(actGetSystemCinemaApi());
  useEffect(() => {
    dispatch(actGetSystemCinemaApi());
    dispatch(actGetSystemShowTimeApi("GP09"));
  }, [dispatch]);
  console.log(listCinema);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("dispatching");
  //   dispatch(actGetSystemCinemaApi());
  //   // dispatch(actGetSystemShowTimeApi());
  // }, []);

  if (listShowTime && listCinema) {
    if (width >= 768) {
      return (
        <section id="cinemas" className={styles.root}>
          <div className={containerStyles.root}>
            <div className="row flex-md-row flex-column">
              <div
                className={"nav nav-tabs" + " " + styles.listCinema}
                id="cinemaTab"
                // role="tablist"
              >
                {renderCinemaTabs(listCinema, width)}
              </div>
              <div className={styles.cinemaTabContent} id="cinemaTabContent">
                {renderSystemCinemas(width, listShowTime, styles)}
              </div>
              <div className={"tab-content" + " " + styles.cinemaMovies}>
                {renderShowTimes(listShowTime, styles)}
              </div>
            </div>
          </div>
        </section>
      );
    } else
      return (
        <section id="cinemas" className={styles.root}>
          <div className={containerStyles.root}>
            <div className="row flex-md-row flex-column">
              <div
                className={"nav nav-tabs" + " " + styles.listCinema}
                id="cinemaTab"
                role="tablist"
              >
                {renderCinemaTabs(listCinema, width)}
              </div>
              <div className={styles.cinemaTabContent} id="cinemaTabContent">
                {renderSystemCinemas(listShowTime, styles)}
              </div>
            </div>
          </div>
        </section>
      );
  } else return <div className="text-center">Loading</div>;
}
