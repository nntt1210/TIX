import React from "react";
import useContainerStyles from "../MyContainer/style";
import useStyles from "./style";

export default function MovieDiscussion() {
  const styles = useStyles();
  const containerStyles = useContainerStyles();
  return (
    <div className={styles.root + " " + containerStyles.root}>
      <div
        className={styles.input}
        data-toggle="modal"
        data-target="#reviewInput"
      >
        <div className={styles.item}>
          <div className="row discuss__item--header">
            <div className="text-center avatar">
              <img
                className={styles.avatar}
                src="/img/avatar.png"
                alt="avatar"
              />
            </div>
            <div className={`col pl-1" ${styles.middle}`}>
              <p className={styles.opinion}>Bạn nghĩ gì về phim này?</p>
            </div>
            <div className="text-right star__group">
              <div className="star__group--default">
                <i class={`fa fa-star ${styles.iconStar}`}></i>
                <i class={`fa fa-star ${styles.iconStar}`}></i>
                <i class={`fa fa-star ${styles.iconStar}`}></i>
                <i class={`fa fa-star ${styles.iconStar}`}></i>
                <i class={`fa fa-star ${styles.iconStar}`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="discussion__area">
        <div className={styles.item}>
          <div className="row discuss__item--header" style={{ margin: 0 }}>
            <div className="text-center avatar">
              <img
                className={styles.avatar}
                src="/img/avatar.png"
                alt="avatar"
              />
            </div>
            <div className={`col pl-1 ${styles.middle}`}>
              <p className={`font-weight-bold ${styles.opinion}`}>
                Đinh Phúc Nguyên
              </p>
              <p className="post__time">17/01, 14:18</p>
            </div>
            <div className="text-right star__group">
              <div className={styles.comment}>
                <span className={styles.rating}>9</span>
                <div className={styles.star}>
                  <img src="/img/star1.png" alt="star" />
                  <img src="/img/star1.png" alt="star" />
                  <img src="/img/star1.png" alt="star" />
                  <img src="/img/star1.png" alt="star" />
                  <img src="/img/star1.2.png" alt="half star" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.body}>
            <p className="comment">good</p>
          </div>
          <div className={styles.line}></div>
          <div className="row discuss__item--footer">
            <div className="col-12">
              <div className="interact__wrapper">
                <div className={styles.interact}>
                  <span className={styles.interactGroup}>
                    <img src="/img/like.png" alt="like" />
                    <span className="like__num">0</span>
                    <span className="label">Thích</span>
                  </span>
                </div>
                <div className={styles.interact}>
                  <span className={styles.interactGroup}>
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
        <div className={styles.btnContainer}>
          <button className={styles.btnViewMore}>XEM THÊM</button>
        </div>
      </div>
    </div>
  );
}
