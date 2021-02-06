import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import MovieWrapper from "./../MovieWrapper";
import ButtonOverlay from "./../ButtonOverlay";
import MovieAge from "./../MovieAge";
import ButtonBuy from "./../ButtonBuy";
import RatingPoint from "./../RatingPoint";
const styles = (theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  container: {
    margin: "0 auto",
    maxWidth: "940px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 30px)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(100% - 20px)",
    },
  },
  thumbnail: {
    marginTop: "25px",
    position: "relative",
    padding: "0 10px",
    [theme.breakpoints.up("md")]: {
      cursor: "pointer",
    },
  },
  imgThumbnail: {
    [theme.breakpoints.up("md")]: {
      position: "relative",
    },
  },
  title: {
    color: "#e9e9e9",
    fontSize: "20px",
    marginBottom: "0.25rem",
    fontWeight: 600,
  },
});

class MovieDetails extends Component {
  render() {
    const {
      classes,
      hinhAnh,
      trailer,
      ngayKhoiChieu,
      tenPhim,
      danhGia,
    } = this.props;
    return (
      <Box className={classes.root + " " + classes.container}>
        <Box className="row align-items-center">
          <Box className={classes.thumbnail + " " + "col-3"}>
            <Box className={classes.imgThumbnail}>
              <MovieWrapper hinhAnh={hinhAnh} />
              <ButtonOverlay trailer={trailer} />
              {/* <Box className="publish__date"></Box> */}
            </Box>
          </Box>
          <Box className="col-6">
            <Box className="row align-items-center">
              <Box className="col-9 col-md-12">
                <p>{new Date(ngayKhoiChieu).toLocaleDateString()}</p>
                <h6 className={classes.title}>
                  {/* <span className="showing__age">C13</span> */}
                  <MovieAge />
                  {tenPhim}
                </h6>
                {/* <p></p> */}
              </Box>
              {/* col-3 col-md-12 */}
              <Box className="col-3 col-md-12 text-center text-md-left">
                {/* <a href="#" className="btnBuyTicket">
                        Mua vé
                      </a> */}
                {/*max-width: 100px */}
                <ButtonBuy />
              </Box>
            </Box>
          </Box>
          <RatingPoint danhGia={danhGia} />
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MovieDetails);
