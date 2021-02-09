import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function RatingPoint(props) {
  const { danhGia } = props;
  const styles = useStyles();
  return (
    <Box className="col-3 d-flex flex-column align-items-center mx-auto">
      <Box className={styles.percentage}>
        <Box className={styles.circleBorder}></Box>
        <Box className={styles.pointGroup}>
          <Box
            className={styles.bar}
            //   style={{
            //     clipPath:
            //       "polygon(50% 0%, 100% 0px, 100% 100%, 0px 100%, 0px 0px, 0px 37.5676%, 50% 50%)",
            //   }}
          ></Box>
        </Box>
        <span className={styles.point}>{danhGia}</span>
      </Box>
      <Box className={styles.star}>
        <img src="/img/star1.png" alt="Star" />
        <img src="/img/star1.png" alt="Star" />
        <img src="/img/star1.png" alt="Star" />
        <img src="/img/star1.png" alt="Star" />
        <img src="/img/star1.png" alt="Star" />
      </Box>
      <p className={styles.rating}>37 người đánh giá</p>
    </Box>
  );
}
