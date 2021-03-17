import React from "react";
import useStyles from "./style";
import ButtonTrailer from "./../ButtonTrailer";
import ButtonBuy from "./../ButtonBuy";
import { Box } from "@material-ui/core";

export default function ButtonOverlay(props) {
  const styles = useStyles();
  const { trailer, buy } = props;

  // console.log(trailer, buy);
  if (trailer != null)
    return (
      <Box className={`${styles.overlay} overlay`}>
        <ButtonTrailer trailer={trailer} />
      </Box>
    );
  else if (buy != null)
    return (
      <Box className={`${styles.overlay} overlay`} width="100%" height="100%">
        <ButtonBuy buy={buy} />
      </Box>
    );
  else return <Box id="overlay" className={styles.overlay}></Box>;
}
