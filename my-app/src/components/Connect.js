import React, { Component } from "react";

class Connect extends Component {
  render() {
    return (
      <section className="connect">
        <div className="container connect__container">
          <h2 className="connect__title">For kids who enjoy themeselves</h2>
          <p className="connect__notice">
            Connect with us <span>@playground</span>
          </p>
          <ul className="connect__list">
            <li className="connect__item">
              <img src="./images/img8.png" alt="" className="connect__image" />
            </li>
            <li className="connect__item">
              <img src="./images/img9.png" alt="" className="connect__image" />
            </li>
            <li className="connect__item">
              <img src="./images/img10.png" alt="" className="connect__image" />
            </li>
            <li className="connect__item">
              <img src="./images/img11.png" alt="" className="connect__image" />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Connect;
