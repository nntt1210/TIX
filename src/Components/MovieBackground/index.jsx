import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function MovieBackground(props) {
  const styles = useStyles();
  const { hinhAnh, alt } = props;
  return (
    <Box className={styles.root}>
      <Box>
        <img className={styles.background} src={hinhAnh} alt={alt} />
      </Box>
      <Box className={styles.overlay}></Box>
    </Box>
  );
}
