import React from "react";
import { Route, Switch } from "react-router-dom";

//layout
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";

//pages
import Homepage from "./pages/homepage";
import Registration from "./pages/registration";
import "./default.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomepageLayout>
                <Homepage />
              </HomepageLayout>
            )}
          />
          <Route
            path="/register"
            render={() => (
              <MainLayout>
                <Registration />
              </MainLayout>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
