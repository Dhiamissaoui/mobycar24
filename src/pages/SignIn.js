import { Link } from 'react-router-dom';
import { useState } from 'react';

import audi from '../images/audi_car.png'
import style from '../styles/SignIn.module.css';
import Img24 from '../images/24 image logo .png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash

} from '@fortawesome/free-solid-svg-icons';

function SignIn() {

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
          <h1 className={style.font}>Sign Up</h1>
          <center><p style={{ color: '#919191' }}>Lorem ipsum dolor sit amet consectetur volutpat eu.</p></center>
        </div>
        <div className={style.boxSep}>
          <div className={style.inpF}>
            <h3 className={style.lab}>First Name</h3>
            <input type='text' className={style.placeholder} placeholder='Enter  First Name' />
          </div>
          <div className={style.inpS}>
            <h3 className={style.lab}>Last Name</h3>
            <input type='text' className={style.placeholder} placeholder='Enter  Last Name' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Email</h3>
            <input type='email' className={style.placeholder} placeholder='Enter  Email Addresse' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Address</h3>
            <input type='text' className={style.placeholder} placeholder='Enter  adrdess' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Driving license number</h3>
            <input type='text' className={style.placeholder} placeholder='Enter  Driving number' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <div className={style.file_upload}>
              <h3 className={style.lab}>Upload Business Registration Details(optional)</h3>
              <div className={style.file_upload_container}>
                <label className={style.file_upload_label}>
                  <div className={style.file_upload_text}>Maximum Size 5MB</div>
                  <div className={style.file_upload_button}>Upload</div>
                  <input
                    type="file"
                    className={style.file_upload_input}
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
              <input className={`${style.placeholder} ${style.passEye}`} type={activeEye1 ? 'password' : 'text'} placeholder='Enter Password' />
              <FontAwesomeIcon icon={activeEye1 ? faEye : faEyeSlash} onClick={() => toggleEye1('false')} className={style.iconEye} />
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Confirm password</h3>
            <div >
              <input className={`${style.placeholder} ${style.passEye}`} type={activeEye2 ? 'password' : 'text'} placeholder='Enter Password' />
              <FontAwesomeIcon icon={activeEye2 ? faEye : faEyeSlash} onClick={() => toggleEye2('false')} className={style.iconEye} />
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp} id={style.test}>
            <input className="form-check-input mt-0" type="checkbox" style={{ transform: 'scale(0.8)', cursor: 'pointer', display: 'flex', alignSelf: 'center' }} value="" id="flexCheckDefault" />
            <div style={{ color: 'rgba(177, 177, 177, 1)' }}>Accept terms & conditions and privacy policy of Mobycar24</div>
          </div>
        </div>
        <Link to='/login' className={style.submit} type='submit'>Sign Up</Link>
        <div className={style.check_cont}>
          <p style={{ color: '#919191', fontSize: '15px' }}>Already have an account?</p><Link className={style.signIn} to='/login'>Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;