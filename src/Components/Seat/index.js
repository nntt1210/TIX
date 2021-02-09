import React, { Component } from "react";
import { IconButton, Typography } from "@material-ui/core";
import WeekendIcon from "@material-ui/icons/Weekend";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(0.5),
    "&:focus": {
      outline: "none",
    },
  },
  reserved: {
    color: theme.color.red.light,
  },
  pick: {
    color: theme.color.green.light,
  },
  normalSeat: {
    color: theme.color.blue.main,
  },
  vipSeat: {
    color: theme.color.yellow.light,
  },
  number: {
    position: "absolute",
    top: "43%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 10,
    // color: theme.palette.text.primary,
    fontWeight: 600,
  },
});

class Seat extends Component {
  handleClick = () => {};

  render() {
    const { classes, reserved, seatNumber, type } = this.props;
    if (type == "Thuong")
      return (
        <IconButton
          className={classes.root}
          disabled={reserved}
          onClick={() => this.handleClick()}
        >
          <WeekendIcon
            fontSize="large"
            className={
              reserved
                ? classes.reserved
                : pick
                ? classes.pick
                : classes.normalSeat
            }
          />
          <Typography className={classes.number}>{seatNumber}</Typography>
        </IconButton>
      );
    else
      return (
        <IconButton
          className={classes.root}
          disabled={reserved}
          onClick={() => this.handleClick()}
        >
          <WeekendIcon
            fontSize="large"
            className={
              reserved
                ? classes.reserved
                : pick
                ? classes.pick
                : classes.vipSeat
            }
          />
          <Typography className={classes.number}>{seatNumber}</Typography>
        </IconButton>
      );
  }
}

export default withStyles(styles, { withTheme: true })(Seat);
