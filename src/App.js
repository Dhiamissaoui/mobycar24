import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RentCar from './pages/RentCar';
import Brand from './pages/Brand'; 
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms-cond';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Sign from './pages/SignIn';
import Forget from './pages/Forget';
import Reset from './pages/Reset';
import Profile from './pages/profile';
import Logout from './pages/logout'


import './styles/App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rent' element={<RentCar />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signIn' element={<Sign />} />
        <Route path='/forgot' element={<Forget />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />


        <Route path='/privacy-pol' element={<Privacy />} />
        <Route path='/terms-cond' element={<Terms />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Faq' element={<Faq />} />
        
      </Routes>
    </Router>
  );
}

export default App;