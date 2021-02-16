import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterHome from '../../../components/FooterHome';
import NavBarHome from '../../../components/NavBarHome';
import HomePage from '../HomePage';
import ComingSoon from '../ComingSoonPage/index';
import TinTucPage from '../TinTucPage';
import CumRapPage from '../CumRapPage';
import Modal from '../LoginPage/ModalLogin/Modal';



class HomeMainPage extends Component {

    render() {
        return (
            <>
                <NavBarHome />
                <HomePage />
                <ComingSoon />
                <CumRapPage />
                <TinTucPage />
                <FooterHome />
            </>
        );
    }
}

export default connect(null, null)(HomeMainPage);