import React from "react";
import "./sign-in-and-sign-up.styles.scss"
import SignInAndSignOut from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignOutPage = ()=>(
    <div className="sign-in-sign-out" >
    <SignInAndSignOut/>
    <SignUp/>
    </div>
)







export default SignInAndSignOutPage;