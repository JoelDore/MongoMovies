// Referenced npm react-google-login
import "./Login.css"
import GoogleIcon from "../../assets/images/googleicon.svg"
import React from "react";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "react-google-login"


const clientId = "123454472770-7dr95o1f2blqnbvudd27d9g4tp592roi.apps.googleusercontent.com";

function LoginHooks() {
    const onSuccess = (res) => {
        console.log("[Login Success] currentUser:", res.profileObj);
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log("[Login Failed] res:", res);
    };

    const { signIn } = useGoogleLogin({
      onSuccess,
      onFailure,
      clientId,
      isSignedIn: true,
      accessType: "offline"
    });

    return (
        <button onCLick={signIn} className="button">
        <img src={GoogleIcon} className="icon"></img>
        <span className="buttonText">Sign in With Google</span>
        </button>
      );
}

export default LoginHooks;