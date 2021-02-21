import React from 'react';
import { Route } from 'react-router-dom';


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
