import { Avatar, Box } from "@mui/material";
import React from "react";
import ButtonOverlay from "../ButtonOverlay";
import MovieAge from "../MovieAge";
import MovieWrapper from "../MovieWrapper";
import useStyles from "./style";

export default function MovieItem(props) {
  const styles = useStyles();
  const { hinhAnh, tenPhim, danhGia, trailer, maPhim } = props;

  return (
    <Box className={`${styles.item} col-6 col-sm-4 col-md-3`}>
      <Box className={styles.img}>
        <MovieWrapper hinhAnh={hinhAnh} maPhim={maPhim} />
        <ButtonOverlay trailer={trailer}>
          {/* <ButtonTrailer /> */}
        </ButtonOverlay>
      </Box>
      <Box className={styles.title}>
        <MovieAge />
        {tenPhim}
        <ButtonOverlay className={styles.container} buy={maPhim}>
          {/* <ButtonBuy /> */}
        </ButtonOverlay>
      </Box>
      <Box className={styles.rate}>
        <Box component="span">{danhGia}</Box>
        <Box className={styles.star}>
          <Avatar variant="square" src="img/star1.png" alt="star" />
          <Avatar variant="square" src="img/star1.png" alt="star" />
          <Avatar variant="square" src="img/star1.png" alt="star" />
          <Avatar variant="square" src="img/star1.png" alt="star" />
          <Avatar variant="square" src="img/star1.png" alt="star" />
        </Box>
      </Box>
    </Box>
  );
}
