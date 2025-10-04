
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import audi from '../images/audi_car.png'
import style from '../styles/Reset.module.css';

import Img24 from '../images/24 image logo .png'
import lineMoveBack from '../images/resposiveImgs/Group 1707487174.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash

} from '@fortawesome/free-solid-svg-icons';


function Reset() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [activeEye1, setActiveEye1] = useState(true);
  const [activeEye2, setActiveEye2] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleEye1 = () => {
    setActiveEye1(prev => !prev);
  };

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
            <img src={lineMoveBack} style={{ height: '300px', transform: 'translateY(-30%)', width: '100%' }} alt='lineMoveBack' />
          </div>
        )}
        {!isMobile && <div className={style.line}></div>}
        <img className={`${style.bg} ${isMobile ? style.mobileCar : ''}`} alt='bg' src={audi} />
        {isMobile && <div className={style.mobileBackgroundLine}></div>}
      </div>
      <div className={style.Ssection}>
        {!isMobile ? (
          // Desktop version - keep unchanged
          <>
            <div className={style.header}>
              <div className={style.titleH}>Reset Password</div>
              <center><p className={style.descP}>Lorem ipsum dolor sit amet consectetur volutpat eu.</p></center>
            </div>
            <div className={style.box}>
              <div className={style.inp}>
                <div className={style.labelPass}>New Password</div>
                <div >
                  <input className={`${style.placeholder} ${style.passEye}`} type={activeEye1 ? 'password' : 'text'} placeholder='Enter Password' />
                  <FontAwesomeIcon icon={activeEye1 ? faEye : faEyeSlash} onClick={() => toggleEye1('false')} className={style.iconEye} />
                </div>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.inp}>
                <div className={style.labelPass}>Confirm Password</div>
                <div >
                  <input className={`${style.placeholder} ${style.passEye}`} type={activeEye2 ? 'password' : 'text'} placeholder='Enter Password' />
                  <FontAwesomeIcon icon={activeEye2 ? faEye : faEyeSlash} onClick={() => toggleEye2('false')} className={style.iconEye} />
                </div>
              </div>
            </div>
            <Link to='/login' className={style.submit} type='submit'>Save</Link>
          </>
        ) : (
          // Mobile version - Reset Password form
          <>
            <div className={style.header}>
              <div className={style.titleH}>Reset Password</div>
              <center><p className={style.descP} style={{ color: '#919191' }}>Lorem ipsum dolor sit amet consectetur. Egestas orci turpis amet ornare ultrices eros.</p></center>
            </div>
            <div className={style.box}>
              <div className={style.inp}>
                <div className={style.labelPass}>New Password</div>
                <div >
                  <input className={`${style.placeholder} ${style.passEye}`} type={activeEye1 ? 'password' : 'text'} placeholder='Enter Password' />
                  <FontAwesomeIcon icon={activeEye1 ? faEye : faEyeSlash} onClick={() => toggleEye1('false')} className={style.iconEye} />
                </div>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.inp}>
                <div className={style.labelPass}>Confirm Password</div>
                <div >
                  <input className={`${style.placeholder} ${style.passEye}`} type={activeEye2 ? 'password' : 'text'} placeholder='Enter Password' />
                  <FontAwesomeIcon icon={activeEye2 ? faEye : faEyeSlash} onClick={() => toggleEye2('false')} className={style.iconEye} />
                </div>
              </div>
            </div>
            <button className={style.submit} onClick={() => navigate('/HomePageResponsive', { state: { activeTab: 'login' } })} type='submit'>Save</button>
          </>
        )}
      </div>
    </div >
  );
}

export default Reset;