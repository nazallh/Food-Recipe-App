import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section id="Foot">
      
      {/* Top Footer Content */}
      <div className="footer-top">
        {/* About Section */}
        <div className="footer-section">
          <h2 className="footer-title">Epicurious</h2>
          <p className="footer-text">
            Since 1995, Epicurious has been the ultimate food resource for the
            home cook, with daily kitchen tips, fun cooking videos, and, oh
            yeah, over 33,000 recipes.
          </p>
          <div className="footer-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaYoutube />
            <FaInstagram />
          </div>
          </div>

        {/* More from Epicurious */}
        <div className="footer-section">
          <h3 className="footer-subtitle">More from Epicurious</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">The Epicurious App</a></li>
            <li><a href="#">Newsletters</a></li>
            <li><a href="#">Subscription FAQs</a></li>
            <li><a href="#">Gift Guides</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Connect</h3>
          <ul className="footer-links">
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Center</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Masthead</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <a href="#">User Agreement</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Your California Privacy Rights</a>
          <a href="#">Accessibility Help</a>
          <a href="#">Condé Nast Store</a>
          <a href="#" className="highlight">PRIVACY INFORMATION</a>
        </div>
        <div className="footer-bottom-right">
          <p>
            © 2025 Condé Nast. All rights reserved. <br />
            Epicurious may earn a portion of sales through affiliate links. No
            material may be reproduced without permission.
          </p>
        </div>
      </div>
      </section>
    </footer>
  );
};

export default Footer;
