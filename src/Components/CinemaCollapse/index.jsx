import { Box } from "@material-ui/core";
import React from "react";
import {
  renderCinemaAddress,
  renderCinemaName,
} from "../../Helpers/cinema-manager";
import CinemaShowTime from "../CinemaShowTime";
import ImgWrapper from "../ImgWrapper";
import useStyles from "./style";

export default function CinemaCollapse(props) {
  const { maHeThongRap, maCumRap, tenCumRap, list } = props;
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Box
        className={styles.mainCollapse}
        data-toggle="collapse"
        data-target={`#${maCumRap}`}
      >
        <Box className={styles.item}>
          <ImgWrapper
            src={`/img/${maHeThongRap}_theater.jpg`}
            alt={maHeThongRap}
          />
          <Box className={styles.wrapInfo}>
            <span className={styles.branch}>
              <span className={`${styles.name} ${maHeThongRap}`}>
                {renderCinemaName(tenCumRap)}{" "}
              </span>
              {"- "} {renderCinemaAddress(tenCumRap)}
            </span>
          </Box>
        </Box>
      </Box>
      <CinemaShowTime id={maCumRap} list={list} />
    </Box>
  );
}
