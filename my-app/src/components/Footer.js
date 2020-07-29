import React, { Component } from "react";
import "../css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="container footer__container">
          <div class="footer__item">
            <a href="index.html" class="logo">
              <span class="logo__text">Play</span>ground
            </a>
          </div>
          <div class="footer__item">
            <a href="index.html" class="footer__link">
              Events for Kids
            </a>
            <a href="index.html" class="footer__link">
              Events for Parents
            </a>
            <a href="index.html" class="footer__link">
              Events for Guests
            </a>
            <a href="index.html" class="footer__link">
              Game & Gifts
            </a>
          </div>
          <div class="footer__item">
            <a href="index.html" class="footer__link">
              Events
            </a>
            <a href="index.html" class="footer__link">
              Who We Are
            </a>
            <a href="index.html" class="footer__link">
              Services
            </a>
            <a href="index.html" class="footer__link">
              Features
            </a>
            <a href="index.html" class="footer__link">
              Reviews
            </a>
          </div>
          <div class="footer__item">
            <a href="index.html" class="footer__link">
              Careers
            </a>
            <a href="index.html" class="footer__link">
              Press
            </a>
            <a href="index.html" class="footer__link">
              Help
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
