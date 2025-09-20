
import { Link } from 'react-router-dom';
import { useState } from 'react';
import audi from '../images/audi_car.png'
import style from '../styles/Reset.module.css';

import Img24 from '../images/24 image logo .png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash

} from '@fortawesome/free-solid-svg-icons';


function Login() {

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
        <div className={style.moby}>MOBY</div>
        <div className={style.car}>CAR</div>
        <img className={style.number} src={Img24} alt='ddd' />
        <div className={style.line}></div>
        <img className={style.bg} alt='bg' src={audi} />
      </div>
      <div className={style.Ssection}>
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
      </div>
    </div >
  );
}

export default Login;