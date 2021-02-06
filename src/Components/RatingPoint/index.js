import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
const styles = (theme) => ({
  percentage: {
    width: "126px",
    height: "126px",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    margin: "0 auto",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circleBorder: {
    width: "111px",
    height: "111px",
    borderRadius: "50%",
    border: "7.5px solid #3a3a3a",
    position: "absolute",
    top: 0,
    left: 0,
    boxSizing: "content-box",
  },
  pointGroup: {
    width: "126px",
    height: "126px",
    borderRadius: "50%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  point: {
    color: "#e9e9e9",
    fontSize: "3rem",
  },
  bar: {
    width: "111px",
    height: "111px",
    borderRadius: "50%",
    position: "absolute",
    top: 0,
    left: 0,
    border: "7.5px solid #44c020",
    boxSizing: "content-box",
    clipPath:
      "polygon(50% 0%, 100% 0px, 100% 100%, 0px 100%, 0px 0px, 0px 37.5676%, 50% 50%)",
  },
  star: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "10px 0 0",
  },
  rating: {
    marginTop: "10px",
    fontSize: "16px",
  },
});

class RatingPoint extends Component {
  render() {
    const { classes, danhGia } = this.props;
    return (
      <Box className="col-3 d-flex flex-column align-items-center mx-auto">
        <Box className={classes.percentage}>
          <Box className={classes.circleBorder}></Box>
          <Box className={classes.pointGroup}>
            <Box
              className={classes.bar}
              //   style={{
              //     clipPath:
              //       "polygon(50% 0%, 100% 0px, 100% 100%, 0px 100%, 0px 0px, 0px 37.5676%, 50% 50%)",
              //   }}
            ></Box>
          </Box>
          <span className={classes.point}>{danhGia}</span>
        </Box>
        <Box className={classes.star}>
          <img src="/img/star1.png" alt="Star" />
          <img src="/img/star1.png" alt="Star" />
          <img src="/img/star1.png" alt="Star" />
          <img src="/img/star1.png" alt="Star" />
          <img src="/img/star1.png" alt="Star" />
        </Box>
        <p className={classes.rating}>37 người đánh giá</p>
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RatingPoint);
