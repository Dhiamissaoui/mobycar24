import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeControlPhone } from '@fortawesome/free-solid-svg-icons';
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
            <div className={styles.fontM}>Get in Touch</div>
            <p className={styles.fontR}>Lorem ipsum dolor sit amet consectetur. Volutpat eu elit interdum in. Adipiscing urna diam pellentesque.</p>
          </div>
          <div className={styles.partTwo}>
            <div className={styles.info}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.logo}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>

              <div>
                <h3 className={styles.fontR}>Email address</h3>
                <p className={styles.test}>info@email.com</p>
              </div>
            </div>

            <div className={styles.info}>
              <FontAwesomeIcon icon={faVolumeControlPhone} className={styles.logoNormal} />
              <div>
                <h3 className={styles.fontR}>Phone number</h3>
                <p className={styles.test}>+44 102 535 1269</p>
              </div>
            </div>

            <div className={styles.info}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.logo}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              <div>
                <h3 className={styles.fontR}>Address</h3>
                <p className={styles.test}>2996 Littel River, Tiaburgh 25811</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.area}>
            <div className={styles.labForm}>Full Name</div>
            <input className={styles.inpForm} placeholder='Enter Full Name' type='text' />
          </div>
          <div className={styles.area}>
            <div className={styles.labForm}>Booking ID</div>
            <input className={styles.inpForm} placeholder='Enter Booking ID' type='number' />
          </div>
          <div className={styles.area}>
            <div className={styles.labForm}>Email address</div>
            <input className={styles.inpForm} placeholder='Enter Email Address' type='email' />
          </div>
          <div className={styles.area}>
            <div className={styles.labForm} >Description</div>
            <textarea className={styles.textForm} placeholder='Type here...' />
          </div>
          <button className={styles.submit} type='submit'>Submit</button>
        </div>
      </div>
    </>


  );
};

export default ContactUs;