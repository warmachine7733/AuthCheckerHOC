import React from "react";

const AuthChecker = NormalComponent => {
  return class extends React.Component {
    state = {
      isLoggedIn: false
    };
    apiCall = () => {
      this.setState({ isLoggedIn: Math.random() >= 0.5 });
    };

    render() {
      console.log("this.state", this.state);
      return (
        <div>
          <NormalComponent isLoggedIn={this.state.isLoggedIn} />
        </div>
      );
    }
    componentDidMount() {
      console.log("check if isLoggedIn");
      this.apiCall();
    }
  };
};
export default AuthChecker;
