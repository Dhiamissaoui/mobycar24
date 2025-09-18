import { Link } from "react-router-dom";
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-brand']}>
          <h2>MOBYCAR24</h2>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur. Adipiscing Morbi Tellus Arcu Sed Morbi. Nihil Amet<br />
            Dignissim in Ac Duis Eliam Consectetur Dolor Utilities.
          </p>
        </div>

        <div className={styles['footer-links']}>
          <div className={styles['links-column']}>
            <Link className={styles['link-footer']} to='/brand'><h3>Brand</h3></Link>
            <Link className={styles['link-footer']} to='/rent'><h3>Rent A Car</h3></Link>
            <Link className={styles['link-footer']} to='/privacy-pol'><h3>Privacy Policy</h3></Link>
            <Link className={styles['link-footer']} to='/terms-cond'><h3>Terms & Condition</h3></Link>
            <Link className={styles['link-footer']} to='/faq'><h3>FAQs</h3></Link>
            <Link className={styles['link-footer']} to='/contact'><h3>Contact Us</h3></Link>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <p>© 2024 Mobycar24. All rights reserved.</p>
          <p>Website Design by Wedaktines</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;