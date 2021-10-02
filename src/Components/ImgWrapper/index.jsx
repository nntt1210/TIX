import { Avatar } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function ImgWrapper(props) {
  const { src, alt } = props;
  const styles = useStyles();
  return <Avatar variant="square" className={styles.img} src={src} alt={alt} />;
}
