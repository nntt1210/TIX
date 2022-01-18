import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "../MovieWrapper/style";

export default function MovieWrapper(props) {
  const styles = useStyles();
  const { hinhAnh, maPhim } = props;
  return (
    <NavLink
      className={styles.link}
      to={`/phim/${maPhim}`}
      style={{
        backgroundImage: hinhAnh
          ? `url(${hinhAnh})`
          : `url(/img/default-movie.jpg)`,
      }}
    >
      {/* <i class="fa fa-phone" aria-hidden="true" style={{ display: "none" }}></i> */}
    </NavLink>
  );
}
