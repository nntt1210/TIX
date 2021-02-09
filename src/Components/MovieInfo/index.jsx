import { Box } from "@material-ui/core";
import React from "react";
import useContainerStyles from "../MyContainer/style";
import useStyles from "./style";

export default function MovieInfo(props) {
  const styles = useStyles();
  const containerStyles = useContainerStyles();
  const { ngayKhoiChieu, moTa } = props;
  return (
    <Box className={styles.root}>
      <Box className={containerStyles + " " + "row"}>
        <Box className="col-12 col-md-6">
          <Box className={styles.row}>
            <Box className={styles.title}>Ngày công chiếu</Box>
            <Box className={styles.content}>
              {new Date(ngayKhoiChieu).toLocaleDateString()}
            </Box>
          </Box>
          <Box className={styles.row}>
            <Box className={styles.title}>Đạo diễn</Box>
            <Box className={styles.content}>Lorem range, Ipsum dolor</Box>
          </Box>
          <Box className={styles.row}>
            <Box className={styles.title}>Diễn viên</Box>
            <Box className={styles.content}>Lorem range, Ipsum dolor</Box>
          </Box>
          <Box className={styles.row}>
            <Box className={styles.title}>Thể loại</Box>
            <Box className={styles.content}>Lorem range, Ipsum dolor</Box>
          </Box>
          <Box className={styles.row}>
            <Box className={styles.title}>Định dạng</Box>
            <Box className={styles.content}>2D/Digital</Box>
          </Box>
          <Box className={styles.row}>
            <Box className={styles.title}>Quốc Gia SX</Box>
            <Box className={styles.content}>Việt Nam</Box>
          </Box>
        </Box>
        <Box className="col-12 col-md-6">
          <Box className={styles.row}>
            <Box className={styles.title}>Nội dung</Box>
          </Box>
          <Box className={styles.row}>
            <p className={styles.description}>{moTa}</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
