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

function Navbar() {
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('GBP');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

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
          <Link to='' className={styles['nav-link']}>Become A Service Provider</Link>
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

          {/* Notification Button */}
          <button className={styles['notification-btn']}>
            <FontAwesomeIcon icon={faBell} />
          </button>
          
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
                <Link to="/logout">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;