import { Avatar, Box, Icon, Typography, Button } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
// import useContainerStyles from "../MyContainer/style";
import useStyles from "./style";

export default function MovieDiscussion() {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Box
        className={styles.input}
        data-toggle="modal"
        data-target="#reviewInput"
      >
        <Box className={styles.item}>
          <Box className="row discuss__item--header">
            <Box className="text-center avatar">
              <Avatar
                variant="square"
                className={styles.avatar}
                src="/img/avatar.png"
                alt="avatar"
              />
            </Box>
            <Box className={`col pl-1" ${styles.middle}`}>
              <Typography component="p" className={styles.opinion}>
                Bạn nghĩ gì về phim này?
              </Typography>
            </Box>
            <Box className="text-right star__group">
              <Box className="star__group--default">
                <Icon className={classNames("fa fa-star", styles.iconStar)} />
                <Icon className={classNames("fa fa-star", styles.iconStar)} />
                <Icon className={classNames("fa fa-star", styles.iconStar)} />
                <Icon className={classNames("fa fa-star", styles.iconStar)} />
                <Icon className={classNames("fa fa-star", styles.iconStar)} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="discussion__area">
        <Box className={styles.item}>
          <Box className="row discuss__item--header" style={{ margin: 0 }}>
            <Box className="text-center avatar">
              <Avatar
                variant="square"
                className={styles.avatar}
                src="/img/avatar.png"
                alt="avatar"
              />
            </Box>
            <Box className={`col pl-1 ${styles.middle}`}>
              <Typography
                component="p"
                className={`font-weight-bold ${styles.opinion}`}
              >
                Tam Nguyen
              </Typography>
              <Typography component="p" className="post__time">
                17/01, 14:18
              </Typography>
            </Box>
            <Box className="text-right star__group">
              <Box className={styles.comment}>
                <Box component="span" className={styles.rating}>
                  9
                </Box>
                <Box className={styles.star}>
                  <Avatar variant="square" src="/img/star1.png" alt="star" />
                  <Avatar variant="square" src="/img/star1.png" alt="star" />
                  <Avatar variant="square" src="/img/star1.png" alt="star" />
                  <Avatar variant="square" src="/img/star1.png" alt="star" />
                  <Avatar
                    variant="square"
                    src="/img/star1.2.png"
                    alt="half-star"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.body}>
            <Typography component="p" className="comment">
              good
            </Typography>
          </Box>
          <Box className={styles.line}></Box>
          <Box className="row discuss__item--footer">
            <Box className="col-12">
              <Box className="interact__wrapper">
                <Box className={styles.interact}>
                  <Box className={styles.interactGroup}>
                    <Avatar variant="square" src="/img/like.png" alt="like" />
                    <Box component="span" className={styles.likeNum}>
                      0
                    </Box>
                    <Box component="span" className="label">
                      Thích
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.interact}>
                  <Box className={styles.interactGroup}>
                    <Avatar
                      variant="square"
                      src="/img/comment.png"
                      alt="comment"
                    />
                    <Box component="span" className={styles.commentNum}>
                      0
                    </Box>
                    <Box component="span" className="label">
                      Bình luận
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="discuss__item"></Box>
        <Box className="discuss__item"></Box>
        <Box className="discuss__item"></Box>
        <Box className={styles.btnContainer}>
          <Button className={styles.btnViewMore}>XEM THÊM</Button>
        </Box>
      </Box>
    </Box>
  );
}
