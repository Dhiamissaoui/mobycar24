import Styles from '../../styles/ServiceProvider/ForgetS.module.css'
import bg from '../../images/LandCruiser.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import Img24 from '../../images/24 image logo .png'

import { Link } from 'react-router-dom';
function ForgetService() {
    const [slideOut, setSlideOut] = useState(false);
    return (
        <div className={Styles.container}>
            <div className={Styles.Fsection}>
                <div className={Styles.moby}>MOBY</div>
                <div className={Styles.car}>CAR</div>
                <img className={Styles.number} src={Img24} alt='ddd' />
                <div className={Styles.line}></div>
                <img className={Styles.bg} alt='bg' src={bg} />
            </div>
            <div className={Styles.Ssection}>
                <div className={Styles.header}>
                    <center><h1>Forgot Password</h1></center>
                    <center><p>Please enter your email to reset your password.</p></center>
                </div>
                <div>
                    <div className={Styles.box}>
                        <div className={Styles.inp}>
                            <h3>Email Address</h3>
                            <input type='email' placeholder='Enter Email Addresse' />
                        </div>
                    </div>
                    <button className={Styles.Continue} onClick={() => setSlideOut(true)} >Continue</button>  {/* Fixed button */}
                </div>
            </div>
            <div className={`${Styles.outCont} ${slideOut ? Styles.outActive : ""}`}>
                <FontAwesomeIcon icon={faCircleXmark} className={Styles.outX} onClick={() => setSlideOut(false)} /> <br />
                <FontAwesomeIcon icon={faEnvelope} className={Styles.outIcon} />
                <div className={Styles.outTitle}>We have sent a link to your email  </div>
                <div className={Styles.outpara}>Lorem ipsum dolor sit amet consectetur. Congue sed sed eget id blandit pretium penatibus quam.</div>
                <Link to='/resetS' className={Styles.outY}>OK</Link>
            </div>
        </div>

    )
}
export default ForgetService;




