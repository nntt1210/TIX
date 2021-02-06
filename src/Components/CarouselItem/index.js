import { Box } from "@material-ui/core";
import React, { Component } from "react";
import ButtonOverlay from "../ButtonOverlay";

export default class CarouselItem extends Component {
  render() {
    const { trailer, hinhAnh } = this.props;
    return (
      <Box style={{ position: "relative" }}>
        <img className="d-block w-100" src={hinhAnh} alt="trailer" />
        <ButtonOverlay trailer={trailer} />
      </Box>
    );
  }
}
