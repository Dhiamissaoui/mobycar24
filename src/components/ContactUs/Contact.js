import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/ContactUs/ContactUs.module.css';

const ContactUs = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.ContactUs}>CONTACT US</div>
        <div className={styles.fcircle}></div>
        <div className={styles.scircle}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          <div className={styles.partOne}>
            <h1>Get in Touch</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Volutpat eu elit interdum in. Adipiscing urna diam pellentesque.</p>
          </div>
          <div className={styles.partTwo}>
            <div className={styles.info}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.logo}></FontAwesomeIcon>
              <div>
                <h3>Email address</h3>
                <p>info@email.com</p>
              </div>
            </div>
            <hr/>
            <div className={styles.info}>
              <FontAwesomeIcon icon={faPhone} className={styles.logo}></FontAwesomeIcon>
              <div>
                <h3>Phone number</h3>
                <p>+44 102 535 1269</p>
              </div>
            </div>
            <hr/>
            <div className={styles.info}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.logo}></FontAwesomeIcon>
              <div>
                <h3>Address</h3>
                <p>2996 Littel River, Tiaburgh 25811</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.area}>
            <label>Full Name</label>
            <input placeholder='Enter Full Name' type='text' />
          </div>
          <div className={styles.area}>
            <label>Booking ID</label>
            <input placeholder='Enter Booking ID' type='number'/>
          </div>
          <div className={styles.area}>
            <label>Email address</label>
            <input placeholder='Enter Email Address' type='email' />
          </div>
          <div className={styles.area}>
            <label>Description</label>
            <textarea placeholder='Type here...' cols={50} rows={5}  />
          </div>
          <button className={styles.submit} type='submit'>Submit</button>
        </div>
      </div>
    </>

    
  );
};

export default ContactUs;