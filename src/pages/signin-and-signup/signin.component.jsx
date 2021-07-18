import React from "react";
import SignIn from "../../components/sign-in/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./signin.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="signin-and-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
