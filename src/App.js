import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RentCar from './pages/RentCar';
import Brand from './pages/Brand'; 
import Login from './pages/Login';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Sign from './pages/SignIn';
import Forget from './pages/Forget';
import Reset from './pages/Reset';
import Profile from './pages/Profile';
import Temp from './pages/Temp';
import Serv from './pages/Become service provider/ServiceProvider';
import LoginS from './pages/Become service provider/LoginS'
import ForgetS from './pages/Become service provider/ForgetS';
import ResetS from './pages/Become service provider/ResetS';
import Board from './pages/Become service provider/Board';
import Vspec from './pages/Become service provider/Vspec';
import ImageUpload from './pages/Become service provider/ImageMainUpload';
import MemeberShip from './pages/Become service provider/MmainShip';
import PayService  from './pages/Become service provider/PayService';
import Dashboard from './pages/Become service provider/DashPage'

import './styles/App.css'
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rent' element={<RentCar />} />
        <Route path='/service' element={<Serv/>}/>
        <Route path='/brand' element={<Brand />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signIn' element={<Sign />} />
        <Route path='/forgot' element={<Forget />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Temp />} />

        
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/payService' element={<PayService />} />
        <Route path='/UploadImage' element={<ImageUpload />} />
        <Route path='/memberShip' element={<MemeberShip />} />
        <Route path='/Vspec' element={<Vspec />} />
        <Route path='/loginS' element={<LoginS />} />
        <Route path='/forgetS' element={<ForgetS />} />
        <Route path='/resetS' element={<ResetS />} />
        <Route path='/boarding' element={<Board />} />
        
        


        <Route path='/contact' element={<Contact />} />
        <Route path='/Faq' element={<Faq />} />
        
      </Routes>
    </Router>
  );
}

export default App;