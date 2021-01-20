import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

export default class HeaderComponent extends Component {
  toggleNavBar = () => {
    let sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.add("active");
  };

  hideNavBar = () => {
    let sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.remove("active");
  };

  render() {
    return (
      <header>
        <div className="header__content">
          <div className="header__left">
            <NavLink to="/">
              <img src="/img/web-logo.png" alt />
            </NavLink>
          </div>
          <div className="header__center d-flex align-items-center">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="now"
                  className="menu"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Lịch chiếu
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="cinemas"
                  className="menu"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Cụm rạp
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="news"
                  className="menu"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Tin tức
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="app"
                  className="menu"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Ứng dụng
                </Link>
              </li>
            </ul>
          </div>
          <div className="header__right d-flex align-items-center">
            <div className="header__account border-right">
              <img src="/img/avatar.png" alt />
              <span>Đăng Nhập</span>
              <span>Đăng Ký</span>
            </div>
          </div>
          <div className="leftmobile"></div>
          <div className="rightmobile menudropdown">
            <img
              className="img-fluid"
              src="/img/menu-options.png"
              onClick={this.toggleNavBar}
            />
          </div>
          <div id="sideMenu">
            <div className="wrapMenuMobile">
              <div className="wrapFirst">
                <a>
                  <img
                    className="btnLogin btnAvatarMobile"
                    src="/img/avatar.png"
                    alt="avatar"
                  />
                  Đăng nhập
                </a>
                <img
                  src="/img/next-session.png"
                  className="close icon-arrow-right"
                  onClick={this.hideNavBar}
                />
              </div>
              <Link
                activeClass="active"
                to="now"
                className="menu"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.hideNavBar}
              >
                Lịch chiếu
              </Link>
              <Link
                activeClass="active"
                to="cinemas"
                className="menu"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.hideNavBar}
              >
                Cụm rạp
              </Link>
              <Link
                activeClass="active"
                to="news"
                className="menu"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.hideNavBar}
              >
                Tin tức
              </Link>
              <Link
                activeClass="active"
                to="app"
                className="menu"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.hideNavBar}
              >
                Ứng dụng
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
