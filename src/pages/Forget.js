import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX,  faEnvelope } from '@fortawesome/free-solid-svg-icons';

import audi from '../images/audi_car.png'
import styles from '../styles/Forget.module.css';


function Forget() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailSent(true);
  }

  if (emailSent) {
    return (
      <div className={styles.container}>
        <div className={styles.FsectionSent}>
          <div className={styles.moby}>MOBY</div>
          <div className={styles.car}>CAR</div>
          <div className={styles.number}>24</div>
          <div className={styles.line}></div>
          <img className={styles.bg} src={audi} alt="Audi car" />
        </div>
        <div className={styles.SsectionSentOne}>
          <div className={styles.header}>
            <center><h1>Forgot Password</h1></center>
            <center><p>Lorem ipsum dolor sit amet consectetur volutpat eu.</p></center>
          </div>
          <form onSubmit={handleSubmit}>  {/* Add this form tag */}
            <div className={styles.box}>
              <div className={styles.inp}>
                <h3>Email Address</h3>
                <input type='email' placeholder='Enter Email Addresse' required />
              </div>
            </div>
            <button className={styles.Continue} type='submit'>Continue</button>  {/* Fixed button */}
          </form>  {/* Close form tag */}
        </div>
        <div className={styles.SsectionSentTwo}>
          <div className={styles.header}>
            <FontAwesomeIcon icon={faX} className={styles.x} />
          </div>
          
          <div className={styles.confirmationBox}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.envolope}/>
            <p className={styles.confirmationText}>We have sent a link to your email</p><br/>
            <p className={styles.confirmationSubtext}>
              Lorem Ipsum Dolor Sit Amet Consectetur. Congue Sed Sed Eget Id Blandit
              Pretium Penatibus Quam.
            </p>
          </div>
          
          <Link to="/reset" className={styles.okButton}>OK</Link>
        </div>
      </div>
    );
  }
  return(
  <div className={styles.container}>
    <div className={styles.Fsection}>
        <div className={styles.moby}>MOBY</div>
        <div className={styles.car}>CAR</div>
        <div className={styles.number}>24</div>
        <div className={styles.line}></div>
        <img className={styles.bg} alt='bg' src={audi}/>
    </div>
    <div className={styles.Ssection}>
      <div className={styles.header}>
        <center><h1>Forgot Password</h1></center>
        <center><p>Lorem ipsum dolor sit amet consectetur volutpat eu.</p></center>
      </div>
      <form onSubmit={handleSubmit}>  {/* Add this form tag */}
        <div className={styles.box}>
          <div className={styles.inp}>
            <h3>Email Address</h3>
            <input type='email' placeholder='Enter Email Addresse' required />
          </div>
        </div>
        <button className={styles.Continue} type='submit'>Continue</button>  {/* Fixed button */}
      </form>  {/* Close form tag */}
    </div>
  </div>
);
}

export default Forget;