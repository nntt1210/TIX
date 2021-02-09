import { Box } from "@material-ui/core";
import React from "react";
import ButtonOverlay from "../ButtonOverlay";

export default function CarouselItem(props) {
  const { hinhAnh, trailer } = props;

  return (
    <Box style={{ position: "relative" }}>
      <img className="d-block w-100" src={hinhAnh} alt="trailer" />
      <ButtonOverlay trailer={trailer} />
    </Box>
  );
}
