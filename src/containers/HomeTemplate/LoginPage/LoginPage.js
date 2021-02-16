import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loader from '../../../components/Loader';
import Modal from './ModalLogin/Modal';


class LoginPage extends Component {

    render() {
        console.log('lOGIN', localStorage.getItem('UserAuthenticated'));
        const { loading } = this.props;
        if (loading) return <Loader />
        if (localStorage.getItem('UserAuthenticated')) return <Redirect to='/' />;
        return (

            <div className="Login" id="logIn">
                <Modal />

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        loading: state.authPageReducer.loading,
        error: state.authPageReducer.error,
    };
}

export default connect(
    mapStateToProps, null
)(LoginPage);