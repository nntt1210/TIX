import { ListItem } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./style";

export default function NavigationTab(props) {
  const { content, active, id } = props;
  const styles = useStyles();
  if (active)
    return (
      <ListItem className="nav-item" role="presentation">
        <NavLink
          to={`#${id}`}
          className={classNames(styles.link, "active")}
          data-toggle="tab"
          role="tab"
          // aria-selected="true"
        >
          {content}
        </NavLink>
      </ListItem>
    );
  else
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
