export const getSystems = (data) => {
  if (data.heThongRapChieu) {
    return data.heThongRapChieu.map((system) => ({
      id: system.maHeThongRap,
      name: system.tenHeThongRap,
      logo: system.logo,
    }));
  }

  return [];
};
