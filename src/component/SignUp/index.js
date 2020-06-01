import React from "react";
import "./styles.scss";

import { auth, handleUserProfile } from "../../firebase/utils";
import AuthWrapper from "../AuthWrapper";
import FormInput from "../forms/FormInput";
import Buttons from "../forms/Button";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: [],
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      const err = ["Passord don't match"];
      this.setState({
        errors: err,
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      this.setState({
        ...initialState,
      });
    } catch (err) {}
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;

    const configAuthWrapper = {
      headLine: "Sign up",
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        <form onSubmit={this.handleFormSubmit}>
          <div className="formWrap">
            {errors.length > 0 && (
              <ul>
                {errors.map((err, index) => {
                  return <li key={index}>{err}</li>;
                })}
              </ul>
            )}
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full name"
              onChange={this.handleChange}
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            <Buttons type="submit">Sign Up</Buttons>
          </div>
        </form>
      </AuthWrapper>
    );
  }
}

export default SignUp;
