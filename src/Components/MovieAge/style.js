import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  age: {
    display: "inline-block",
    textAlign: "center",
    minWidth: "30px",
    borderRadius: "4px",
    background: theme.color.orange.main,
    color: "#fff",
    fontSize: "14px",
    padding: "0 5px",
    marginRight: "8px",
    fontWeight: 600,
  },
}));
export default useStyles;
