import { Box } from "@mui/material";
import React from "react";
import useStyles from "./style";

export default function Loader() {
  const styles = useStyles();
  return (
    // <Box className={styles.container}>
    <Box className={styles.loader}>
      <Box></Box>
      <Box></Box>
    </Box>
    // </Box>
  );
}
