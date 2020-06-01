import React from "react";
import "./styles.scss";
import SignUp from "../../component/SignUp";

class Registration extends React.Component {
  render() {
    return (
      <div>
        <h1>Registration Page</h1>
        <SignUp />
      </div>
    );
  }
}

export default Registration;
