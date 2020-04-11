import React, { Component } from "react";
import "./style/css/style.css";
import Home from "./components/home";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import About from "./components/about.js";
import Counter from "./components/counter.js";
import scrollToComponent from "react-scroll-to-component";

class App extends Component {
  componentDidMount() {
    scrollToComponent(this.refs.name, {
      offset: 1000,
      align: "top",
      duration: 1500
    });
  }

  render() {
    return (
      <div>
        <nav className="navigation">
          <div className="navigation__logotype">
            <p className="navigation__logotype-letter">A</p>
          </div>
          <ul className="navigation__list">
            <li
              onClick={() =>
                scrollToComponent(this.Home, {
                  offset: 0,
                  align: "top",
                  duration: 1500
                })
              }
              className="navigation__list-item"
            >
              Home
            </li>
            <li
              onClick={() =>
                scrollToComponent(this.Gallery, {
                  offset: -100,
                  align: "top",
                  duration: 1500
                })
              }
              className="navigation__list-item"
            >
              Gallery
            </li>
            <li
              onClick={() =>
                scrollToComponent(this.About, {
                  offset: -100,
                  align: "top",
                  duration: 1500
                })
              }
              className="navigation__list-item"
            >
              About us
            </li>
            <li
              onClick={() =>
                scrollToComponent(this.Contact, {
                  offset: 0,
                  align: "top",
                  duration: 1500
                })
              }
              className="navigation__list-item"
            >
              Contact
            </li>
          </ul>
        </nav>
        <Home
          ref={section => {
            this.Home = section;
          }}
        />
        <Gallery
          ref={section => {
            this.Gallery = section;
          }}
        />
        <About
          ref={section => {
            this.About = section;
          }}
        />
        <Counter />
        <Footer
          ref={section => {
            this.Contact = section;
          }}
        />
      </div>
    );
  }
}

export default App;
