import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import audi from '../images/audi_car.png'
import Img24 from '../images/24 image logo .png'
import lineMoveBack from '../images/resposiveImgs/Group 1707487174.png';
import styles from '../styles/Forget.module.css';




function Forget() {
  const [emailSent, setEmailSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Fsection}>
        {!isMobile && (
          <>
            <div className={styles.moby}>MOBY</div>
            <div className={styles.car}>CAR</div>
            <img className={styles.number} src={Img24} alt='ddd' />
          </>
        )}
        {isMobile && (
          <div>
            <div className={styles.mobileBrandText}>MOBY<span style={{ borderBottom: '1px solid white', paddingBottom: '2px' }}>CAR24</span></div>
            <img src={lineMoveBack} style={{ height: '300px', transform: 'translateY(-30%)', width: '100%' }} alt='lineMoveBack' />
          </div>
        )}
        {!isMobile && <div className={styles.line}></div>}
        <img className={`${styles.bg} ${isMobile ? styles.mobileCar : ''}`} alt='bg' src={audi} />
        {isMobile && <div className={styles.mobileBackgroundLine}></div>}
      </div>
      <div className={styles.Ssection}>
        {!isMobile ? (
          // Desktop version - keep unchanged
          <>
            <div className={styles.header}>
              <center><div className={styles.titleH}>Forgot Password</div></center>
              <center><p className={styles.descP}>Lorem ipsum dolor sit amet consectetur volutpat eu.</p></center>
            </div>
            <div >
              <div className={styles.box}>
                <div className={styles.inp}>
                  <div className={styles.labelEmail}>Email Address</div>
                  <input type='email' placeholder='Enter Email Addresse' className={styles.placeholder} required />
                </div>
              </div>
              <button className={styles.Continue} onClick={() => setEmailSent(true)} type='submit'>Continue</button>
            </div>
          </>
        ) : (
          // Mobile version - OTP verification
          <>
            <div className={styles.header}>
              <center><div className={styles.titleH}>Enter Verification OTP</div></center>
              <center><p className={styles.descP} style={{ color: '#919191' }}>We've sent a verification code to your registered mobile number. Please enter the code below to verify your account.</p></center>
            </div>
            <div className={styles.otpContainer}>
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={styles.otpInput}
                />
              ))}
            </div>
            {isMobile ? (
              <button className={styles.Continue} onClick={() => navigate('/HomePageResponsive', { state: { activeTab: 'resetpass' } })} type='submit'>Continue</button>
            ) : (
              <button className={styles.Continue} onClick={() => setEmailSent(true)} type='submit'>Continue</button>
            )}
            <div className={styles.resendContainer}>
              <span className={styles.resendText}>Didn't Receive OTP? </span>
              <button className={styles.resendButton} onClick={() => navigate('/HomePageResponsive', { state: { activeTab: 'forgot' } })}>
                Resend it
              </button>
            </div>
          </>
        )}
      </div>
      {emailSent && <div className={styles.overlay} />}
      {
        emailSent &&
        <div className={styles.containerPopUp}>
          <FontAwesomeIcon icon={faX} className={styles.x} onClick={() => setEmailSent(false)} />
          <div className='d-flex flex-column'>
            <div style={{ backgroundColor: 'rgba(158, 77, 182, 0.1)', width: '100px', height: '100px', position: 'relative', left: '40%', borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: 'rgba(158, 77, 182, 0.2)', borderRadius: '50%', padding: '20px', display: 'flex', alignSelf: 'center' }} height="80px" viewBox="0 -960 960 960" width="80px" fill="#9E4DB6"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h404q-4 20-4 40t4 40H160l320 200 146-91q14 13 30.5 22.5T691-572L480-440 160-640v400h640v-324q23-5 43-14t37-22v360q0 33-23.5 56.5T800-160H160Zm0-560v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" /></svg>
            </div>

            <div className={styles.confirmationText}>We have sent a link to your email </div><br />
            <p className={styles.confirmationSubtext}>
              Lorem Ipsum Dolor Sit Amet Consectetur. Congue Sed Sed Eget Id Blandit
              Pretium Penatibus Quam.
            </p>


            <Link to="/reset" className={styles.okButton}>OK</Link>

          </div>

        </div>
      }
    </div >
  );
}

export default Forget;