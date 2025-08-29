
import { Link } from 'react-router-dom';

import audi from '../../images/LandCruiser.png';
import style from '../../styles/ServiceProvider/LoginS.module.css';

function LoginS() {
    return(
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
          <h1>Login</h1>
          <center>
            <p>Please fill in this form to login your account.</p>
          </center>
        </div>
      
        
        <form>
          <div className={style.box}>
            <div className={style.inp}>
              <h3>Email Address</h3>
              <input
                type="email"
                placeholder="Enter Email Address"
              />
            </div>
          </div>
          <div className={style.box}>
            <div className={style.inp}>
              <h3>Password</h3>
              <input
                type="password"
                placeholder="Enter Password"
              />
            </div>
            
          </div>
          <div className={style.box}>
            <div className={style.inp}>
              <input type="checkbox" className={style.check} />
              remember me
              <Link to="/forgetS" className={style.forget} type="submit">
                Forget my password
              </Link>
            </div>
          </div>
          
          <Link type="submit" to='/boarding' className={style.submit}>
            Login
          </Link>
        </form>
        
        <div className={style.check_cont}>
          <p>Don't have an account?</p>
          <Link to="/SignIn">Sign Up</Link>
        </div>
      </div>
    </div>
    );
};
export default LoginS;