import React, { Component } from "react";
import ".././style/css/style.css";

class Home extends Component {
  render() {
    document.addEventListener("DOMContentLoaded", function(event) {
      var text = ["WELCOME.", "HI.", "HELLO."];

      function typeWriter(text, i, functionCallBack) {
        if (i < text.length) {
          document.querySelector(".header__text").innerHTML =
            text.substring(0, i + 1) +
            '<span aria-hidden="true" className="header__text--span">|</span>';

          setTimeout(function() {
            typeWriter(text, i + 1, functionCallBack);
          }, 200);
        } else if (typeof functionCallBack == "function") {
          setTimeout(functionCallBack, 1000);
        }
      }
      function startAnimation(i) {
        if (typeof text[i] == "undefined") {
          setTimeout(function() {
            startAnimation(0);
          }, 1000);
        }
        if (i < text.length) {
          typeWriter(text[i], 0, function() {
            startAnimation(i + 1);
          });
        } else {
          i = 0;
        }
      }
      startAnimation(0);
    });

    return (
      <div className="header">
        <div className="header__container">
          <p className="header__text header__text--bold">WELCOME</p>
          <h1 className="header__label">Design Studio Website</h1>
          <p className="header__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh
            augue, suscipit a, scelerisque sed, lacinia in, mi.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
