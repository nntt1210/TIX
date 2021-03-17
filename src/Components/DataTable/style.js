import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1.0px solid ${theme.color.gray.dark}`,
    borderRadius: theme.shape.borderRadius,
    maxHeight: (props) => props.maxHeight,
    maxWidth: (props) => props.maxWidth,

    [theme.breakpoints.down("lg")]: {
      maxHeight: "100% !important",
    },
  },

  darkCell: {
    background: theme.color.orange.main,
    color: theme.color.white.main,
    fontWeight: 600,
    padding: theme.spacing(1.5),
    textAlign: "center",
  },

  footer: {
    borderBottom: "none",
  },

  cell: {
    padding: theme.spacing(1.5),
    textAlign: "center",
  },

  // row: {
  //   "&:nth-of-type(odd)": {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  // },
}));

export default useStyles;
