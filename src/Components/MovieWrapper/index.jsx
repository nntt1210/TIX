import React from "react";
import useStyles from "../MovieWrapper/style";

export default function MovieWrapper(props) {
  const styles = useStyles();
  const { hinhAnh } = props;
  return (
    <a
      className={styles.link}
      href="#"
      style={{ backgroundImage: `url(${hinhAnh})` }}
    ></a>
  );
}
