import { Box } from "@material-ui/core";
import React from "react";
import ButtonTime from "../ButtonTime";

export default function CinemaShowTime(props) {
  const { id, list } = props;
  const renderButtonTime = (list) => {
    return list.map((item, index) => {
      let flag = true;
      let date = new Date(item.ngayChieuGioChieu);
      let hour = date.getHours();
      let min = date.getMinutes();
      let currentDate = new Date();
      let currentHour = currentDate.getHours();
      let currentMin = currentDate.getMinutes();
      if (currentHour > hour || (currentHour === hour && currentMin > min))
        flag = false;
      if (flag)
        return (
          <ButtonTime
            key={index}
            hour={hour}
            min={min}
            maLichChieu={item.maLichChieu}
            disabled={false}
          />
        );
      else
        return (
          <ButtonTime
            key={index}
            hour={hour}
            min={min}
            maLichChieu={item.maLichChieu}
            disabled={true}
          />
        );
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
