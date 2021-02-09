import React, { Component } from "react";

export default class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="img__bg"></div>
        <div className="login__container">
          <div className="login__info">
            <div>
              <img src="/img/web-logo.png" alt="logo" />
            </div>
            <h3>Đăng nhập</h3>
            <form>
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
            </form>
            <button className="btn btn__login">Đăng nhập</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
