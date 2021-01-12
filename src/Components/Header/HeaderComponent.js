import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <div className="header__content">
          <div className="header__left">
            <img src="./img/web-logo.png" alt />
          </div>
          <div className="header__center d-flex align-items-center">
            <ul>
              <li>
                <a href="#now">Lịch Chiếu</a>
              </li>
              <li>
                <a href="#cinemas">Cụm rạp</a>
              </li>
              <li>
                <a href="#homeNews">Tin Tức</a>
              </li>
              <li>
                <a href="#app">Ứng dụng</a>
              </li>
            </ul>
          </div>
          <div className="header__right d-flex align-items-center">
            <div className="header__account border-right">
              <img src="./img/avatar.png" alt />
              <span>Đăng Nhập</span>
              <span>Đăng Ký</span>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div
            className="collapse navbar-collapse bg-light"
            id="navbarCollapse"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link close_nav" href="#">
                  <img src="./img/avatar.png" alt />
                  <span>Đăng Nhập</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link close_nav" href="#now">
                  Lịch chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link close_nav" href="#cinemas">
                  Cụm rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link close_nav" href="#homeNews">
                  Tin tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link close_nav" href="#app">
                  Ứng dụng
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="overlay" />
      </header>
    );
  }
}
