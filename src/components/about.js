import React, { Component } from "react";
import ".././style/css/style.css";

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h1 class="about-section__header">
          <span className="about-section__header about-section__header--span">
            Who are we?
          </span>{" "}
          We are the biggest design studio in the word
        </h1>
        <p className="about-section__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh
          augue, suscipit a, scelerisque sed, lacinia in, mi. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a,
          scelerisque sed, lacinia in, mi. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque
          sed, lacinia in, mi.
        </p>
      </div>
    );
  }
}

export default About;
