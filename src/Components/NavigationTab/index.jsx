import { ListItem } from "@material-ui/core";
// import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./style";

export default function NavigationTab(props) {
  const { content, id } = props;
  const styles = useStyles();
  return (
    <ListItem className="nav-item" role="presentation">
      <NavLink
        to={`#${id}`}
        className={styles.link}
        data-toggle="tab"
        role="tab"
      >
        {content}
      </NavLink>
    </ListItem>
  );
}
