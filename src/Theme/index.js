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
      special: "#3c3b37",
    },
    red: {
      light: "#ff3d41",
      main: "#e71a0f",
    },
    orange: {
      light: "#ff6600",
      main: "#fb4226",
      dark: "fa5238",
    },
    green: {
      light: "#44c020",
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
      light: "#f7b500",
      main: "#e5a813",
      dark: "#f9ac1b",
    },
    blue: {
      light: "#2196f3",
      main: "#3e515d",
    },
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    h1: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 700,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 700,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 700,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 600,
      fontSize: "1.0rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: "'Lato', sans-serif",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
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
