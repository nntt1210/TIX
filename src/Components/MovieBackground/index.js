import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
const styles = (theme) => ({
  root: {
    position: "relative",
  },
  background: {
    [theme.breakpoints.up("md")]: {
      height: "80vh",
      // webkitFilter: "blur(8px)",
      filter: "blur(8px)",
      transform: "scaleY(0.91)",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center center",
    },
  },
  overlay: {
    background: "linear-gradient(0deg, #0a2029, transparent)",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    pointerEvents: "none",
  },
});

class MovieBackground extends Component {
  render() {
    const { classes, hinhAnh, alt } = this.props;
    return (
      <Box className={classes.root}>
        <Box>
          <img className={classes.background} src={hinhAnh} alt={alt} />
        </Box>
        <Box className={classes.overlay}></Box>
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MovieBackground);
