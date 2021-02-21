import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterHome from '../../../components/FooterHome';
import NavBarHome from '../../../components/NavBarHome';
import CarouselPage from '../CarouselPage';
import ComingSoon from '../ComingSoonPage/index';
import TinTucPage from '../TinTucPage';
import CumRapPage from '../CumRapPage';



class HomeMainPage extends Component {

    render() {
        return (
            <>
                <NavBarHome />
                <CarouselPage />
                <ComingSoon />
                <CumRapPage />
                <TinTucPage />
                <FooterHome />
            </>
        );
    }
}

export default connect(null, null)(HomeMainPage);