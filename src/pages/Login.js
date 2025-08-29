import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import audi from '../images/audi_car.png';
import style from '../styles/Login.module.css';

// Mock user data - in a real app, this would come from a backend
const mockUsers = [
  { email: 'user1@example.com', password: 'password123' },
  { email: 'user2@example.com', password: 'password456' },
  { email:'x@x.x',password : 'x'}
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
          <h1>Login</h1>
          <center>
            <p>Lorem ipsum dolor sit amet consectetur volutpat eu.</p>
          </center>
        </div>
      
        
        <form onSubmit={handleSubmit}>
          <div className={style.box}>
            <div className={style.inp}>
              <h3>Email Address</h3>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={style.box}>
            <div className={style.inp}>
              <h3>Password</h3>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className={style.error}>{error}</div>}
          </div>
          <div className={style.box}>
            <div className={style.inp}>
              <input type="checkbox" className={style.check} />
              remember me
              <Link to="/forgot" className={style.forget} type="submit">
                Forget my password
              </Link>
            </div>
          </div>
          
          <button type="submit" className={style.submit}>
            Login
          </button>
        </form>
        
        <div className={style.check_cont}>
          <p>Don't have an account?</p>
          <Link className={style.signIn} to="/SignIn">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;