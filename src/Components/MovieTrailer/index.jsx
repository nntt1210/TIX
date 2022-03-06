import { Box } from "@mui/material";
import React from "react";
import useStyles from "./style";

export default function MovieTrailer(props) {
  const styles = useStyles();
  const { trailer } = props;
  return (
    <Box
      id="movieTrailer"
      className="modal fade"
      aria-hidden="true"
      tabIndex={-1}
    >
      <Box className={`modal-dialog ${styles.dialog}`}>
        <Box className={`modal-content ${styles.content}`}>
          <Box className={`modal-body" ${styles.body}`}>
            {/* <button type="button" className="close" data-dismiss="modal">
                <img src="./img/close.png" alt />
              </button> */}
            <iframe
              id="iframe"
              title="trailer video"
              width="100%"
              height="85%"
              className={styles.video}
              src={trailer}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
