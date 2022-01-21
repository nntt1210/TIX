import { Box, Typography, Link } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

export default function PageNotFound(props) {
  const styles = useStyles();
  return (
    // https://codepen.io/Navedkhan012/pen/vrWQMY
    <Box className={styles.root}>
      <Box className="container">
        <Box className="row">
          <Box className="col-sm-12">
            <Box className="col-sm-10 mx-auto text-center">
              <Box className={styles.background}>
                <Typography
                  component="h1"
                  className="text-center font-weight-bold"
                >
                  Page not found
                </Typography>
              </Box>
              <Box>
                <Typography component="h3" className="h2 font-weight-bold">
                  Well this shouldn't happen
                </Typography>
                <Typography component="p" className="font-weight-bold">
                  Have you tried turning it off and on again?
                </Typography>
                <Link href="/" className={styles.goHome}>
                  Go to Home
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
