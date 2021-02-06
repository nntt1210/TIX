import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import containerStyle from "./../MyContainer/style";

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
    width: "85%",
    marginTop: "30px",
    background: "#0a2029",
    paddingBottom: "20px",
  },
  container: {
    margin: "0 auto",
    maxWidth: "940px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 30px)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(100% - 20px)",
    },
  },
  input: {
    lineHeight: "42px",
    cursor: "pointer",
  },
  item: {
    boxShadow: "0 0 15px hsla(0, 0%, 100%, 0.3)",
    borderRadius: "10px",
    backgroundColor: "#fff",
    padding: "1rem",
    marginBottom: "1rem",
  },
  header: {},
  avatar: {
    display: "inline-block",
    marginRight: "10px",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
  middle: {
    padding: 0,
  },
  opinion: {
    color: "#000",
    fontSize: "clamp(13px, 2.5vw, 16px)",
    margin: 0,
  },
  iconStar: {
    color: "rgba(220, 53, 69, 0.75)",
    fontSize: "clamp(15px, 3vw, 21px)",
  },
  comment: {
    width: "-webkit-max-content",
    width: "-moz-max-content",
    width: "max-content",
    marginLeft: "auto",
    textAlign: "center",
  },
  rating: {
    color: "#44c020",
    fontSize: "clamp(13px, 2.5vw, 16px)",
  },
  star: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    "& img": {
      width: "10px",
    },
  },
  body: {
    padding: "1rem 0",
    marginTop: "10px",
    "& p": {
      padding: 0,
    },
  },
  line: {
    height: "1px",
    width: "100%",
    backgroundColor: "grey",
    borderRadius: "15px",
    margin: "10px 0",
  },
  interact: {
    display: "inline-block",
    "& img": {
      display: "inline-block",
      width: "20px",
      marginRight: "10px",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    "&:first-of-type": {
      marginRight: "25px",
    },
  },
  interactGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  btnViewMore: {
    color: "#949494",
    fontSize: "14px",
    background: "transparent",
    border: "1px solid #949494",
    padding: "7px 25px",
    borderRadius: "4px",
    fontWeight: 600,
    textAlign: "center",
    transition: "all 0.2s",
    marginBottom: "20px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "35px",
    },
    "&:hover": {
      background: "#fb4226",
      borderColor: "#fb4226",
      color: "#fff",
    },
  },
  btnContainer: {
    width: "100%",
    textAlign: "center",
    marginBottom: "35px",
  },
});

class MovieDiscussion extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root + " " + classes.container}>
        <div
          className={classes.input}
          data-toggle="modal"
          data-target="#reviewInput"
        >
          <div className={classes.item}>
            <div className="row discuss__item--header">
              <div className="text-center avatar">
                <img
                  className={classes.avatar}
                  src="/img/avatar.png"
                  alt="avatar"
                />
              </div>
              <div className={"col pl-1" + " " + classes.middle}>
                <p className={classes.opinion}>Bạn nghĩ gì về phim này?</p>
              </div>
              <div className="text-right star__group">
                <div className="star__group--default">
                  <i class={"fa fa-star" + " " + classes.iconStar}></i>
                  <i class={"fa fa-star" + " " + classes.iconStar}></i>
                  <i class={"fa fa-star" + " " + classes.iconStar}></i>
                  <i class={"fa fa-star" + " " + classes.iconStar}></i>
                  <i class={"fa fa-star" + " " + classes.iconStar}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="discussion__area">
          <div className={classes.item}>
            <div className="row discuss__item--header">
              <div className="text-center avatar">
                <img
                  className={classes.avatar}
                  src="/img/avatar.png"
                  alt="avatar"
                />
              </div>
              <div className={"col pl-1" + " " + classes.middle}>
                <p className={"font-weight-bold" + " " + classes.opinion}>
                  Đinh Phúc Nguyên
                </p>
                <p className="post__time">17/01, 14:18</p>
              </div>
              <div className="text-right star__group">
                <div className={classes.comment}>
                  <span className={classes.rating}>9</span>
                  <div className={classes.star}>
                    <img src="/img/star1.png" alt="star" />
                    <img src="/img/star1.png" alt="star" />
                    <img src="/img/star1.png" alt="star" />
                    <img src="/img/star1.png" alt="star" />
                    <img src="/img/star1.2.png" alt="half star" />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.body}>
              <p className="comment">pro</p>
            </div>
            <div className={classes.line}></div>
            <div className="row discuss__item--footer">
              <div className="col-12">
                <div className="interact__wrapper">
                  <div className={classes.interact}>
                    <span className={classes.interactGroup}>
                      <img src="/img/like.png" alt="like" />
                      <span className="like__num">0</span>
                      <span className="label">Thích</span>
                    </span>
                  </div>
                  <div className={classes.interact}>
                    <span className={classes.interactGroup}>
                      <img src="/img/comment.png" alt="comment" />
                      <span className="comment__num">0</span>
                      <span className="label">Bình luận</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="discuss__item"></div>
          <div className="discuss__item"></div>
          <div className="discuss__item"></div>
          <div className={classes.btnContainer}>
            <button className={classes.btnViewMore}>XEM THÊM</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MovieDiscussion);
