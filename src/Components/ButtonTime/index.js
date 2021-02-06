import { Box, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";

const styles = (theme) => ({
  root: {
    display: "block",
    float: "left",
    margin: "0 10px 10px 0",
    background: "hsla(0, 0%, 96.5%, 0.6)",
    border: `1px solid ${theme.color.white.light}`,
    borderRadius: "7px",
    color: `${theme.color.gray.light}`,
    fontSize: "14px",
    fontWeight: 700,
    minWidth: "20%",
    transition: "all 0.5s",
    "& .start": {
      color: theme.color.green.dark,
      fontSize: "18px",
    },
  },
});

class ButtonTime extends Component {
  render() {
    const { classes, hour, min } = this.props;
    return (
      <Button variant="contained" className={classes.root}>
        <Box component="span" className="start">
          {hour}:{min}
        </Box>{" "}
        ~ {hour + 2}:{min}
      </Button>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ButtonTime);
