import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";

const styles = (theme) => ({
  root: {
    padding: 0,
    // display: none;
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
  dialog: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "600px",
      minHeight: "calc(100% - 3.5rem)",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "800px",
      margin: "1.75rem auto",
      minHeight: "calc(100% - 1rem)",
    },
  },
  content: {
    backgroundColor: "#000",
  },
  body: {
    padding: "50% 0 35px",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    maxWidth: "100%",
    height: "100%",
  },
});

class MovieTrailer extends Component {
  render() {
    const { classes, trailer } = this.props;
    return (
      <Box
        id="movieTrailer"
        className="modal fade"
        aria-hidden="true"
        tabIndex={-1}
      >
        <Box className={"modal-dialog" + " " + classes.dialog}>
          <Box className={"modal-content" + " " + classes.content}>
            <Box className={"modal-body" + " " + classes.body}>
              {/* <button type="button" className="close" data-dismiss="modal">
                <img src="./img/close.png" alt />
              </button> */}
              <iframe
                id="iframe"
                width="100%"
                height="85%"
                className={classes.video}
                src={trailer}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MovieTrailer);
