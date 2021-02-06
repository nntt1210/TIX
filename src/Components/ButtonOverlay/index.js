import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import ButtonBuy from "../ButtonBuy";
import ButtonTrailer from "../ButtonTrailer";

const styles = (theme) => ({
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    "&:hover": {
      transition: "all 0.2s",
      opacity: 0.7,
    },

    // display: "none",
  },
});

class ButtonOverlay extends Component {
  render() {
    const { classes, trailer, buy } = this.props;
    // console.log(trailer, buy);
    if (trailer != null)
      return (
        <Box className={classes.overlay + " " + "overlay"}>
          <ButtonTrailer trailer={trailer} />
        </Box>
      );
    else if (buy != null)
      return (
        <Box
          className={classes.overlay + " " + "overlay"}
          width="100%"
          height="100%"
        >
          <ButtonBuy buy={buy} />
        </Box>
      );
    else return <Box id="overlay" className={classes.overlay}></Box>;
  }
}

export default withStyles(styles, { withTheme: true })(ButtonOverlay);
