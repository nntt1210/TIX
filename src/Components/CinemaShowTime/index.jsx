import { Box } from "@material-ui/core";
import React from "react";
import ButtonTime from "../ButtonTime";

export default function CinemaShowTime(props) {
  const { id, list } = props;
  const renderButtonTime = (list) => {
    return list.map((item, index) => {
      let date = new Date(item.ngayChieuGioChieu);
      let hour = date.getHours();
      let min = date.getMinutes();
      return <ButtonTime key={index} hour={hour} min={min} />;
    });
  };
  return (
    <Box id={id} className="collapse">
      <Box className="pt-3 row">
        <Box className="col-12">2D Digital</Box>
        <Box className="col-12"> {renderButtonTime(list)}</Box>
      </Box>
    </Box>
  );
}
