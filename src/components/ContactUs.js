import React from "react";
import back from '../images/bg ecobost.png';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <img src={back} className="background-img" alt="background" />
      <section className="cont">
        <div className="head">
          <h1>Contact us</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Adipiscing morbi tellus arcu sed morbi. Nibh amet dignissim.</p>
        </div>
        
        <div className="form-grid">
          <div className="form-group">
            <h3>First Name</h3>
            <input type="text" placeholder="Enter First Name" />
            <div className="form-subgroup">
              <h3>Booking ID</h3>
              <input type="text" placeholder="Enter Booking ID" />
            </div>
          </div>
          
          <div className="form-group">
            <h3>Last Name</h3>
            <input type="text" placeholder="Enter Last Name" />
            <div className="form-subgroup">
              <h3>Email Address</h3>
              <input type="email" placeholder="Enter Email Address" />
            </div>
          </div>
          
          <div className="form-group full-width">
            <h3>Description</h3>
            <textarea placeholder="Enter Booking ID"></textarea>
          </div>
        </div>
        <button className="submit-btn">Submit</button>
      </section>
    </div>
  );
};

export default ContactUs;