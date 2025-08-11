import { Link } from 'react-router-dom';

import audi from '../images/audi_car.png'
import style from '../styles/SignIn.module.css';


function SignIn() {
  return(
    <div className={style.container}>
      <div className={style.Fsection}>
          <div className={style.moby}>MOBY</div>
          <div className={style.car}>CAR</div>
          <div className={style.number}>24</div>
          <div className={style.line}></div>
          <img className={style.bg} alt='bg' src={audi}/>
      </div>
      <div className={style.Ssection}>
        <div className={style.header}>
          <h1>Sign Up</h1>
          <center><p>Lorem ipsum dolor sit amet consectetur volutpat eu.</p></center>
        </div>
        <div className={style.boxSep}>
          <div className={style.inpF}>
            <h3>First Name</h3>
            <input type='text' placeholder='Enter  First Name' />
          </div>
          <div className={style.inpS}>
            <h3>Last Name</h3>
            <input type='text' placeholder='Enter  Last Name' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3>Emai</h3>
            <input type='email' placeholder='Enter  Email Addresse' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3>Address</h3>
            <input type='text' placeholder='Enter  adrdess' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <div className={style.file_upload}>
              <h3>Upload Driving License</h3>
              <div className={style.file_upload_container}>
                <label className={style.file_upload_label}>
                  <div className={style.file_upload_text}>Maximum Size 5MB</div>
                  <div className={style.file_upload_button}>Upload</div>
                    <input 
                      type="file" 
                      className={style.file_upload_input} 
                      accept="image/*,.pdf"/>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3>password</h3>
            <input type='password' placeholder='Enter Password' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3>Confirm password</h3>
            <input type='password' placeholder='Enter Password' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <input type='checkbox' className={style.check} />Accept terms & conditions and privacy policy of Mobycar24
          </div>
        </div>
        <Link to='/login' className={style.submit} type='submit'>Sign Up</Link>
        <div className={style.check_cont}>
          <p>Already have an account?</p><Link to='/login'>Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;