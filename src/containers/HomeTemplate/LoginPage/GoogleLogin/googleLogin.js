import { React, useState } from 'react';
import { useGoogleLogin } from "react-google-login";
import { Redirect } from 'react-router-dom';
import { refreshTokenSetup } from "../../../../utils/refreshToken";


export function LoginGoogle() {

    const [checkPoint, setCheckPoint] = useState(false);
    const clientId = '106261084143-gu4krm7he78n4h75uh7ijsnvn1k64r29.apps.googleusercontent.com';

    const onSuccess = (response) => {
        console.log("responseSuccess", response);
        localStorage.setItem("UserAuthenticated", JSON.stringify(response));
        setCheckPoint({
            checkPoint: true,
        })
        refreshTokenSetup(response);
    };

    const onFailure = (response) => {
        console.log("responseFail", response);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offLine',
    });
    console.log("checkPoint", checkPoint);
    if (checkPoint) return <Redirect to='/' />
    return (
        <a className="loginBtn"
            onClick={signIn}>
            <img className="sigInLogo" src="https://tix.vn/app/assets/img/login/btn-Google.png" />
        </a>
    );
}
;
