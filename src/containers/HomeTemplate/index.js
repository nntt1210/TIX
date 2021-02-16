import React from 'react';
import { Route } from 'react-router-dom';
import FooterHome from '../../components/FooterHome';
import NavBarHome from '../../components/NavBarHome';
import HomeMainPage from './HomeMainPage/HomeMainPage';
import HomePage from './HomePage';
import LichChieuPage from './ComingSoonPage';
import TinTucPage from './TinTucPage';


export function LayoutHome(props) {

    return (
        <>
            {/* <HomeMainPage /> */}
            {props.children}
        </>
    )
}
export function HomeTemplate({ Component, ...props }) {
    console.log(props);
    return (
        <Route
            render={(componentProps) => (
                <LayoutHome>
                    <Component {...componentProps} />
                </LayoutHome>
            )} />
    )
}
