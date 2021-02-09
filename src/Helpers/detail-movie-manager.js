import { Box } from "@material-ui/core";
import CinemaCollapse from "../Components/CinemaCollapse";
import LogoWrapper from "../Components/LogoWrapper";

export const renderCinemaTabs = (listCinema) => {
  return listCinema.map((item, index) => {
    if (index == 0) {
      return (
        <LogoWrapper
          src={item.logo}
          alt={item.maHeThongRap}
          target={"#" + item.maHeThongRap}
          detail={true}
          name={item.tenHeThongRap}
          active={true}
        />
      );
    } else {
      return (
        <LogoWrapper
          src={item.logo}
          alt={item.maHeThongRap}
          target={"#" + item.maHeThongRap}
          detail={true}
          name={item.tenHeThongRap}
        />
      );
    }
  });
};

// resetActiveDay = () => {
//   let listDay = document.getElementsByClassName("detail__listOfDay--item");

// }
export const renderCinemaContent = (
  listCinema,
  detailMovie,
  listShowTime,
  currentDate
) => {
  return listCinema.map((item, index) => {
    if (index == 0) {
      return (
        <Box className="tab-pane fade active show" id={item.maHeThongRap}>
          {renderShowList(
            item.maHeThongRap,
            detailMovie,
            listShowTime,
            currentDate
          )}
        </Box>
      );
    } else {
      return (
        <Box className="tab-pane fade" id={item.maHeThongRap}>
          {renderShowList(
            item.maHeThongRap,
            detailMovie,
            listShowTime,
            currentDate
          )}
        </Box>
      );
    }
  });
};

export const renderShowList = (
  maHeThongRap,
  detailMovie,
  listShowTime,
  currentDate
) => {
  let list = detailMovie.lichChieu.filter(
    (item) => item.thongTinRap.maHeThongRap === maHeThongRap
  );
  list = list.filter(
    (item) =>
      new Date(item.ngayChieuGioChieu).getDate() === parseInt(currentDate) &&
      new Date(item.ngayChieuGioChieu).getMonth() + 1 === 1
  );
  // console.log(list);
  let newLST = listShowTime.filter(
    (item) => item.maHeThongRap === maHeThongRap
  );

  // // console.log(lst);
  let lstCumRap = newLST[0].lstCumRap;
  for (let i = 0; i < lstCumRap.length; i++) {
    let newList = list.filter(
      (item) => item.thongTinRap.maCumRap === lstCumRap[i].maCumRap
    );
    // console.log(newList);
    if (newList.length > 0) {
      return (
        <CinemaCollapse
          maHeThongRap={maHeThongRap}
          maCumRap={newList[0].thongTinRap.maCumRap}
          tenCumRap={newList[0].thongTinRap.tenCumRap}
          list={newList}
        />
      );
    } else
      return (
        <Box className="alert alert-danger">Ngày này không có lịch chiếu !</Box>
      );
  }
};
