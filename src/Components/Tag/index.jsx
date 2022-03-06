import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import useStyles from "./style";

const Tag = (props) => {
  const { title, iconElement } = props;
  const styles = useStyles(props);

  return (
    <Box className={styles.root}>
      <IconButton className={styles.icon} size="large">
        {iconElement}
        <Typography className={styles.title} variant="subtitle1">
          {!props.noTitle && title}
        </Typography>
      </IconButton>
    </Box>
  );
};

Tag.propTypes = {
  title: PropTypes.string,
  iconElement: PropTypes.element,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  noTitle: PropTypes.bool,
  noPointer: PropTypes.bool,
};

Tag.defaultProps = {
  title: "No title",
  iconElement: <SentimentVeryDissatisfiedIcon />,
  noTitle: false,
  noPointer: false,
};

export default Tag;
