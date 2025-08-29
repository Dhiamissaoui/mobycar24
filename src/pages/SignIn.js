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
            <h3 className={style.lab}>First Name</h3>
            <input type='text' placeholder='Enter  First Name' />
          </div>
          <div className={style.inpS}>
            <h3 className={style.lab}>Last Name</h3>
            <input type='text' placeholder='Enter  Last Name' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Email</h3>
            <input type='email' placeholder='Enter  Email Addresse' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Address</h3>
            <input type='text' placeholder='Enter  adrdess' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Driving license number</h3>
            <input type='text' placeholder='Enter  Driving number' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <div className={style.file_upload}>
              <h3 className={style.lab}>Upload Driving License</h3>
              <div class="mb-3"> 
                <input class="form-control" type="file" id="formFile"/>
              </div>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>password</h3>
            <input type='password' placeholder='Enter Password' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3 className={style.lab}>Confirm password</h3>
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
          <p>Already have an account?</p><Link className={style.signIn} to='/login'>Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;