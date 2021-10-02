import { Box } from "@material-ui/core";
import CinemaCollapse from "../Components/CinemaCollapse";
import LogoWrapper from "../Components/LogoWrapper";
import LogoWrapperCollapse from "../Components/LogoWrapperCollapse";

export const renderCinemaTabs = (listCinema) => {
  return listCinema.map((item, index) => {
    if (index === 0) {
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

export const renderCollapseCinemaTabs = (
  listCinema,
  detailMovie,
  listShowTime,
  currentDate
) => {
  return listCinema.map((item, index) => {
    return (
      <LogoWrapperCollapse
        key={index}
        src={item.logo}
        alt={item.maHeThongRap}
        target={item.maHeThongRap}
        movie={detailMovie}
        listShowTime={listShowTime}
        // detail={true}
        name={item.tenHeThongRap}
        currentDate={currentDate}
        // active={true}
      />
    );
  });
};

// resetActiveDay = () => {
//   let listDay = document.getElementsByClassName("detail__listOfDay--item");

// }

// export const renderCinemaCollapseContent = (listCinema, detailMovie, listShowTime, currentDate) => {

// }

export const renderCinemaContent = (
  listCinema,
  detailMovie,
  listShowTime,
  currentDate
) => {
  return listCinema.map((item, index) => {
    if (index === 0) {
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
  listShowTime = [],
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
  // console.log("list", list);
  let index = listShowTime.findIndex(
    (item) => item.maHeThongRap === maHeThongRap
  );
  console.log(index);
  let newLST = listShowTime.filter(
    (item) => item.maHeThongRap === maHeThongRap
  );
  console.log("newLST", newLST);
  let lstCumRap = newLST[0].lstCumRap;
  // // console.log(lst);
  // let lstCumRap = [];
  // if (newLST.length > 0) lstCumRap = newLST[0].lstCumRap;
  if (list.length === 0)
    return (
      <Box className="alert alert-danger">Cụm rạp này không có lịch chiếu</Box>
    );
  else {
    for (let i = 0; i < lstCumRap.length; i++) {
      // console.log(lstCumRap);
      console.log("list", list);
      // console.log(list[0].thongTinRap.maCumRap, lstCumRap[i].maCumRap);
      let newList = list.filter(
        (item) => item.thongTinRap.maCumRap === lstCumRap[i].maCumRap
      );
      console.log(newList);
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
          <Box className="alert alert-danger">
            Ngày này không có lịch chiếu !
          </Box>
        );
    }
  }
};
