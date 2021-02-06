import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";

const styles = (theme) => ({
  age: {
    display: "inline-block",
    textAlign: "center",
    minWidth: "30px",
    borderRadius: "4px",
    background: theme.color.orange.main,
    color: "#fff",
    fontSize: "14px",
    padding: "0 5px",
    marginRight: "8px",
    fontWeight: 600,
  },
});

class MovieAge extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.age} component="span">
        C13
      </Box>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MovieAge);
