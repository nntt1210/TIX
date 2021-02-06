import { Box } from "@material-ui/core";
import React, { Component } from "react";
import ButtonTime from "./../ButtonTime";

export default class CinemaShowTime extends Component {
  renderButtonTime = (list) => {
    return list.map((item, index) => {
      let date = new Date(item.ngayChieuGioChieu);
      let hour = date.getHours();
      let min = date.getMinutes();
      return <ButtonTime key={index} hour={hour} min={min} />;
    });
  };

  render() {
    const { id, list } = this.props;
    return (
      <Box id={id} className="collapse">
        <Box className="pt-3 row">
          <Box className="col-12">2D Digital</Box>
          <Box className="col-12"> {this.renderButtonTime(list)}</Box>
        </Box>
      </Box>
    );
  }
}

// export default withStyles(styles, { withTheme: true })(CinemaShowTime);
