import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import audi from '../images/audi_car.png';
import style from '../styles/Login.module.css';
import Img24 from '../images/24 image logo .png'
import lineMoveBack from '../images/resposiveImgs/Group 1707487174.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash

} from '@fortawesome/free-solid-svg-icons';


// Mock user data - in a real app, this would come from a backend

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');
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

  const [activeEye1, setActiveEye1] = useState(true);

  const toggleEye1 = () => {
    setActiveEye1(prev => !prev);
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
        <div className={style.header}>
          <h1 className={style.font}>Login</h1>
          <center><p className={style.paragraph} style={{ color: '#919191' }}>Lorem ipsum dolor sit amet consectetur. Egestas orci turpis amet ornare ultrices eros.</p></center>
        </div>


        <form >
          <div className={style.box}>
            <div className={style.inp}>
              <h3 className={style.lab}>Email</h3>
              <input
                type="email"
                placeholder={isMobile ? 'loremisum@gmail.com' : 'Enter Email Address'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${style.placeholder} ${style.inputField}`}
              />
            </div>
          </div>
          <div className={style.box}>
            <div className={style.inp}>
              <h3 className={style.lab}>Password</h3>
              <div>
                <input
                  placeholder="***************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${style.placeholder} ${style.passEye} ${style.inputField}`} type={activeEye1 ? 'password' : 'text'}
                />
                <FontAwesomeIcon icon={activeEye1 ? faEye : faEyeSlash} onClick={() => toggleEye1('false')} className={style.iconEye} />
              </div>
            </div>
            {error && <div className={style.error}>{error}</div>}
          </div>
          <div className={style.box}>
            <div className={style.inp}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className="form-check d-flex align-items-center  gap-2 w-50">
                  <input className="form-check-input mt-0" type="checkbox" style={{ transform: 'scale(0.8)', cursor: 'pointer', display: 'flex', alignSelf: 'center' }} value="" id="flexCheckDefault" />
                  <label className="form-check-label d-flex align-self-end" htmlFor="flexCheckDefault" style={{ color: '#919191', fontSize: '14px' }}>
                    Remember me
                  </label>
                </div>
                {isMobile ? (
                  <button className={style.forget} type="button" onClick={() => navigate('/HomePageResponsive', { state: { activeTab: 'forgot' } })}>
                    Forgot Password?
                  </button>
                ) : (
                  <Link to="/Forgot" className={style.forget} type="submit">
                    Forgot Password?
                  </Link>
                )}
              </div>
            </div>
          </div>

          {isMobile ? <button type="button" className={style.submit} onClick={() => navigate('/HomePageResponsive', { state: { activeTab: 'home' } })}>
            Login
          </button> : <Link to="/profile" className={style.submit} type="submit">Login</Link>}
        </form>

        <div className={style.check_cont}>
          <p className={style.paragraph} style={{ color: '#919191', fontSize: '15px' }}>Don't have an account?</p>
          <Link className={style.signIn} to="/SignIn">Sign UP</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;