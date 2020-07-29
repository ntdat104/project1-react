import React, { Component } from "react";
import "../css/Category.css";

class Category extends Component {
  render() {
    return (
      <section className="category">
        <div className="container">
          <ul className="category__list">
            <li className="category__item">
              <img src="./images/img1.png" alt="" className="category__image" />
              <h3 className="category__name">Safe rides</h3>
              <a href="index.html" className="category__details">
                CC Certified <i className="fa fa-angle-right" />
              </a>
            </li>
            <li className="category__item">
              <img src="./images/img2.png" alt="" className="category__image" />
              <h3 className="category__name">Delicious Foods</h3>
              <a href="index.html" className="category__details">
                Gluten Free <i className="fa fa-angle-right" />
              </a>
            </li>
            <li className="category__item">
              <img src="./images/img3.png" alt="" className="category__image" />
              <h3 className="category__name">Entertainment</h3>
              <a href="index.html" className="category__details">
                Suitable for kids <i className="fa fa-angle-right" />
              </a>
            </li>
            <li className="category__item">
              <img src="./images/img4.png" alt="" className="category__image" />
              <h3 className="category__name">Ice-Cream</h3>
              <a href="index.html" className="category__details">
                No Synthetic <i className="fa fa-angle-right" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Category;
