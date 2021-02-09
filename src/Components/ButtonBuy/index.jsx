import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./style";

export default function ButtonBuy(props) {
  const { buy } = props;
  const styles = useStyles();

  return (
    <NavLink to={"/phim/" + buy} className={styles.root}>
      Mua vé
    </NavLink>
  );
}
