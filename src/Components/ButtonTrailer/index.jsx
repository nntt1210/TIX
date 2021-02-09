import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { actGetMovieTrailer } from "./modules/action";
import useStyles from "./style";

export default function ButtonTrailer(props) {
  const { trailer } = props;
  const styles = useStyles();
  const dispatch = useDispatch();
  return (
    <Button
      data-toggle="modal"
      data-target="#movieTrailer"
      className={styles.button}
      onClick={() => dispatch(actGetMovieTrailer(trailer))}
    >
      <img className="img-fluid" src="/img/play-video.png" alt="play trailer" />
    </Button>
  );
}
