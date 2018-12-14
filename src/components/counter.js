import React, { Component } from "react";
import ".././style/css/style.css";
import Waypoint from "react-waypoint";
import CountUp from "react-countup";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  _setMessage(msg) {
    this.setState({ message: msg });
  }

  _renderMessage(val) {
    if (!this.state.message) {
      return;
    }

    return <CountUp start={0} end={val} duration={2} delay={1} />;
  }
  render() {
    return (
      <div className="c-counter">
        <Waypoint
          onEnter={this._setMessage.bind(this, "Waypoint entered")}
          onLeave={this._setMessage.bind(this, "Waypoint left")}
        />
        <div className="c-counter__single-count">
          <h1>{this._renderMessage(5)}</h1>
          <p>YEARS AS A WEB DESIGNER</p>
        </div>
        <div className="c-counter__single-count">
          <h1>{this._renderMessage(423)}</h1>
          <p>PROJECTS MADE</p>
        </div>
        <div className="c-counter__single-count">
          <h1>{this._renderMessage(21)}</h1>
          <p>MEMBERS IN TEAM</p>
        </div>
        <div className="c-counter__single-count">
          <h1>{this._renderMessage(1467)}</h1>
          <p>CUPS OF COFFEE</p>
        </div>
      </div>
    );
  }
}

export default Counter;
