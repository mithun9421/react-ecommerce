import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

import AuthWrapper from "./../AuthWrapper";
import FormInput from "./../forms/FormInput";
import Buttons from "./../forms/Button";
import { auth } from "../../firebase/utils";
const initialState = {
  email: "",
  errors: [],
};

class EmailPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    console.log("Habndle subt");
    e.preventDefault();
    try {
      const { email } = this.state;
      const config = {
        url: "http://localhost:3000/login",
      };
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          //   console.log("Password reset");
          this.props.history.push("/login");
        })
        .catch(() => {
          const err = ["Email not found"];
          this.setState({
            errors: err,
          });
        });
    } catch (err) {
      console.log();
    }
  };

  render() {
    const { email, errors } = this.state;
    const configAuthWrapper = {
      headLine: "Forgot Password",
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          {errors.length > 0 && (
            <ul>
              {errors.map((error, index) => {
                return <li key={index}>{error}</li>;
              })}
            </ul>
          )}
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder={"Email"}
              handleChange={this.handleChange}
            ></FormInput>

            <Buttons type={"submit"}>Submit</Buttons>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default withRouter(EmailPassword);
