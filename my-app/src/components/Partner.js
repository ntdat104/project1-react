import React, { Component } from "react";
import "../css/Partner.css";

class Partner extends Component {
  render() {
    return (
      <section className="partner">
        <div className="container partner__container">
          <h2 className="partner__title">Our business partners</h2>
          <ul className="partner__list">
            <li className="partner__item">
              <img
                src="./images/logo-amazon.png"
                alt="amazon"
                className="partner__logo"
              />
            </li>
            <li className="partner__item">
              <img
                src="./images/logo-netflix.png"
                alt="netflix"
                className="partner__logo"
              />
            </li>
            <li className="partner__item">
              <img
                src="./images/logo-newyork.png"
                alt="newyork"
                className="partner__logo"
              />
            </li>
            <li className="partner__item">
              <img
                src="./images/logo-stripe.png"
                alt="stripe"
                className="partner__logo"
              />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Partner;
