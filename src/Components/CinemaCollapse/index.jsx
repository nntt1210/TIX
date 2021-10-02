import { Box } from "@material-ui/core";
import classNames from "classnames";
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
            <Box component="span" className={styles.branch}>
              <Box
                component="span"
                className={classNames(styles.name + " " + maHeThongRap)}
              >
                {renderCinemaName(tenCumRap)}{" "}
              </Box>
              {"- "} {renderCinemaAddress(tenCumRap)}
            </Box>
          </Box>
        </Box>
      </Box>
      <CinemaShowTime id={maCumRap} list={list} />
    </Box>
  );
}
