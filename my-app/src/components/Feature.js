import React, { Component } from "react";

class Feature extends Component {
  render() {
    return (
      <section className="feature">
        <div className="container">
          <div className="feature__item">
            <div className="feature__image">
              <img src="./images/img5.png" alt="" />
            </div>
            <div className="feature__info">
              <h3 className="feature__title">
                The outdoor environment is age-appropriate to play
              </h3>
              <p className="feature__desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat magni quaerat dolore vel laboriosam sequi cum
                necessitatibus tempora dolor, quidem modi culpa praesentium
                doloribus suscipit iure voluptate quia at. Voluptate!
              </p>
              <ul className="feature-intro__list">
                <li className="feature-intro__item">
                  The Playground has been designed to feature a first responders
                  theme
                </li>
                <li className="feature-intro__item">
                  Fully-inclusive playground offers rich experiences
                </li>
                <li className="feature-intro__item">
                  The project is set to open Spring 2019
                </li>
              </ul>
              <a
                href="index.html"
                className="btn btn--gradient btn--rounded btn--shadow"
              >
                Visit Now
              </a>
            </div>
          </div>
          <div className="feature__item">
            <div className="feature__image">
              <img src="./images/img6.png" alt="" />
            </div>
            <div className="feature__info">
              <h3 className="feature__title">The best Aquapark for kids</h3>
              <p className="feature__desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat magni quaerat dolore vel laboriosam sequi cum
                necessitatibus tempora dolor, quidem modi culpa praesentium
                doloribus suscipit iure voluptate quia at. Voluptate!
              </p>
              <ul className="feature-intro__list">
                <li className="feature-intro__item feature-intro__item--circle">
                  The Fire Truck with Free Food
                </li>
                <li className="feature-intro__item feature-intro__item--circle">
                  The Police Car with Costume
                </li>
                <li className="feature-intro__item feature-intro__item--circle">
                  The Roller Coaster with Safety
                </li>
                <li className="feature-intro__item feature-intro__item--circle">
                  The Best Entertaing Events
                </li>
              </ul>
            </div>
          </div>
          <div className="feature__item">
            <div className="feature__image">
              <img src="./images/img7.png" alt="" />
            </div>
            <div className="feature__info">
              <h3 className="feature__title">Why we are the best</h3>
              <p className="feature__desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat magni quaerat dolore vel laboriosam sequi cum
                necessitatibus tempora dolor, quidem modi culpa praesentium
                doloribus suscipit iure voluptate quia at. Voluptate!
              </p>
              <ul className="feature-best__list">
                <li className="feature-best__item">
                  <i
                    className="fa fa-money feature-best__icon feature-best__icon--blue"
                    aria-hidden="true"
                  />
                  <h4 className="feature-best__title">
                    Non profitable organization
                  </h4>
                  <p className="feature-best__desc text-clamp text-clamp--2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat voluptates ex tempora velit aliquam iste adipisci
                    libero beatae repellat placeat quo suscipit, consequatur
                    tempore nisi itaque doloremque, nulla officiis voluptatibus.
                  </p>
                </li>
                <li className="feature-best__item">
                  <i
                    className="fa fa-handshake-o feature-best__icon feature-best__icon--orange"
                    aria-hidden="true"
                  />
                  <h4 className="feature-best__title">Customer Support</h4>
                  <p className="feature-best__desc text-clamp text-clamp--2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat voluptates ex tempora velit aliquam iste adipisci
                    libero beatae repellat placeat quo suscipit, consequatur
                    tempore nisi itaque doloremque, nulla officiis voluptatibus.
                  </p>
                </li>
                <li className="feature-best__item">
                  <i
                    className="fa fa-shield feature-best__icon feature-best__icon--purple"
                    aria-hidden="true"
                  />
                  <h4 className="feature-best__title">
                    High Safety &amp; Security
                  </h4>
                  <p className="feature-best__desc text-clamp text-clamp--2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat voluptates ex tempora velit aliquam iste adipisci
                    libero beatae repellat placeat quo suscipit, consequatur
                    tempore nisi itaque doloremque, nulla officiis voluptatibus.
                  </p>
                </li>
                <li className="feature-best__item">
                  <i
                    className="fa fa-pencil-square-o feature-best__icon feature-best__icon--green"
                    aria-hidden="true"
                  />
                  <h4 className="feature-best__title">
                    Well Designed and decorated
                  </h4>
                  <p className="feature-best__desc text-clamp text-clamp--2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat voluptates ex tempora velit aliquam iste adipisci
                    libero beatae repellat placeat quo suscipit, consequatur
                    tempore nisi itaque doloremque, nulla officiis voluptatibus.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
