import { Avatar, Box, Divider, Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "./style";

export default function Footer() {
  const styles = useStyles();
  return (
    <Box className={styles.root} id="idFooter">
      <Box className="col-sm-12">
        <Box className={styles.mainMaxWidth}>
          <Box className="row my-3 ">
            <Box className={`col-sm-4 col-12 ${styles.colFirst}`}>
              <Typography component="p">TIX</Typography>
              <Box className="row">
                <Box className="col-6" style={{ paddingLeft: 0 }}>
                  <NavLink to="/#">FAQ</NavLink>
                  <NavLink to="/#">Brand Guidelines</NavLink>
                </Box>
                <Box className="col-6" style={{ paddingLeft: 0 }}>
                  <NavLink to="/#">Thỏa thuận sử dụng</NavLink>
                  <NavLink to="/#">Chính sách bảo mật</NavLink>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-4 colSecond">
              <Typography component="p">ĐỐI TÁC</Typography>
              <Box
                className={classNames(
                  "row",
                  "col-sm-12",
                  styles.smallIcon,
                  "hideAll"
                )}
              >
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/cgv.jpg"
                    alt="CGV"
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/bhd.png"
                    alt="BHD"
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/galaxycine.png"
                    alt="Galaxy Cinema"
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/cinestar.png"
                    alt="Cinestar"
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/404b8c4b80d77732e7426cdb7e24be20.png"
                    alt="Lotte Cinema"
                  />
                </NavLink>
              </Box>
              <Box className={`row col-sm-12 ${styles.smallIcon} hideAll`}>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/megags.png"
                    alt="Mega GS"
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/bt.jpg"
                    alt=""
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/dongdacinema.png"
                    alt=""
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/TOUCH.png"
                    alt=""
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/cnx.jpg"
                    alt=""
                  />
                </NavLink>
              </Box>
              <Box className={`row col-sm-12 ${styles.smallIcon} hideAll`}>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/STARLIGHT.png"
                    alt=""
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/dcine.png"
                    alt=""
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/zalopay_icon.png"
                    alt=""
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/payoo.jpg"
                    alt=""
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/VCB.png"
                    alt=""
                  />
                </NavLink>
              </Box>
              <Box className={`row col-sm-12 ${styles.smallIcon} hideAll`}>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/AGRIBANK.png"
                    alt=""
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/VIETTINBANK.png"
                    alt=""
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/IVB.png"
                    alt=""
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/123go.png"
                    alt=""
                  />
                </NavLink>
                <NavLink to="/#">
                  <Avatar
                    className={styles.brandImg}
                    variant="square"
                    src="/img/laban.png"
                    alt=""
                  />
                </NavLink>
              </Box>
            </Box>
            <Box className={`col-sm-4 col-12 ${styles.colThird}`}>
              <Box className="row">
                <Box className="col-sm-6 col-12 py-md-0 py-sm-3 py-3">
                  <Typography component="p">MOBILE APP</Typography>
                  <Box className={styles.logoWrapper}>
                    <Avatar
                      style={{
                        width: "30px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                      variant="square"
                      src="/img/apple-logo.png"
                      alt=""
                    />
                    <Avatar
                      style={{
                        width: "30px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                      variant="square"
                      src="/img/android-logo.png"
                      alt=""
                    />
                  </Box>
                </Box>
                <Box className="col-sm-6 col-12 py-md-0 py-sm-3 py-3">
                  <Typography component="p">SOCIAL</Typography>
                  <Box className={styles.logoWrapper}>
                    <Avatar
                      style={{
                        width: "30px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                      variant="square"
                      src="/img/facebook-logo.png"
                      alt=""
                    />
                    <Avatar
                      style={{
                        width: "30px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                      variant="square"
                      src="/img/zalo-logo.png"
                      alt=""
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Divider className={styles.hrFooter} />
          </Box>
          <Box className="row py-3 text-md-left text-sm-center text-center">
            <Box className="col-sm-1 col-12 px-0 py-md-0 py-sm-3 py-3">
              <Avatar
                variant="square"
                className={styles.imgFooter}
                src="/img/zion-logo.jpg"
                style={{ borderRadius: 8 }}
                alt=""
              />
            </Box>
            <Box
              className={`col-sm-9 col-12 px-sm-3 p-xs-3 ${styles.infoFooter}`}
            >
              <Typography component="p">
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </Typography>
              <Box component="span">
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </Box>
              <Box component="span">
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
                ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
                Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí
                Minh cấp.
              </Box>
              <Box component="span">
                Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
                <br />
                Email:{" "}
                <NavLink
                  to="mailto:support@tix.vn"
                  style={{ color: "#FB4226" }}
                >
                  support@tix.vn
                </NavLink>
              </Box>
            </Box>
            <Box className="col-sm-2 col-12">
              <NavLink
                target="_blank"
                to="http://online.gov.vn/Home/WebDetails/62782"
                rel="noreferrer"
              >
                <Avatar
                  variant="square"
                  className={styles.imgBoCo}
                  alt="Bộ Công Thương"
                  title="Bộ Công Thương"
                  src="/img/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                />
              </NavLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
