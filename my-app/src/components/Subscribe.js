import React, { Component } from "react";

class Subscribe extends Component {
  render() {
    return (
      <section className="subscribe">
        <div className="container subscribe__container">
          <h2 className="subscribe__title">
            Subscribe to our newsletter to get future offers
          </h2>
          <div className="subscribe__info">
            <form action="GET" className="subscribe__form">
              <input
                type="text"
                className="subscribe__input"
                placeholder="Enter your email"
              />
              <button className="subscribe__button">Subscribe</button>
            </form>
            <div className="subscribe__social">
              <i className="fa fa-facebook-square" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-youtube-play" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Subscribe;
