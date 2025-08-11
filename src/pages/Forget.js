import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import audi from '../images/audi_car.png'
import style from '../styles/Forget.module.css';


function Forget() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailSent(true);
  };

  if (emailSent) {
    return (
      <div className={style.container}>
        <div className={style.Fsection}>
          <div className={style.moby}>MOBY</div>
          <div className={style.car}>CAR</div>
          <div className={style.number}>24</div>
          <div className={style.line}></div>
          <img className={style.bg} src={audi} alt="Audi car" />
        </div>
        <div className={style.Ssection}>
          <div className={style.header}>
            <h1>Password</h1>
            <center><p>Connecteur volupat eu.</p></center>
          </div>
          
          <div className={style.confirmationBox}>
            <p className={style.confirmationText}>We have sent a link to your email</p>
            <p className={style.confirmationSubtext}>
              Lorem Ipsum Dolor Sit Amet Consectetur. Congue Sed Sed Eget Id Blandit
              Pretium Penatibus Quam.
            </p>
          </div>
          
          <Link to="/reset" className={style.okButton}>OK</Link>
        </div>
      </div>
    );
  }
  return(
  <div className={style.container}>
    <div className={style.Fsection}>
        <div className={style.moby}>MOBY</div>
        <div className={style.car}>CAR</div>
        <div className={style.number}>24</div>
        <div className={style.line}></div>
        <img className={style.bg} src={audi}/>
    </div>
    <div className={style.Ssection}>
      <div className={style.header}>
        <h1>Forgot Password</h1>
        <center><p>Lorem ipsum dolor sit amet consectetur volutpat eu.</p></center>
      </div>
      <form onSubmit={handleSubmit}>  {/* Add this form tag */}
        <div className={style.box}>
          <div className={style.inp}>
            <h3>Email Address</h3>
            <input type='email' placeholder='Enter Email Addresse' required />
          </div>
        </div>
        <button className={style.Continue} type='submit'>Continue</button>  {/* Fixed button */}
      </form>  {/* Close form tag */}
    </div>
  </div>
);
}

export default Forget;