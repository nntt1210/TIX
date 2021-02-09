import React, { Component } from "react";

export default class RegisterPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="img__bg"></div>
        <div className="register__container">
          <div className="register__info">
            <div className="web-logo">
              <img className="img-fluid" src="/img/web-logo.png" alt="logo" />
            </div>
            <h3>Đăng ký</h3>
            <form>
              <div className="form__control">
                <label>Họ và tên</label>
                <div>
                  <input
                    className="input__control"
                    type="text"
                    id="fullname"
                    name="fullname"
                  />
                </div>
              </div>
              <div className="form__control">
                <label>Tài khoản</label>
                <div>
                  <input
                    className="input__control"
                    type="text"
                    id="username"
                    name="username"
                  />
                </div>
              </div>
              <div className="form__control">
                <label>Mật khẩu</label>
                <div>
                  <input
                    className="input__control"
                    type="password"
                    id="password"
                    name="password"
                  />
                </div>
              </div>
              <div className="form__control">
                <label>Email</label>
                <div>
                  <input
                    className="input__control"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="form__control">
                <label>Số điện thoại</label>
                <div>
                  <input
                    className="input__control"
                    type="text"
                    id="mobile"
                    name="mobile"
                  />
                </div>
              </div>
            </form>

            <button className="btn btn__register">Đăng ký</button>
            <div className="account__available">
              <a href="/login">Đã có tài khoản tại Tix? Đăng nhập ngay</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
