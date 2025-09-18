import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import audi from '../images/audi_car.png';
import style from '../styles/Login.module.css';
import Img24 from '../images/24 image logo .png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash

} from '@fortawesome/free-solid-svg-icons';


// Mock user data - in a real app, this would come from a backend
const mockUsers = [
  { email: 'user1@example.com', password: 'password123' },
  { email: 'user2@example.com', password: 'password456' },
  { email: 'x@x.x', password: 'x' }
];

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Check if user exists
    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Successful login - navigate to profile
      navigate('/profile');
      // In a real app, you might want to store auth state here
    } else {
      setError('Invalid email or password');
    }
  };


  const [activeEye1, setActiveEye1] = useState(true);

  const toggleEye1 = () => {
    setActiveEye1(prev => !prev);
  };


  return (
    <div className={style.container}>
      <div className={style.Fsection}>
        <div className={style.moby}>MOBY</div>
        <div className={style.car}>CAR</div>
        <img className={style.number} src={Img24} alt='ddd' />
        <div className={style.line}></div>
        <img className={style.bg} src={audi} alt="Audi car" />
      </div>
      <div className={style.Ssection}>
        <div className={style.header}>
          <h1>Login</h1>
          <center>
            <p style={{ color: '#919191', fontSize: '16px' }}>Lorem ipsum dolor sit amet consectetur volutpat eu.</p>
          </center>
        </div>


        <form onSubmit={handleSubmit}>
          <div className={style.box}>
            <div className={style.inp}>
              <h3 className={style.labelInp}>Email Address</h3>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={style.placeholder}
              />
            </div>
          </div>
          <div className={style.box}>
            <div className={style.inp}>
              <h3 className={style.labelInp}>Password</h3>
              <div>
                <input
                  placeholder="***************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${style.placeholder} ${style.passEye}`} type={activeEye1 ? 'password' : 'text'}
                />
                <FontAwesomeIcon icon={activeEye1 ? faEye : faEyeSlash} onClick={() => toggleEye1('false')} className={style.iconEye} />
              </div>

            </div>
            {error && <div className={style.error}>{error}</div>}
          </div>
          <div className={style.box}>
            <div className={style.inp}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className="form-check d-flex align-items-center  gap-2 w-50">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label d-flex align-self-end" for="flexCheckDefault" style={{ color: '#919191', fontSize: '14px' }}>
                    Remember Me
                  </label>
                </div>
                <Link to="/Forgot" className={style.forget} type="submit">
                  Forget my password
                </Link>
              </div>
            </div>
          </div>

          <button type="submit" className={style.submit}>
            Login
          </button>
        </form>

        <div className={style.check_cont}>
          <p>Don't have an account?</p>
          <Link style={{ color: '#9E4DB6', textDecoration: 'none', fontWeight: 'bold' }} to="/SignIn">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;