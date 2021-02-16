import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddUserApi } from "./modules/action";
import Loader from '../../../../components/Loader';
import { Redirect } from 'react-router-dom';


class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: '',
            maNhom: '',
            maLoaiNguoiDung: '',
        }
    }
    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    renderNotice = () => {
        const { err, loading } = this.props;
        // console.log(err.response.status);
        if (err && err.response.status === 401) {
            return <div className="alert alert-danger">Chua co token</div>
        } else if (err && err.response.status === 500) {
            return <div className="alert alert-danger">{err.response.data}</div>
        }
    }
    handleRegister = (e) => {
        e.preventDefault();
        this.props.fetchAddUser(this.state);
        console.log("handleRegister", this.state);
        <Redirect to='/' />
    }
    render() {
        const { loading, data } = this.props;
        console.log('handleLogIn - redirect', data);
        if (data) return <Redirect to='/' />;
        return (
            <div className="container m-auto">
                <form onSubmit={this.handleRegister} >
                    {this.renderNotice()}
                    <div className="form-group">
                        <input type="text" className="form-control"
                            name="taiKhoan"
                            value={this.state.taiKhoan}
                            onChange={this.handleOnChange}
                            placeholder="UserName"
                        // onBlur={this.handleErrors}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            name="matKhau"
                            value={this.state.matKhau}
                            onChange={this.handleOnChange}
                            placeholder="Password"
                        // onBlur={this.handleErrors}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            name="hoTen"
                            value={this.state.hoTen}
                            onChange={this.handleOnChange}
                            placeholder="Ho va Ten"
                        // onBlur={this.handleErrors}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleOnChange}
                            placeholder="Email"
                        // onBlur={this.handleErrors}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            name="soDt"
                            value={this.state.soDt}
                            onChange={this.handleOnChange}
                            placeholder="So Dien Thoai"
                        // onBlur={this.handleErrors}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            name="maNhom"
                            value={this.state.maNhom}
                            onChange={this.handleOnChange}
                            placeholder="maNhom"
                        // onBlur={this.handleErrors}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control"
                            name="maLoaiNguoiDung"
                            value={this.state.maLoaiNguoiDung}
                            onChange={this.handleOnChange}
                            placeholder="maLoaiNguoiDung"
                        // onBlur={this.handleErrors}
                        />
                    </div>
                    <button className="btn btn-success">Sign Up</button>
                </form>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        loading: state.addReducerRegister.loading,
        data: state.addReducerRegister.data,
        err: state.addReducerRegister.error,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAddUser: (user) => {
            dispatch(actAddUserApi(user))
        }
    };
};
export default connect(
    mapStateToProps, mapDispatchToProps
)(RegisterForm);