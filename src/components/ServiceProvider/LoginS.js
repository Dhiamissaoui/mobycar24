
import { Link } from 'react-router-dom';

import audi from '../../images/LandCruiser.png';
import style from '../../styles/ServiceProvider/LoginS.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash

} from '@fortawesome/free-solid-svg-icons';
import Img24 from '../../images/24 image logo .png'
import { useState } from 'react';
function LoginS() {

  const [activeEye1, setActiveEye1] = useState(true);

  const toggleEye1 = () => {
    setActiveEye1(prev => !prev);
  };
  return (
    <div className={style.container}>
      <div className={style.Fsection}>
        <div className={style.moby}>MOBY</div>
        <div className={style.car}>CAR</div>
        <img className={style.number} src={Img24} alt='ddd' />
        <div className={style.line}></div>
        <img className={style.bg} src={audi} alt="Audi car" />
      </div>
      <div className={style.Ssection}>
        <div className={style.header}>
          <div className={style.font}>Login</div>
          <center>
            <p style={{ color: '#919191' }}>Please fill in this form to login your account.</p>
          </center>
        </div>


        <form>
          <div className={style.box}>
            <div className={style.inp}>
              <div className={style.lab}>Email Address</div>
              <input
                type="email"
                className={style.placeholderColor}
                placeholder="Enter Email Address"
              />
            </div>
          </div>
          <div className={style.box}>
            <div className={style.inp}>
              <div className={style.lab}>password</div>
              <div>
                <input className={`${style.placeholderColor} ${style.passEye}`} type={activeEye1 ? 'password' : 'text'} placeholder='Enter Password' />
                <FontAwesomeIcon icon={activeEye1 ? faEye : faEyeSlash} onClick={() => toggleEye1('false')} className={style.iconEye} />
              </div>
            </div>
          </div>
          <div className={style.box}>
            <div className={style.inp}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className="form-check d-flex align-items-center  gap-2 w-50">
                  <input className="form-check-input" type="checkbox" style={{ transform: 'scale(0.8)', cursor: 'pointer', display: 'flex', alignSelf: 'center' }} value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault" style={{ color: '#A6A6A6', fontSize: '14px', fontWeight: '100' }}>
                    Remember Me
                  </label>
                </div>
                <Link to="/forgetS" className={style.forget} type="submit">
                  Forget my password?
                </Link>
              </div>
            </div>
          </div>

          <Link type="submit" to='/boarding' className={style.submit}>
            Login
          </Link>
        </form>

        <div className={style.check_cont}>
          <p>Don't have an account?</p>
          <Link style={{ color: 'rgba(158, 77, 182, 1)', fontWeight: 'bold', textDecoration: 'none' }} to="/service">Sign Up</Link>
        </div>
      </div >
    </div >
  );
};
export default LoginS;