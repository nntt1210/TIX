import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const styles = (theme) => ({
  root: {
    display: "none",
    height: "100%",
    width: "100%",
    background: "#f44a1c",
    background: "linear-gradient(270deg, #fb4226, #ce3017)",
    padding: 0,
    fontSize: "18px",
    color: "#fff",
    textDecoration: "none",

    "&:hover": {
      background: "#fb4226",
      transition: "all 0.2s",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

class ButtonBuy extends Component {
  render() {
    const { classes, buy } = this.props;
    return (
      <NavLink to={"/phim/" + buy} className={classes.root}>
        Mua vé
      </NavLink>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ButtonBuy);
