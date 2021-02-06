import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  color: {
    black: {
      light: "#222",
      main: "#000000",
      contrastText: "#ffffff",
    },
    white: {
      light: "#e4e4e4",
      main: "#ffffff",
      contrastText: "#000000",
    },
    gray: {
      light: "#9b9b9b",
      main: "#4a4a4a",
      dark: "#333333",
    },
    red: {
      main: "#e71a0f",
    },
    orange: {
      light: "#ff6600",
      main: "#fb4226",
      dark: "fa5238",
    },
    green: {
      main: "#8bc541",
      dark: "#108f3e",
    },
    brown: {
      main: "#ca4137",
    },
    pink: {
      main: "#df0d7a",
    },
    yellow: {
      main: "#e5a813",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xsm: 375,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1700,
    },
  },
});
export default theme;
