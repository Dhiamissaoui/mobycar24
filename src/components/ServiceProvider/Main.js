import Styles from '../../styles/ServiceProvider/Main.module.css';
import background from '../../images/LandCruiser.png';
import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHourglassHalf,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

function Main() {
    const [slideOut,setSlideOut] = useState(false);
    return(
        <div className={Styles.SignUpCont}>
            <div className={Styles.Fsection}>
                <div className={Styles.moby}>MOBY</div>
                <div className={Styles.car}>CAR</div>
                <div className={Styles.number}>24</div>
                <div className={Styles.line}></div>
                <img className={Styles.bg} alt='bg' src={background}/>
            </div>
            <div className={Styles.Ssection}>
                <div className={Styles.header}>
                    <h1>Sign Up</h1>
                    <center><p>Please fill in this form to create your account as a service provider.</p></center>
                </div>
                <div className={Styles.boxSep}>
                <div className={Styles.inpF}>
                    <h3>First Name</h3>
                    <input type='text' placeholder='Enter  First Name' />
                </div>
                <div className={Styles.inpS}>
                    <h3>Last Name</h3>
                    <input type='text' placeholder='Enter  Last Name' />
                </div>
                </div>
                <div className={Styles.box}>
                <div className={Styles.inp}>
                    <h3>Email</h3>
                    <input type='email' placeholder='Enter  Email Addresse' />
                </div>
                </div>
                <div className={Styles.box}>
                <div className={Styles.inp}>
                    <h3>Contact Number</h3>
                    <input type='text' placeholder='Enter  Your Number' />
                </div>
                </div>
                <div className={Styles.box}>
                <div className={Styles.inp}>
                    <h3>Buissnes Name</h3>
                    <input type='text' placeholder='Enter your Business name' />
                </div>
                </div>
                <div className={Styles.box}>
                <div className={Styles.inp}>
                    <h3>Business registration number</h3>
                    <input type='text' placeholder='Enter your Business registration number' />
                </div>
                </div>
                <div className={Styles.box}>
                <div className={Styles.inp}>
                    <div className={Styles.file_upload}>
                    <h3>Upload Business Registration Details(optional)</h3>
                    <div className={Styles.file_upload_container}>
                        <label className={Styles.file_upload_label}>
                        <div className={Styles.file_upload_text}>Maximum Size 5MB</div>
                        <div className={Styles.file_upload_button}>Upload</div>
                            <input 
                            type="file" 
                            className={Styles.file_upload_input} 
                            accept="image/*,.pdf"/>
                        </label>
                        </div>
                    </div>
                </div>
                </div>
                <div className={Styles.box}>
                <div className={Styles.inp}>
                    <div className={Styles.file_upload}>
                    <h3>Upload Government ID Proof</h3>
                    <div className={Styles.file_upload_container}>
                        <label className={Styles.file_upload_label}>
                        <div className={Styles.file_upload_text}>Maximum Size 5MB</div>
                        <div className={Styles.file_upload_button}>Upload</div>
                            <input 
                            type="file" 
                            className={Styles.file_upload_input} 
                            accept="image/*,.pdf"/>
                        </label>
                    </div>
                    </div>
                </div>
                </div>
                <div className={Styles.box}>
                <div className={Styles.inp}>
                    <h3>password</h3>
                    <input type='password' placeholder='Enter Password' />
                </div>
                </div>
                <div className={Styles.box}>
                <div className={Styles.inp}>
                    <h3>Confirm password</h3>
                    <input type='password' placeholder='Enter Password' />
                </div>
                </div>
                <div className={Styles.box}>
                <div className={Styles.inp}>
                    <input type='checkbox' className={Styles.check} /><p className={Styles.terms}>Accept terms & conditions and privacy policy of Mobycar24</p>
                </div>
                </div>
                <button to='/login' className={Styles.submit} onClick={() => setSlideOut(true)} type='submit'>Sign Up</button>
                <div className={Styles.check_cont}>
                <p>Already have an account?</p><Link className={Styles.signIn} to='/login'>Sign In</Link>
                </div>
            </div>
            <div className={`${Styles.outCont} ${slideOut ? Styles.outActive : ""}`}>
                <FontAwesomeIcon icon={faCircleXmark} className={Styles.outX} onClick={() => setSlideOut(false)} /> <br/>
                <FontAwesomeIcon icon={faHourglassHalf} className={Styles.outIcon}/>
                <div className={Styles.outTitle}>The verification is in progress.  </div>
                <div className={Styles.outpara}>Once it is approved, you will received a login to your registered email ID</div>
                <Link to='/loginS' className={Styles.outY}>OK</Link>
            </div>
        </div>
    )
}
export default Main;