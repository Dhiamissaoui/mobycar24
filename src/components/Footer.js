import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>MOBYCAR24</h2>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur. Adipiscing Morbi Tellus Arcu Sed Morbi. Nihil Amet<br />
            Dignissim in Ac Duis Eliam Consectetur Dolor Utilities.
          </p>
        </div>

        <div className="footer-links">
          <div className="links-column">
            <Link  to='/brand'><h3 className="x">Brand</h3></Link>
            <Link  to='/rent'><h3>Rent A Car</h3></Link>
            <Link  to='/privacy-pol'><h3>Privacy Policy</h3></Link>
            <Link  to='/terms-cond'><h3>Terms & Condition</h3></Link>
            <Link  to='/faq'><h3>FAQs</h3></Link>
            <Link  to='/contact'><h3>Contact Us</h3></Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Mobycar24. All rights reserved.</p>
          <p>Website Design by Wedaktines</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;