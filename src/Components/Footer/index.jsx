import React from "react";
import useStyles from "./style";

export default function Footer() {
  const styles = useStyles();
  return (
    <footer className={styles.root} id="idFooter">
      <div className="col-sm-12">
        <div className={styles.mainMaxWidth}>
          <div className="row my-3 ">
            <div className={`col-sm-4 col-12 ${styles.colFirst}`}>
              <p>TIX</p>
              <div className="row">
                <div className="col-6" style={{ paddingLeft: 0 }}>
                  <a href="/#">
                    <p>FAQ</p>
                  </a>
                  <a href="/#">
                    <p>Brand Guidelines</p>
                  </a>
                </div>
                <div className="col-6" style={{ paddingLeft: 0 }}>
                  <a href="/#">
                    <p>Thỏa thuận sử dụng</p>
                  </a>
                  <a href="/#">
                    <p>Chính sách bảo mật</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 colSecond">
              <p>ĐỐI TÁC</p>
              <div className={`row col-sm-12 ${styles.smallIcon} hideAll`}>
                <a href="/#">
                  <img src="/img/cgv.jpg" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/bhd.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/galaxycine.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/cinestar.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/404b8c4b80d77732e7426cdb7e24be20.png" alt="" />
                </a>
              </div>
              <div className={`row col-sm-12 ${styles.smallIcon} hideAll`}>
                <a href="/#">
                  <img src="/img/megags.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/bt.jpg" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/dongdacinema.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/TOUCH.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/cnx.jpg" alt="" />
                </a>
              </div>
              <div className={`row col-sm-12 ${styles.smallIcon} hideAll`}>
                <a href="/#">
                  <img src="/img/STARLIGHT.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/dcine.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/zalopay_icon.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/payoo.jpg" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/VCB.png" alt="" />
                </a>
              </div>
              <div className={`row col-sm-12 ${styles.smallIcon} hideAll`}>
                <a href="/#">
                  <img src="/img/AGRIBANK.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/VIETTINBANK.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/IVB.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/123go.png" alt="" />
                </a>
                <a href="/#">
                  <img src="/img/laban.png" alt="" />
                </a>
              </div>
            </div>
            <div className={`col-sm-4 col-12 ${styles.colThird}`}>
              <div className="row">
                <div className="col-sm-6 col-12 py-md-0 py-sm-3 py-3">
                  <p>MOBILE APP</p>
                  <img src="/img/apple-logo.png" alt="" />
                  <img src="/img/android-logo.png" alt="" />
                </div>
                <div className="col-sm-6 col-12 py-md-0 py-sm-3 py-3">
                  <p>SOCIAL</p>
                  <img src="/img/facebook-logo.png" alt="" />
                  <img src="/img/zalo-logo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr className={styles.hrFooter} />
          </div>
          <div className="row py-3 text-md-left text-sm-center text-center">
            <div className="col-sm-1 col-12 px-0 py-md-0 py-sm-3 py-3">
              <img
                className={styles.imgFooter}
                src="/img/zion-logo.jpg"
                style={{ borderRadius: 8 }}
                alt=""
              />
            </div>
            <div
              className={`col-sm-9 col-12 px-sm-3 p-xs-3 ${styles.infoFooter}`}
            >
              <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
              <span>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </span>
              <span>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
                ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
                Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí
                Minh cấp.
              </span>
              <span>
                Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
                <br />
                Email:{" "}
                <a href="mailto:support@tix.vn" style={{ color: "#FB4226" }}>
                  support@tix.vn
                </a>
              </span>
            </div>
            <div className="col-sm-2 col-12">
              <a
                target="_blank"
                href="http://online.gov.vn/Home/WebDetails/62782"
                rel="noreferrer"
              >
                <img
                  className={styles.imgBoCo}
                  alt="Bộ Công Thương"
                  title
                  src="/img/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
