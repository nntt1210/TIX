import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: "60px",
    marginBottom: 0,
    color: "#e9e9e9",
    fontSize: "14px",
    position: "relative",
  },
  detail: {
    padding: "30px 0",
    background: "#0a2029",
  },
  myContainer: {
    // containerStyle,
    margin: "0 auto",
    maxWidth: "940px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 30px)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(100% - 20px)",
    },
    "& .tab-pane": {
      display: "none",
    },
    "& .active": {
      display: "block",
    },
  },
  nav: {
    border: "none",
    justifyContent: "center",
    backgroundColor: theme.color.white.main,
    "& li": {
      width: "fit-content",
    },
    "& .MuiTabs-flexContainer": {
      display: "block",
      width: "fit-content",
      margin: "0 auto",
    },
    "& button": {
      "&:focus": {
        outline: "none",
      },
      "& span": {
        fontWeight: "bold",
        fontSize: "1rem",
      },
    },
  },
  listTime: {
    margin: "30px 0 0",
    background: "#fff",
    paddingBottom: "10px",
  },
  detailWrapper: {
    boxShadow: "0 0 15px hsla(0, 0%, 100%, 0.3)",
    display: "grid",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    gridTemplateRows: "minmax(auto, 90px) 1fr",
    gridTemplateColumns: "1fr",
    gridTemplateAreas: `ld"  "tr"  "sh"`,
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(10, 1fr)",
      gridTemplateAreas: `"tr tr tr ld ld ld ld ld ld ld"  "tr tr tr sh sh sh sh sh sh sh"`,
    },
  },
  listOfDay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "20px 5px",
    margin: 0,
    overflowY: "hidden",
    overflowX: "auto",
    //
    gridArea: "ld",
    maxHeight: "90px",
    border: "1px solid #ebebec",
  },
  detailCinema: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexWrap: "nowrap",
    flexBasis: "100%",
    overflowY: "auto",
    //
    gridArea: "tr",
    maxHeight: "735px",
    border: "1px solid #ebebec",
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      display: "none",
    },
  },
  collapseDetailCinema: {
    display: "none",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexWrap: "nowrap",
    flexBasis: "100%",
    overflowY: "auto",
    //
    gridArea: "tr",
    maxHeight: "735px",
    border: "1px solid #ebebec",
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      display: "flex",
    },
  },
  detailShowList: {
    overflowY: "auto",
    //
    gridArea: "sh",
    maxHeight: "645px",
    border: "1px solid #ebebec",
    "& .tab-pane": {
      display: "none",
    },
    "& .active": {
      display: "block",
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      display: "none",
    },
  },
  wrapperCollapse: {
    position: "relative",
    width: "100%",
    padding: "20px",
    border: "none",
    opacity: 1,
    transition: "all 0.5s",
  },
  container: {
    marginTop: theme.spacing(5),

    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      padding: 0,
    },
  },

  list: {
    background: theme.color.white.main,
    padding: theme.spacing(0, 2),
    height: 700,
    border: `1.5px solid ${theme.color.gray.light}`,
    borderRadius: theme.shape.borderRadius,

    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
  },

  smallPadding: {
    padding: theme.spacing(0, 1),
  },

  verticalScroll: {
    overflowY: "scroll",
  },

  noRightBorder: {
    borderRight: "none",
  },

  noTopLeftRadius: {
    borderTopLeftRadius: 0,
  },

  noTopRightRadius: {
    borderTopRightRadius: 0,
  },

  noBottomLeftRadius: {
    borderBottomLeftRadius: 0,
  },

  noBottomRightRadius: {
    borderBottomRightRadius: 0,
  },

  largeScreen: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  smallScreen: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

export default useStyles;
