import React from "react";

class Authorised extends React.Component {
  state = {
    time: "loading..."
  };
  formatTime = () => {
    let time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    this.setState({ time });
  };
  render() {
    return (
      <div>
        You are an authorised user .you can see the current time
        <p style={{ color: "green" }}>{this.state.time}</p>
      </div>
    );
  }
  componentDidMount() {
    setInterval(this.formatTime, 1000);
  }
}

export default Authorised;
