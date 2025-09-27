import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.css';

// Lazy load all components for better performance
const OnBoarding = lazy(() => import('./pages/responsivePage/onBoarding..js'));
const Home = lazy(() => import('./pages/Home'));
const RentCar = lazy(() => import('./pages/RentCar'));
const Brand = lazy(() => import('./pages/Brand'));
const Login = lazy(() => import('./pages/Login'));
const Contact = lazy(() => import('./pages/Contact'));
const Faq = lazy(() => import('./pages/Faq'));
const Sign = lazy(() => import('./pages/SignIn'));
const Forget = lazy(() => import('./pages/Forget'));
const Reset = lazy(() => import('./pages/Reset'));
const Profile = lazy(() => import('./pages/Profile'));
const Temp = lazy(() => import('./pages/Temp'));
const Serv = lazy(() => import('./pages/Become service provider/ServiceProvider'));
const LoginS = lazy(() => import('./pages/Become service provider/LoginS'));
const ForgetS = lazy(() => import('./pages/Become service provider/ForgetS'));
const ResetS = lazy(() => import('./pages/Become service provider/ResetS'));
const Board = lazy(() => import('./pages/Become service provider/Board'));
const Vspec = lazy(() => import('./pages/Become service provider/Vspec'));
const ImageUpload = lazy(() => import('./pages/Become service provider/ImageMainUpload'));
const MemeberShip = lazy(() => import('./pages/Become service provider/MmainShip'));
const PayService = lazy(() => import('./pages/Become service provider/PayService'));
const Dashboard = lazy(() => import('./pages/Become service provider/DashPage'));
const ConfirmReserve = lazy(() => import('./pages/ConfirmReserve'));
const HomePageResponsive = lazy(() => import('./pages/responsivePage/HomePageResponsive'));
const CarDetails = lazy(() => import('./pages/carDetails'));

// Simple loading fallback
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: '#8B5CF6',
    fontSize: '18px',
    fontWeight: '600'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rent' element={<RentCar />} />
            <Route path='/service' element={<Serv />} />
            <Route path='/brand' element={<Brand />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signIn' element={<Sign />} />
            <Route path='/forgot' element={<Forget />} />
            <Route path='/reset' element={<Reset />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/logout' element={<Temp />} />
            <Route path='/HomePageResponsive' element={<HomePageResponsive />} />


            <Route path='/confirmReserve' element={<ConfirmReserve />} />



            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/payService' element={<PayService />} />
            <Route path='/UploadImage' element={<ImageUpload />} />
            <Route path='/memberShip' element={<MemeberShip />} />
            <Route path='/Vspec' element={<Vspec />} />
            <Route path='/loginS' element={<LoginS />} />
            <Route path='/forgetS' element={<ForgetS />} />
            <Route path='/resetS' element={<ResetS />} />
            <Route path='/boarding' element={<Board />} />

            <Route path='/carDetails' element={<CarDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/Faq' element={<Faq />} />


            {/*resposive pages*/}

            <Route path='/OnBoarding' element={<OnBoarding />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;