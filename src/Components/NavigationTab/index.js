import { Box, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";

const styles = (theme) => ({
  link: {
    border: "none",
    borderRadius: 0,
    color: "#e9e9e9",
    fontSize: "24px",
    fontWeight: 500,
    transform: "scale(0.83333)",
    transition: "all 0.2s",
    display: "block",
    padding: ".5rem 1rem",
    "&.active": {
      color: "#fa5238",
      fontSize: "24px",
      transform: "scale(1)",
      background: "transparent",
    },
    "&:hover": {
      color: "#fa5238",
      transform: "scale(1)",
    },
  },
});

class NavigationTab extends Component {
  render() {
    const { classes, hour, content, active, id } = this.props;
    if (active)
      return (
        <li className="nav-item" role="presentation">
          <a
            className={classes.link + " " + "active"}
            data-toggle="tab"
            href={"#" + `${id}`}
            role="tab"
            // aria-selected="true"
          >
            {content}
          </a>
        </li>
      );
    else
      return (
        <li className="nav-item" role="presentation">
          <a
            className={classes.link}
            data-toggle="tab"
            href={"#" + `${id}`}
            role="tab"
            // aria-selected="true"
          >
            {content}
          </a>
        </li>
      );
  }
}

export default withStyles(styles, { withTheme: true })(NavigationTab);
