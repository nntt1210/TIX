import { Box, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function ButtonTime(props) {
  const { hour, min, disabled } = props;
  const styles = useStyles();
  if (disabled)
    return (
      <Button variant="contained" className={styles.root} disabled>
        <Box component="span" className="start">
          {hour}:{min}
        </Box>{" "}
        ~ {hour + 2}:{min}
      </Button>
    );
  else
    return (
      <Button variant="contained" className={styles.root}>
        <Box component="span" className="start">
          {hour}:{min}
        </Box>{" "}
        ~ {hour + 2}:{min}
      </Button>
    );
}
