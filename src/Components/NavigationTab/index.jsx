import React from "react";
import useStyles from "./style";

export default function NavigationTab(props) {
  const { content, active, id } = props;
  const styles = useStyles();
  if (active)
    return (
      <li className="nav-item" role="presentation">
        <a
          className={styles.link + " " + "active"}
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
          className={styles.link}
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
