import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <div className="container">
          <h1 className="banner__heading">The Kids playground</h1>
          <p className="banner__desc">
            The Playground, designed by nonprofit organization to be accessible
            for all children
          </p>
          <div className="banner__buttons">
            <a href="index.html" className="btn btn--border btn--rounded">
              Explore
            </a>
            <a href="index.html" className="btn btn--gradient btn--rounded btn--shadow">
              Buy Tickets
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
