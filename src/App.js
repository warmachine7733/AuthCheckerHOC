import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AuthChecker from "./hoc";
import Authorised from "./components/Authorised";
import Unauthorised from "./components/Unauthorised";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.isLoggedIn ? <Authorised /> : <Unauthorised />}
      </div>
    );
  }
}

export default AuthChecker(App);
