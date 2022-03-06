import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  icon: {
    outlineStyle: "none!important",
    padding: 0,
    color: (props) => (props.color ? props.color : theme.color.blue.light),
    cursor: (props) => (props.noPointer ? "default!important" : "pointer"),

    "&:hover": {
      color: (props) =>
        props.hoverColor ? props.hoverColor : theme.color.orange.dark,
      background: "none",
      transition: "all 0.3s",
    },

    "&:hover $title": {
      color: (props) =>
        props.hoverColor ? props.hoverColor : theme.color.orange.dark,
      transition: "all 0.3s",
      textDecoration: "none",
    },
  },

  title: {
    padding: theme.spacing(0, 0.5),
    color: (props) => (props.color ? props.color : theme.color.blue.light),
    [theme.breakpoints.down('xl')]: {
      display: "none",
    },
  },
}));

export default useStyles;
