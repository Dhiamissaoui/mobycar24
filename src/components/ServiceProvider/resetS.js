
import { Link } from 'react-router-dom';

import bg from '../../images/LandCruiser.png'
import style from '../../styles/ServiceProvider/ResetS.module.css';


function ResetS() {
  return(
    <div className={style.container}>
      <div className={style.Fsection}>
          <div className={style.moby}>MOBY</div>
          <div className={style.car}>CAR</div>
          <div className={style.number}>24</div>
          <div className={style.line}></div>
          <img className={style.bg} alt='bg' src={bg}/>
      </div>
      <div className={style.Ssection}>
        <div className={style.header}>
          <h1>Reset Password</h1>
          <center><p>Lorem ipsum dolor sit amet consectetur volutpat eu.</p></center>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3>New Password</h3>
            <input type='password' placeholder='************' />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.inp}>
            <h3>Confirm Password</h3>
            <input type='password' placeholder='************' />
          </div>
        </div>
        <Link to='/boarding' className={style.submit} type='submit'>Save</Link>
      </div>
    </div>
  );
}

export default ResetS;