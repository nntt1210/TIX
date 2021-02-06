import { Box, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import ButtonBuy from "../ButtonBuy";
import ButtonOverlay from "../ButtonOverlay";
import ButtonTrailer from "../ButtonTrailer";
import MovieAge from "../MovieAge";
import MovieWrapper from "../MovieWrapper";

const styles = (theme) => ({
  item: {
    padding: "20px 15px",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      "& .overlay": {
        opacity: 1,
      },
      // "& .img::after": {
      //   opacity: 1,
      // },
      // opacity: 0.5
    },
    img: {
      position: "relative",
      "&:hover": {
        "& a:after": {
          opacity: 1,
        },
      },
    },
  },

  title: {
    position: "relative",
    width: "100%",
    marginTop: "15px",
    color: "#333",
    fontSize: "16px",
    textTransform: "capitalize",
    fontWeight: 600,
    textOverflow: "ellipsis",
    overflow: "hidden",
    // -webkit-line-clamp: 2,
    // -webkit-box-orient: vertical;
    // display: none;
    height: "40px",
    lineHeight: "20px",
  },
  rate: {
    position: "absolute",
    bottom: "12px",
    right: "12px",
    background: "rgba(12, 27, 54, 0.8)",
    borderRadius: "4px",
    border: "1px solid #1f2e46",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 400,
    pointerEvents: "none",
    // transition: "all 0.2s",

    width: "55px",
    height: "40px",
    top: "30px",
    right: "25px",
    bottom: "unset",
    fontWeight: 600,
  },
  star: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "8px",
    },
  },
  container: {
    display: "none",
    width: "100%",
    height: "40px",
    background: "linear-gradient(270deg, #fb4226, #ce3017)",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
});

class MovieItem extends Component {
  render() {
    const { classes, hinhAnh, tenPhim, danhGia, trailer, maPhim } = this.props;
    console.log(maPhim);
    return (
      <Box className={classes.item + " col-6 col-sm-4 col-md-3"}>
        <Box className={classes.img}>
          <MovieWrapper hinhAnh={hinhAnh} />
          <ButtonOverlay trailer={trailer}>
            {/* <ButtonTrailer /> */}
          </ButtonOverlay>
        </Box>
        <Box className={classes.title}>
          <MovieAge />
          {tenPhim}
          <ButtonOverlay className={classes.container} buy={maPhim}>
            {/* <ButtonBuy /> */}
          </ButtonOverlay>
        </Box>
        <Box className={classes.rate}>
          <Box component="span">{danhGia}</Box>
          <Box className={classes.star}>
            <img src="img/star1.png" />
            <img src="img/star1.png" />
            <img src="img/star1.png" />
            <img src="img/star1.png" />
            <img src="img/star1.png" />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MovieItem);
