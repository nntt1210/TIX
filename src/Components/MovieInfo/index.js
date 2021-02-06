import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import containerStyle from "./../MyContainer/style";

const styles = (theme) => ({
  root: {
    paddingTop: "40px",
    background: "#0a2029",
    color: "#e9e9e9",
    fontSize: "14px",
  },
  row: {
    display: "flex",
    marginBottom: "20px",
  },
  title: {
    width: "35%",
    color: "#fff",
  },
  content: {
    width: "40%",
  },
  description: {
    width: "100%",
    textAlign: "justify",
  },
  container: {
    containerStyle,
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 30px)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(100% - 20px)",
    },
  },
});

class MovieInfo extends Component {
  render() {
    const { classes, ngayKhoiChieu, moTa } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container + " " + "row"}>
          <div className="col-12 col-md-6">
            <div className={classes.row}>
              <div className={classes.title}>Ngày công chiếu</div>
              <div className={classes.content}>
                {new Date(ngayKhoiChieu).toLocaleDateString()}
              </div>
            </div>
            <div className={classes.row}>
              <div className={classes.title}>Đạo diễn</div>
              <div className={classes.content}>Lorem range, Ipsum dolor</div>
            </div>
            <div className={classes.row}>
              <div className={classes.title}>Diễn viên</div>
              <div className={classes.content}>Lorem range, Ipsum dolor</div>
            </div>
            <div className={classes.row}>
              <div className={classes.title}>Thể loại</div>
              <div className={classes.content}>Lorem range, Ipsum dolor</div>
            </div>
            <div className={classes.row}>
              <div className={classes.title}>Định dạng</div>
              <div className={classes.content}>2D/Digital</div>
            </div>
            <div className={classes.row}>
              <div className={classes.title}>Quốc Gia SX</div>
              <div className={classes.content}>Việt Nam</div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={classes.row}>
              <div className={classes.title}>Nội dung</div>
            </div>
            <div className={classes.row}>
              <p className={classes.description}>{moTa}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MovieInfo);
