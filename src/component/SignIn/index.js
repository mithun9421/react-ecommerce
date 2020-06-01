import React from "react";
import "./styles.scss";
import Buttons from "../../component/forms/Button";
import { signInWithGoogle, auth } from "./../../firebase/utils";

import FormInput from "../forms/FormInput";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="signin">
        <div className="wrap">
          <h2>LogIn</h2>
          <div className="form-wrap">
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email Address"
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                handleChange={this.handleChange}
              />
              <Buttons type="submit">Sign In</Buttons>
              <div className="social-signin">
                <div className="row">
                  <Buttons onClick={signInWithGoogle}>
                    Signin with Google
                  </Buttons>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
