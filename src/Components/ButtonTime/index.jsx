import { Box, Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./style";

export default function ButtonTime(props) {
  const { hour, min, disabled, maPhim, maLichChieu } = props;
  const styles = useStyles();

  const renderLink = () => {
    if (maPhim) return "/phim/" + maPhim;
    if (maLichChieu) return "/booking/" + maLichChieu;
  };

  if (disabled)
    return (
      <Button
        type="button"
        variant="contained"
        className={styles.root}
        disabled
      >
        <Box component="span" className="start">
          {hour}:{min}
        </Box>{" "}
        ~ {hour + 2}:{min}
      </Button>
    );
  else
    return (
      <NavLink to={renderLink()}>
        <Button
          // onClick={handleClick}
          type="button"
          variant="contained"
          className={styles.root}
        >
          <Box component="span" className="start">
            {hour}:{min}
          </Box>{" "}
          ~ {hour + 2}:{min}
        </Button>
      </NavLink>
    );
}
