import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSterlingSign,
  faEuroSign,
  faDollarSign,
  faBell,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { GB, FR, DE } from 'country-flag-icons/react/3x2';
import styles from '../../styles/profile/Nav.module.css';
import profile_pic from '../../images/profile pic.png';

function Navbar({ onLogoutClick }) {
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('GBP');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

const toggleNotifications = () => {
  setShowNotifications(prev => !prev);
};

  // Get the correct flag component based on selected language
  const FlagIcon = {
    EN: GB,
    FR: FR,
    DE: DE
  }[language];

  const CurrencyIcon = {
    GBP: faSterlingSign,
    EUR: faEuroSign,
    USD: faDollarSign
  }[currency];

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <Link to='/' className={styles['navbar-logo']}>MOBY<span>CAR24</span></Link>
        
        <div className={styles['nav-menu']}>
          <Link to='/service' className={styles['nav-link']}>Become A Service Provider</Link>
          <Link to='/brand' className={styles['nav-link']}>Brand</Link>
          <Link to='/rent' className={styles['nav-link']}>Rent A Car</Link>
          
          <div className={styles['language-currency']}>
            <div className={styles['language-selector']}>
              <FlagIcon className={styles['flag-icon']} />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className={styles['language-dropdown']}
              >
                <option value='EN'>EN</option>
                <option value='FR'>FR</option>
                <option value='DE'>DE</option>
              </select>
            </div>

            <div className={styles['currency-selector']}>
              <FontAwesomeIcon icon={CurrencyIcon} className={styles['currency-icon']} />
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className={styles['currency-dropdown']}
              >
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          {/* Notification Button 
          <button onClick={toggleNotifications} className={styles['notification-btn']}>
            <FontAwesomeIcon icon={faBell} />
          </button>
          */}

          {/* Notification Dropdown */}
<div className={styles['notification-container']}>
  <button 
    className={styles['notification-btn']}
    onClick={toggleNotifications}
  >
    <FontAwesomeIcon icon={faBell} />
  </button>

  {showNotifications && (
    <div className={styles['notification-content']}>
      <div className={styles['notification-head']}>
        <h3 className={styles['notification-heading']}>Notifications</h3>
      </div>
      
      <div className={styles['notification-group']}>
        <h4 className={styles['notification-subhead']}>Today</h4>
        {[1, 6, 10, 59].map((minutes, index) => (
          <div key={index} className={styles['notification-message']}>
            <div className={styles['notification-main']}>
              <img src={profile_pic} className={styles['notification-photo']} alt=''/>
            </div>
            <div className={styles['notfication-mainS']}>
              <strong className={styles['notfication-name']}>Charlie Peter</strong> lorem ipsum dolor sit amet.<br/>
              <p className={styles['notification-detail']}>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            
            <div className={styles['notification-stamp']}>
                {minutes} {minutes === 1 ? 'min' : 'mins'} ago
            </div>
            
          </div>
        ))}
      </div>
      
      <div className={styles['notification-group']}>
        <h4 className={styles['notification-subhead']}>Yesterday</h4>
        {[1, 1].map((days, index) => (
                    <div key={index} className={styles['notification-message']}>
            <div className={styles['notification-main']}>
              <img src={profile_pic} className={styles['notification-photo']} alt=''/>
            </div>
            <div className={styles['notfication-mainS']}>
              <strong className={styles['notfication-name']}>Charlie Peter</strong> lorem ipsum dolor sit amet.<br/>
              <p className={styles['notification-detail']}>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            
            <div className={styles['notification-stamp']}>
              {days} day{days > 1 ? 's' : ''}  
            </div>
            
          </div>
        ))}
      </div>
    
    </div>
  )}
</div>


        
          

          {/* Profile Dropdown */}
          <div className={styles['profile-dropdown']}>
            <button 
              className={styles['profile-btn']}
              onClick={toggleProfileDropdown}
            >
              <img src={profile_pic} alt='Profilepic' className={styles.profile_pic}/>
              <span>Howard</span>
              <FontAwesomeIcon icon={faChevronDown}/>
            </button>
            
            {showProfileDropdown && (
              <div className={styles['dropdown-content']}>
                <Link to="/profile">My Profile</Link>
                <Link onClick={onLogoutClick}>Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;