import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function LogoWrapper(props) {
  const { src, alt, active, target, detail, name } = props;
  // console.log(src, alt, active, target, detail, name);
  const styles = useStyles();
  if (detail) {
    if (active) {
      return (
        <Box
          className={styles.logo + " active"}
          data-toggle="tab"
          data-target={target}
          role="tab"
          style={{ padding: 0 }}
        >
          <Box className={styles.detail}>
            <img src={src} alt={alt} />
            <Box component="span" className={styles.name}>
              {name}
            </Box>
            {/* <Box component="span" className={styles.arrow}></Box> */}
          </Box>
        </Box>
      );
    } else
      return (
        <Box
          className={styles.logo}
          data-toggle="tab"
          data-target={target}
          role="tab"
          style={{ padding: 0 }}
        >
          <Box className={styles.detail}>
            <img src={src} alt={alt} />
            <Box component="span" className={styles.name}>
              {name}
            </Box>
            {/* <Box component="span" className={styles.arrow}></Box> */}
          </Box>
        </Box>
      );
  } else {
    if (active) {
      return (
        <Box
          className={styles.logo + " active"}
          data-toggle="tab"
          data-target={target}
          role="tab"
        >
          <Box className={styles.detail} style={{ padding: 0 }}>
            <img src={src} alt={alt} />
          </Box>
        </Box>
      );
    } else
      return (
        <Box
          className={styles.logo}
          data-toggle="tab"
          data-target={target}
          role="tab"
        >
          <Box className={styles.detail} style={{ padding: 0 }}>
            <img src={src} alt={alt} />
          </Box>
        </Box>
      );
  }
}
