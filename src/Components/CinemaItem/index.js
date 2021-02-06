import { Box, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import ImgWrapper from "../ImgWrapper";

const styles = (theme) => ({
  item: {
    width: "100%",
    border: "none",
    position: "relative",
    opacity: 0.7,
    transition: "all 0.5s",
    [theme.breakpoints.down("md")]: {
      opacity: 1,
    },
    "&.active": {
      opacity: 1,
    },
    "&:hover": {
      opacity: 1,
    },
  },
  detail: {
    padding: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    paddingLeft: "10px",
  },
  name: {
    display: "block",
    fontWeight: 700,
    "& .BHDStar": {
      color: theme.color.green.main,
    },
    "& .CineStar": {
      color: theme.color.pink.main,
    },
    "& .MegaGS": {
      color: theme.color.yellow.main,
    },
    "& .LotteCinima": {
      color: theme.color.brown.main,
    },
    "& .CGV": {
      color: theme.color.red.main,
    },
    "& .Galaxy": {
      color: theme.color.orange.light,
    },
  },
  address: {
    fontSize: "12px",
    color: "#949494",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

class CinemaItem extends Component {
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
    const { classes, target, id, name, address, active, system } = this.props;
    if (active) {
      return (
        <Box
          className={classes.item + " active"}
          data-toggle="tab"
          data-target={target}
          role="tab"
        >
          <Box className={classes.detail}>
            <ImgWrapper src={`./img/${system}_theater.jpg`} alt={system} />
            <Box className={classes.info}>
              <Box className={classes.name} component="span">
                <Box className={system} component="span">
                  {this.renderCinemaName(name)}-{" "}
                  {this.renderCinemaAddress(name)}
                </Box>
              </Box>
              <Box className={classes.address} component="span">
                {address}
              </Box>
            </Box>
          </Box>
        </Box>
      );
    } else
      return (
        <Box
          className={classes.item}
          data-toggle="tab"
          data-target={target}
          role="tab"
        >
          <Box className={classes.detail}>
            <ImgWrapper src={`./img/${system}_theater.jpg`} alt={system} />
            <Box className={classes.info}>
              <Box className={classes.name} component="span">
                <Box className={system} component="span">
                  {this.renderCinemaName(name)}-{" "}
                  {this.renderCinemaAddress(name)}
                </Box>
              </Box>
              <Box className={classes.address} component="span">
                {address}
              </Box>
            </Box>
          </Box>
        </Box>
      );
  }
}

export default withStyles(styles, { withTheme: true })(CinemaItem);
