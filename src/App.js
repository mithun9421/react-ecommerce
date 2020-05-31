import React from "react";
import Header from "./component/index";
import Homepage from "./pages/homepage";
import "./default.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <Homepage />
        </div>
      </div>
    );
  }
}

export default App;
