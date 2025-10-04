import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import audi from '../images/audi_car.png'
import style from '../styles/SignIn.module.css';
import Img24 from '../images/24 image logo .png'

import lineMoveBack from '../images/resposiveImgs/Group 1707487174.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
  faX,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

function SignIn() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [thanksActive, setThanksActive] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const [activeEye1, setActiveEye1] = useState(true);

  const toggleEye1 = () => {
    setActiveEye1(prev => !prev);
  };
  const [activeEye2, setActiveEye2] = useState(true);

  const toggleEye2 = () => {
    setActiveEye2(prev => !prev);
  };
  return (
    <div className={style.container}>
      <div className={style.Fsection}>
        {!isMobile && (
          <>
            <div className={style.moby}>MOBY</div>
            <div className={style.car}>CAR</div>
            <img className={style.number} src={Img24} alt='ddd' />
          </>
        )}
        {isMobile && (
          <div>
            <div className={style.mobileBrandText}>MOBY<span style={{ borderBottom: '1px solid white', paddingBottom: '2px' }}>CAR24</span></div>
            <img src={lineMoveBack} style={{ height: '300px', transform: 'translateY(-30%)', border: '1px solid black', width: '100%' }} alt='lineMoveBack' />
          </div>


        )}
        {!isMobile && <div className={style.line}></div>}
        <img className={`${style.bg} ${isMobile ? style.mobileCar : ''}`} alt='bg' src={audi} />
        {isMobile && <div className={style.mobileBackgroundLine}></div>}
      </div>
      <div className={style.Ssection}>
        <div className={style.header}>
          <h1 className={style.font}>Sign Up</h1>
          <center><p className={style.paragraph} style={{ color: '#919191' }}>Lorem ipsum dolor sit amet consectetur volutpat eu.</p></center>
        </div>
        <div className={style.boxSep}>
          <div className={style.inpF}>
            <h3 className={style.lab}>First Name</h3>
            <input type='text' className={`${style.placeholder} ${style.inputField}`} placeholder={isMobile ? 'John' : 'Enter  First Name'} />
          </div>
          <div className={style.inpS}>
            <h3 className={style.lab}>Last Name</h3>
            <input type='text' className={`${style.placeholder} ${style.inputField}`} placeholder={isMobile ? 'Doe' : 'Enter  Last Name'} />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Email</h3>
            <input type='email' className={`${style.placeholder} ${style.inputField}`} placeholder={isMobile ? 'john.doe@example.com' : 'Enter  Email Addresse'} />
          </div>
        </div>
        {!isMobile && (
          <div className={style.box}>
            <div className={style.inp}>
              <h3 className={style.lab}>Phone Number</h3>
              <input type='number' className={`${style.placeholder} ${style.inputField}`} placeholder={isMobile ? '000 1234 567 897' : 'Enter  Phone Number'} />
            </div>
          </div>
        )}
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Address</h3>
            <input type='text' className={`${style.placeholder} ${style.inputField}`} placeholder={isMobile ? '123 Main St, Anytown, USA' : 'Enter  adrdess'} />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Driving license number</h3>
            <input type='text' className={`${style.placeholder} ${style.inputField}`} placeholder='Enter  Driving number' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <div className={style.file_upload}>
              <h3 className={style.lab}>Upload driving license</h3>
              <div className={style.file_upload_container}>
                <label className={style.file_upload_label}>
                  <div className={style.file_upload_text}>Maximum size 5MB</div>
                  <div className={style.file_upload_button}>
                    {isMobile ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={style.uploadIcon}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                      </svg>
                    ) : (
                      "Upload"
                    )}
                  </div>
                  <input
                    type="file"
                    className={`${style.file_upload_input} ${style.fileInput}`}
                    accept="image/*,.pdf" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>password</h3>
            <div>
              <input className={`${style.placeholder} ${style.passEye} ${style.inputField}`} type={activeEye1 ? 'password' : 'text'} placeholder='Enter Password' />
              <FontAwesomeIcon icon={activeEye1 ? faEye : faEyeSlash} onClick={() => toggleEye1('false')} className={style.iconEye} />
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Confirm password</h3>
            <div >
              <input className={`${style.placeholder} ${style.passEye} ${style.inputField}`} type={activeEye2 ? 'password' : 'text'} placeholder='Enter Password' />
              <FontAwesomeIcon icon={activeEye2 ? faEye : faEyeSlash} onClick={() => toggleEye2('false')} className={style.iconEye} />
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp} id={style.test}>
            <input className="form-check-input mt-0" type="checkbox" style={{ transform: 'scale(0.8)', cursor: 'pointer', display: 'flex', alignSelf: 'center' }} value="" id="flexCheckDefault" />
            {
              isMobile ? (
                <div style={{ color: 'rgba(177, 177, 177, 1)', fontSize: '14px' }}>Accept Terms & Conditions and Privacy Policy</div>
              ) : (
                <div style={{ color: 'rgba(177, 177, 177, 1)', fontSize: '14px' }}>Accept terms & conditions and privacy policy of Mobycar24</div>
              )
            }
          </div>
        </div>
        {
          !isMobile ? (
            <Link to='/login' className={style.submit} type='submit'>Sign Up</Link>
          ) : (
            <button className={style.submit} type='submit' onClick={() => setThanksActive(true)}>Sign Up</button>
          )
        }

        <div className={style.check_cont}>
          <p className={style.paragraph} style={{ color: '#919191', fontSize: '15px' }}>Already have an account?</p>{!isMobile ? <Link className={style.signIn} to='/login'>Sign In</Link> : <button className={style.signIn} onClick={() => navigate('/HomePageResponsive', { state: { activeTab: 'login' } })}>Sign In</button>}
        </div>
      </div>

      {thanksActive && (
        <div className={style.overlay} onClick={() => setThanksActive(false)}>
          <div className={style.thankYouModal}>
            <button
              className={style.closeBtn}
              onClick={() => setThanksActive(false)}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
            <div className={style.checkIcon}>
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <h2 className={style.modalTitle}>Thank You!</h2>
            <p className={style.modalDescription}>Your request has been sent successfully</p>
            {isMobile ? (
              <button
                className={style.viewDetailsBtn}
                onClick={() => {
                  setThanksActive(false);
                  navigate('/HomePageResponsive', { state: { activeTab: 'viewDetails' } });
                }}
              >
                View details
              </button>
            ) : (
              <Link to="/confirmReserve" className={style.viewDetailsBtn}>
                View details
              </Link>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default SignIn;