import React, { Component } from "react";
import "../css/Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container header__container">
          <a href="index.html" className="logo">
            <span className="logo__text">Play</span>ground
          </a>
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <a href="index.html" className="header__menu-link">
                  Events
                </a>
              </li>
              <li className="header__menu-item">
                <a href="index.html" className="header__menu-link">
                  Pricing
                </a>
              </li>
              <li className="header__menu-item">
                <a href="index.html" className="header__menu-link">
                  Blog
                </a>
              </li>
              <li className="header__menu-item">
                <a
                  href="index.html"
                  className="header__menu-link btn btn--border btn--rounded"
                >
                  Log in
                </a>
              </li>
            </ul>
          </nav>
          <a href="index.html" className="header__bar" onclick="myFunction()">
            <i className="fa fa-bars" aria-hidden="true" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
