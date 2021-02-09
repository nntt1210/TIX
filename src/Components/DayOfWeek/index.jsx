import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function DayOfWeek(props) {
  const { active, day, date } = props;
  const styles = useStyles();
  if (active)
    return (
      <Box
        className={"active" + " " + `${styles.item}`}
        data-toggle="tab"
        role="tab"
        onClick={props.onClick}
      >
        <p className={styles.weekDay + " " + styles.paragraph}>{day}</p>
        <p className={styles.date + " " + styles.paragraph}>{date}</p>
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
        <p className={styles.weekDay + " " + styles.paragraph}>{day}</p>
        <p className={styles.date + " " + styles.paragraph}>{date}</p>
      </Box>
    );
}
