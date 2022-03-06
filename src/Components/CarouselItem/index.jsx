import { Avatar, Box } from "@mui/material";
import React from "react";
import ButtonOverlay from "../ButtonOverlay";
import useStyles from "./style";

export default function CarouselItem(props) {
  const { hinhAnh, trailer } = props;

  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Avatar
        variant="square"
        className={styles.trailerImg}
        src={hinhAnh}
        alt="trailer"
      />
      <ButtonOverlay trailer={trailer} />
    </Box>
  );
}
