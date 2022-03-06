import { Box } from "@mui/material";
import React from "react";
import useStyles from "../MovieAge/style";

export default function MovieAge() {
  const styles = useStyles();
  return (
    <Box className={styles.age} component="span">
      C13
    </Box>
  );
}
