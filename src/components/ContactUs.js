import back from '../images/bg ecobost.png';
import styles from '../styles/ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles['contact-wrapper']}>
      <div className={styles['backgroundTextCont']}>
        <div className={styles['backgroundText']}>get in</div>
        <div className={styles['backgroundText']}>touch</div>
      </div>
      <img src={back} className={styles['background-img']} alt="background" />
      <section className={styles['cont']}>
        <div className={styles['head']}>
          <h1 className='mb-0 fw-bold'>Contact us</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Adipiscing morbi tellus arcu sed morbi. Nibh amet dignissim.</p>
        </div>

        <div className={styles['form-grid']}>
          <div className={styles['form-group']}>
            <div className={styles['text']}>First Name</div>
            <input type="text" className={styles['backcolor']} placeholder="Enter First Name" />
            <div className={styles['form-subgroup']}>
              <div className={styles['text']}>Booking ID</div>
              <input type="text" className={styles['backcolor']} placeholder="Enter Booking ID" />
            </div>
          </div>

          <div className={styles['form-group']}>
            <div className={styles['text']}>Last Name</div>
            <input type="text" className={styles['backcolor']} placeholder="Enter Last Name" />
            <div className={styles['form-subgroup']}>
              <div className={styles['text']}>Email Address</div>
              <input type="email" className={styles['backcolor']} placeholder="Enter Email Address" />
            </div>
          </div>

          <div className={styles['form-group'] + ' ' + styles['full-width']}>
            <div className={styles['text']}>Description</div>
            <textarea className={styles['txtArea']} placeholder="Enter Booking ID"></textarea>
          </div>
        </div>
        <button className={styles['submit-btn']}>Submit</button>
      </section>

    </div>
  );
};

export default ContactUs;