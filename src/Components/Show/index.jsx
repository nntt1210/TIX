import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Collapse, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useStyles from "./style";

const ShowTime = ({ info, showList, hasOpenIcon, opened }) => {
  const styles = useStyles();
  const [open, setOpen] = useState(opened);

  return (
    <Box className={styles.root}>
      <Box className={styles.desc} onClick={() => setOpen(!open)}>
        <Box className={styles.info}>{info}</Box>
        {hasOpenIcon && (
          <Box className={styles.openIcon}>
            {open ? <NavigateNextIcon /> : <ExpandMoreIcon />}
          </Box>
        )}
      </Box>

      {showList && (
        <Collapse in={open} timeout="auto">
          {showList}
        </Collapse>
      )}
    </Box>
  );
};

ShowTime.propTypes = {
  info: PropTypes.element,
  showList: PropTypes.element,
  hasOpenIcon: PropTypes.bool,
  opened: PropTypes.bool,
  disableShowList: PropTypes.bool,
};

ShowTime.defaultProps = {
  info: <Typography>No info</Typography>,
};

export default ShowTime;
