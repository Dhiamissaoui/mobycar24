
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons';

import bg from '../../images/LandCruiser.png'
import style from '../../styles/ServiceProvider/ResetS.module.css';

import Img24 from '../../images/24 image logo .png'
function ResetS() {
  const [activeEye1, setActiveEye1] = useState(true);
  const [activeEye2, setActiveEye2] = useState(true);

  const toggleEye1 = () => {
    setActiveEye1(prev => !prev);
  };

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
        <img className={style.bg} alt='bg' src={bg} />
      </div>
      <div className={style.Ssection}>
        <div className={style.header}>
          <div className={style.headerTitle}>Reset Password</div>
          <div className={style.headerSubtitle}>Lorem ipsum dolor sit amet consectetur volutpat eu.</div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <div className={style.label}>New Password</div>
            <div>
              <input type={activeEye1 ? 'password' : 'text'} placeholder='************' className={style.inputReset} />
              <FontAwesomeIcon icon={activeEye1 ? faEye : faEyeSlash} onClick={toggleEye1} className={style.iconEye} />
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <div className={style.label}>Confirm Password</div>
            <div>
              <input type={activeEye2 ? 'password' : 'text'} placeholder='************' className={style.inputReset} />
              <FontAwesomeIcon icon={activeEye2 ? faEye : faEyeSlash} onClick={toggleEye2} className={style.iconEye} />
            </div>
          </div>
        </div>
        <Link to='/boarding' className={style.submit} type='submit'>Save</Link>
      </div>
    </div>
  );
}

export default ResetS;