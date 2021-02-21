import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { actAuthApi } from "./modules/actions";
import { LoginGoogle } from "../GoogleLogin/googleLogin";


class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
        }
    }
    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleLogIn = (e) => {
        e.preventDefault();
        console.log('history', this.props);
        this.props.fetchLogin(this.state, this.props.history);
        console.log(this.state);
    }
    renderNotice = () => {
        const { err } = this.props;
        if (err) {
            return <div className="alert alert-danger"> {err.response.data}</div>
        }
    }
    renderGoogleLogin = () => {
        return (
            <div className="col-xs-12 mt-3">
                <LoginGoogle />
            </div>
        )
    }
    render() {
        return (
            <div
                className="modal"
                id="modalLogin"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header m-auto">
                            <h5 className="modal-title"></h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"

                            >
                                <span aria-hidden="true">×</span>

                            </button>
                            <img src="https://tix.vn/app/assets/img/login/group@2x.png" style={{ width: 100 }, { height: 100 }} />
                        </div>
                        <div className="modal-body " >
                            <p className="text-white text-center" >Đăng nhập để được nhiều ưu đãi, mua vé
                                và bảo mật thông tin!</p>
                            <div className="logInCate">
                                <div className="col-xs-12 mt-3">
                                    <a className="loginBtn">
                                        <img className="sigInLogo" src="https://tix.vn/app/assets/img/login/btn-FB.png" />
                                    </a>
                                </div>
                                <div className="col-xs-12 mt-3">
                                    <a className="loginBtn">
                                        <img className="sigInLogo" src="https://tix.vn/app/assets/img/login/btn-Zalo.png" />
                                    </a>
                                </div>
                                {this.renderGoogleLogin()}
                                <hr />
                                <div className="col-xs-12 mt-3  rounded">
                                    <div>
                                        <form onSubmit={this.handleLogIn}>
                                            {this.renderNotice()}
                                            <div className="form-group">
                                                <label>UserName</label>
                                                <input type="text" className="form-control"
                                                    name="taiKhoan"
                                                    value={this.state.taiKhoan}
                                                    onChange={this.handleOnChange}
                                                // onBlur={this.handleErrors}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="text" className="form-control"
                                                    name="matKhau"
                                                    value={this.state.matKhau}
                                                    onChange={this.handleOnChange}
                                                // onBlur={this.handleErrors}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <button type="submit" className="btn btn-success"
                                                    >
                                                        Sign In
                                                </button>
                                                </div>
                                                <div className="col-6 rounded p-0" >
                                                    <button className="btn btn-primary" >
                                                        <NavLink className="loginBtn" to="/signUp" >
                                                            Sign Up
                                                        </NavLink>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {

    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogin: (user, history) => {
            dispatch(actAuthApi(user, history))
        },
    };
};
export default connect(
    mapStateToProps, mapDispatchToProps
)(Modal);