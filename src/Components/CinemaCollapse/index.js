import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import CinemaShowTime from "../CinemaShowTime";
import ImgWrapper from "./../ImgWrapper";
const styles = (theme) => ({
  root: {
    position: "relative",
    width: "100%",
    padding: "20px",
    border: "none",
    opacity: 1,
    transition: "all 0.5s",
  },
  mainCollapse: {
    display: "flex",
    position: "relative",
    cursor: "pointer",
    transition: "all .5s",
    "&::after": {
      content: '"\f078"',
      fontFamily: "Font Awesome 5 Free",
      fontWeight: "900",
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
      width: "20px",
      height: "20px",
    },
  },
  item: {
    padding: 0,
    cursor: "pointer",
    display: "flex",
  },
  wrapInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    paddingLeft: "10px",
  },
  branch: {
    display: "block",
    fontWeight: 700,
  },
  name: {
    "&.BHDStar": {
      color: [theme.color.green.main],
    },
    "&.CGV": {
      color: [theme.color.red.main],
    },
    "&.CineStar": {
      color: [theme.color.pink.main],
    },
    "&.Galaxy": {
      color: [theme.color.orange.light],
    },
    "&.LotteCinima": {
      color: [theme.color.brown.main],
    },
    "&.MegaGS": {
      color: [theme.color.yellow.main],
    },
  },
});

class CinemaCollapse extends Component {
  renderCinemaName = (cinema) => {
    let index = cinema.indexOf("-");
    cinema = cinema.substr(0, index);
    return cinema;
  };

  renderCinemaAddress = (cinema) => {
    let index = cinema.indexOf("-");
    cinema = cinema.substr(index + 2);
    return cinema;
  };

  render() {
    const { classes, maHeThongRap, maCumRap, tenCumRap, list } = this.props;
    return (
      <Box className={classes.root}>
        <Box
          className={classes.mainCollapse}
          data-toggle="collapse"
          data-target={"#" + `${maCumRap}`}
        >
          <Box className={classes.item}>
            <ImgWrapper
              src={"/img/" + `${maHeThongRap}` + "_theater.jpg"}
              alt={maHeThongRap}
            />
            <Box className={classes.wrapInfo}>
              <span className={classes.branch}>
                <span className={classes.name + " " + maHeThongRap}>
                  {this.renderCinemaName(tenCumRap)}{" "}
                </span>
                {"- "} {this.renderCinemaAddress(tenCumRap)}
              </span>
            </Box>
          </Box>
        </Box>
        <CinemaShowTime id={maCumRap} list={list} />
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CinemaCollapse);
