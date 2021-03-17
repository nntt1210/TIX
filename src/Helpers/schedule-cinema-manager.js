export const getCinemaSystems = (data) => {
  if (data) {
    return data.map((system) => ({
      id: system.maHeThongRap,
      name: system.tenHeThongRap,
      logo: system.logo,
    }));
  }
  return [];
};

export const getShowTimeInfo = (data, systemName, cinemaName, movieName) => {
  if (data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].tenHeThongRap === systemName) {
        let cinemas = data[i].lstCumRap;
        for (let j = 0; j < cinemas.length; j++) {
          if (cinemas[j].tenCumRap === cinemaName) {
            let movies = cinemas[j].danhSachPhim;

            for (let k = 0; k < movies.length; k++) {
              if (movies[k].tenPhim === movieName) {
                return movies[k].lstLichChieuTheoPhim;
              }
            }
          }
        }
      }
    }
  }

  return [];
};
