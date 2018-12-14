import React, { Component } from "react";
import ".././style/css/style.css";

class Footer extends Component {
  render() {
    return (
      <footer className="c-footer">
        <div className="c-footer__contact">
          <p>
            © 2018 Copyright. All rights reserved.
            <br />
            <p>
              Project based on design : https://pl.pinterest.com/pin/
              151363237456429067/
            </p>
          </p>
          <div className="o-contact_icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-linkedin-in" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
