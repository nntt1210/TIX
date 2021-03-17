import { flatArray } from "./array-manager";

export const getMovieId = (data, movieName) => {
  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].tenPhim === movieName) {
        return data[i].maPhim;
      }
    }
  }
  return "";
};

export const getCinemaSystemId = (data, systemName) => {
  if (data) {
    return data
      .filter((cinemaSystem) => cinemaSystem.tenHeThongRap === systemName)
      .map((cinemaSystem) => cinemaSystem.maHeThongRap);
  }
  return "";
};

export const getCinemaNumbers = (data, cinemaName) => {
  let mapData = [];
  if (data) {
    mapData = data
      .filter((cinema) => cinema.tenCumRap === cinemaName)
      .map((cinema) => cinema.danhSachRap.map((number) => number.tenRap));
    return flatArray(mapData);
  }
  return mapData;
};

export const getCinemaNumberId = (data, cinemaName, cinemaNumber) => {
  if (data) {
    let numbers = flatArray(
      data
        .filter((cinema) => cinema.tenCumRap === cinemaName)
        .map((cinema) => cinema.danhSachRap)
    );

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].tenRap === cinemaNumber) {
        return numbers[i].maRap;
      }
    }
  }
  return "";
};
