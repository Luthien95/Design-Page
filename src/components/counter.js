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
      <div className="counter-section">
        <Waypoint
          onEnter={this._setMessage.bind(this, "Waypoint entered")}
          onLeave={this._setMessage.bind(this, "Waypoint left")}
        />
        <div className="counter-section__single-count">
          <h1 className="counter-section__header">{this._renderMessage(5)}</h1>
          <p className="counter-section__text">YEARS AS A WEB DESIGNER</p>
        </div>
        <div className="counter-section__single-count">
          <h1 className="counter-section__header">
            {this._renderMessage(423)}
          </h1>
          <p className="counter-section__text">PROJECTS MADE</p>
        </div>
        <div className="counter-section__single-count">
          <h1 className="counter-section__header">{this._renderMessage(21)}</h1>
          <p className="counter-section__text">MEMBERS IN TEAM</p>
        </div>
        <div className="counter-section__single-count">
          <h1 className="counter-section__header">
            {this._renderMessage(1467)}
          </h1>
          <p className="counter-section__text">CUPS OF COFFEE</p>
        </div>
      </div>
    );
  }
}

export default Counter;
