import React, { Component } from "react";
import ".././style/css/style.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__contact">
          <p className="footer__text">
            © 2018 Copyright. All rights reserved.
            <br />
            <span className="footer__text footer__text--span">
              Project based on design : https://pl.pinterest.com/pin/
              151363237456429067/
            </span>
          </p>
          <div className="footer__icons">
            <i className="fab fa-facebook-f footer__icon" />
            <i className="fab fa-linkedin-in footer__icon" />
            <i className="fab fa-twitter footer__icon" />
            <i className="fab fa-instagram footer__icon" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
