import React from 'react';
import { Route } from 'react-router-dom';
import FooterHome from '../../components/FooterHome';
import NavBarHome from '../../components/NavBarHome';

function LayoutHome(props) {
    console.log("LayoutHome", props.children);
    return (
        <>
            <NavBarHome />
            {props.children}
            <FooterHome />
        </>
    )
}
export default function HomeTemplate({ Component, ...props }) {
    console.log("HomeTemplate", Component, props);
    return (
        <Route
            {...props}
            render={
                (componentProps) => (
                    <LayoutHome>
                        <Component {...componentProps} />
                    </LayoutHome>
                )} />
    )
}
