import { Box, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import useStyles from "./style";

export default function DayOfWeek(props) {
  const { active, day, date } = props;
  const styles = useStyles();
  if (active)
    return (
      <Box
        className={classNames(active, styles.item)}
        data-toggle="tab"
        role="tab"
        onClick={props.onClick}
      >
        <Typography
          component="p"
          className={classNames(styles.weekDay + " " + styles.paragraph)}
        >
          {day}
        </Typography>
        <Typography
          component="p"
          className={classNames(styles.date, styles.paragraph)}
        >
          {date}
        </Typography>
      </Box>
    );
  else
    return (
      <Box
        className={styles.item}
        data-toggle="tab"
        role="tab"
        onClick={props.onClick}
      >
        <Typography
          component="p"
          className={classNames(styles.weekDay + " " + styles.paragraph)}
        >
          {day}
        </Typography>
        <Typography
          component="p"
          className={classNames(styles.date, styles.paragraph)}
        >
          {date}
        </Typography>
      </Box>
    );
}
