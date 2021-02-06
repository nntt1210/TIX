import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
const styles = (theme) => ({
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    alignItems: "center",
    minWidth: "70px",
    cursor: "pointer",
    opacity: 0.7,
    transition: "all 0.5s",
    "&.active": {
      color: "#fb4226",
      fontWeight: 700,
      opacity: 1,
      transform: "scale(1.1)",
    },
    "&:hover": {
      color: "#fb4226",
      fontWeight: 700,
      opacity: 1,
      transform: "scale(1.1)",
    },
  },
  paragraph: {
    margin: 0,
    fontSize: "14px",
    textAlign: "center",
    pointerEvents: "none",
  },
  weekDay: {
    fontWeight: 700,
  },
  date: {
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
    },
    fontSize: "18px",
  },
});

class DayOfWeek extends Component {
  render() {
    const { classes, active, day, date } = this.props;
    if (active)
      return (
        <Box
          className={"active" + " " + `${classes.item}`}
          data-toggle="tab"
          role="tab"
          onClick={this.props.onClick}
        >
          <p className={classes.weekDay + " " + classes.paragraph}>{day}</p>
          <p className={classes.date + " " + classes.paragraph}>{date}</p>
        </Box>
      );
    else
      return (
        <Box
          className={classes.item}
          data-toggle="tab"
          role="tab"
          onClick={this.props.onClick}
        >
          <p className={classes.weekDay + " " + classes.paragraph}>{day}</p>
          <p className={classes.date + " " + classes.paragraph}>{date}</p>
        </Box>
      );
  }
}

export default withStyles(styles, { withTheme: true })(DayOfWeek);
