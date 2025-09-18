import { Link } from "react-router-dom";
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-brand']}>
          <div className={styles['title']}>MOBYCAR24</div>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur. Adipiscing Morbi Tellus Arcu Sed Morbi. Nihil Amet<br />
            Dignissim in Ac Duis Eliam Consectetur Dolor Utilities.
          </p>
        </div>

        <div className={styles['footer-links']}>
          <div className={styles['links-column']}>
            <Link className={styles['link-footer']} to='/brand'><h3 style={{ border: 'none' }}>Brand</h3></Link>
            <Link className={styles['link-footer']} to='/rent'><h3>Rent A Car</h3></Link>
            <Link className={styles['link-footer']} to='/privacy-pol'><h3>Privacy Policy</h3></Link>
            <Link className={styles['link-footer']} to='/terms-cond'><h3>Terms & Condition</h3></Link>
            <Link className={styles['link-footer']} to='/faq'><h3>FAQs</h3></Link>
            <Link className={styles['link-footer']} to='/contact'><h3>Contact Us</h3></Link>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <div>© 2024 Mobycar24. All rights reserved.</div>
          <div className={styles['test']}>Website Design by Wedaktines</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;