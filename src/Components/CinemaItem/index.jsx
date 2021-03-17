import { Box } from "@material-ui/core";
import React from "react";
import {
  renderCinemaAddress,
  renderCinemaName,
} from "../../Helpers/cinema-manager";
import ImgWrapper from "../ImgWrapper";
import useStyles from "./style";

export default function CinemaItem(props) {
  const { target, name, address, active, system, collapse } = props;
  const styles = useStyles();
  if (active) {
    return (
      <Box
        className={styles.item + " active"}
        data-toggle="tab"
        data-target={target}
        role="tab"
      >
        <Box className={styles.detail}>
          <ImgWrapper src={`./img/${system}_theater.jpg`} alt={system} />
          <Box className={styles.info}>
            <Box className={styles.name} component="span">
              <Box className={system} component="span">
                {renderCinemaName(name)}- {renderCinemaAddress(name)}
              </Box>
            </Box>
            <Box className={styles.address} component="span">
              {address}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  } else {
    if (collapse)
      return (
        <Box
          className={styles.item}
          data-toggle="tab"
          data-target={target}
          role="tab"
        >
          <Box className={styles.detail}>
            <ImgWrapper src={`./img/${system}_theater.jpg`} alt={system} />
            <Box className={styles.info}>
              <Box className={styles.name} component="span">
                <Box className={system} component="span">
                  {renderCinemaName(name)}- {renderCinemaAddress(name)}
                </Box>
              </Box>
              <Box className={styles.address} component="span">
                {address}
              </Box>
            </Box>
          </Box>
        </Box>
      );
    else
      return (
        <Box
          className={styles.item}
          data-toggle="tab"
          data-target={target}
          role="tab"
        >
          <Box
            className="collapsed"
            data-toggle="collapse"
            data-target={target}
          >
            <Box className={styles.detail}>
              <ImgWrapper src={`./img/${system}_theater.jpg`} alt={system} />
              <Box className={styles.info}>
                <Box className={styles.name} component="span">
                  <Box className={system} component="span">
                    {renderCinemaName(name)}- {renderCinemaAddress(name)}
                  </Box>
                </Box>
                <Box className={styles.address} component="span">
                  {address}
                </Box>
              </Box>
            </Box>
          </Box>
          {/* <div className="movies-cinema collapse" id={rap.maCumRap}>
              {renderDetailCinemaMovies(rap.danhSachPhim, rap.maCumRap)}
            </div> */}
        </Box>
      );
  }
}
