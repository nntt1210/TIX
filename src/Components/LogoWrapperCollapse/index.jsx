import React from "react";
import { renderShowList } from "../../Helpers/detail-movie-manager";
import useStyles from "./style";

export default function LogoWrapperCollapse(props) {
  const styles = useStyles();
  const { src, alt, target, name, movie, listShowTime, currentDate } = props;
  return (
    <div className={styles.logo}>
      <div
        // class="collapsed MOBILE wrapper__collapse"
        data-toggle="collapse"
        data-target={"#" + target + "-collapse"}
      >
        <div className={styles.detail}>
          <img class="theaterList__image" src={src} alt={alt} />
          <span className={styles.name}>{name}</span>
          <span className={styles.arrow}></span>
        </div>
      </div>
      <div className="collapse" id={target + "-collapse"}>
        {renderShowList(target, movie, listShowTime, currentDate)}
      </div>
    </div>
  );
}

{
  /* <div class={styles.wrapperCollapse}>
<div
  class={styles.mainCollapse}
  data-toggle="collapse"
  data-target="#BHDStar_bhd-star-cineplex-vincom-le-van-viet"
>
    <CinemaItem/>
  <div class="cinema__details--item">
    <img
      class="theaterList__image"
      src="/images/BHDStar_theater.jpg"
      alt="BHD Star Cineplex"
    />
    <div class="wrapInfo">
      <span class="chiNhanh">
        <span class="tenRap BHD Star ">BHD Star </span> - Vincom Lê
        Văn Việt
      </span>
    </div>
  </div>
</div>
</div>
<div class="collapse" id="BHDStar_bhd-star-cineplex-vincom-le-van-viet">
<div class="pt-3 row content__collapse stack">
  <div class="col-12">2D Digital</div>
  <div class="col-12">
    <button class="btn btn-time" disabled="">
      <span class="start">10:10</span> ~ 12:10
    </button>
    <button class="btn btn-time" disabled="">
      <span class="start">12:10</span> ~ 14:10
    </button>
  </div>
</div>
</div> */
}
