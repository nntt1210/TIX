import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./style";

import ProfileCard from "./../ProfileCard";

const PersonalInfo = (props) => {
  const styles = useStyles();
  const account = useSelector((state) => state.userLoginReducer.info);

  return (
    <Box>
      <Box className={styles.content}>
        <Typography className={styles.title} component="h1" variant="h5">
          Thông tin cá nhân
        </Typography>

        <ProfileCard className={styles.container} account={account} />
      </Box>
    </Box>
  );
};

export default PersonalInfo;
