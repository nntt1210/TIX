import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";

const styles = (theme) => ({
  logo: {
    border: "1px solid transparent",
    padding: "15px",
    position: "relative",
    transition: "all 0.2s",
    opacity: 0.5,
    width: "unset",
    flexShrink: 0,
    [theme.breakpoints.up("sm")]: {
      padding: "20px",
    },
    "&:after": {
      content: "",
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: "calc(100% - 40px)",
      transform: "translateX(-50%)",
      borderBottom: "1px solid #fff",
      borderColor: "rgba(238, 238, 238, 0.878)",
    },
    "&.active": {
      opacity: 1,
    },
    "&:hover": {
      opacity: 1,
    },
    "& img": {
      width: "40px",
      [theme.breakpoints.up("xs")]: {
        width: "50px",
      },
    },
  },
  detail: {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
  },
  name: {
    paddingLeft: "10px",
    fontSize: "15px",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  arrow: {},
});

class LogoWrapper extends Component {
  render() {
    const { classes, src, alt, active, target, detail, name } = this.props;
    if (detail) {
      if (active) {
        return (
          <Box
            className={classes.logo + " active"}
            data-toggle="tab"
            data-target={target}
            role="tab"
            style={{ padding: 0 }}
          >
            <Box className={classes.detail}>
              <img src={src} alt={alt} />
              <Box component="span" className={classes.name}>
                {name}
              </Box>
              <Box component="span" className={classes.arrow}></Box>
            </Box>
          </Box>
        );
      } else
        return (
          <Box
            className={classes.logo}
            data-toggle="tab"
            data-target={target}
            role="tab"
            style={{ padding: 0 }}
          >
            <Box className={classes.detail}>
              <img src={src} alt={alt} />
              <Box component="span" className={classes.name}>
                {name}
              </Box>
              <Box component="span" className={classes.arrow}></Box>
            </Box>
          </Box>
        );
    } else {
      if (active) {
        return (
          <Box
            className={classes.logo + " active"}
            data-toggle="tab"
            data-target={target}
            role="tab"
          >
            <img src={src} alt={alt} />
          </Box>
        );
      } else
        return (
          <Box
            className={classes.logo}
            data-toggle="tab"
            data-target={target}
            role="tab"
          >
            <img src={src} alt={alt} />
          </Box>
        );
    }
  }
}

export default withStyles(styles, { withTheme: true })(LogoWrapper);
