import React from "react";
import useStyles from "./style";

export default function ImgWrapper(props) {
  const { src, alt } = props;
  const styles = useStyles();
  return <img className={styles.img} src={src} alt={alt} />;
}
