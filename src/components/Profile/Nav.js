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

function Navbar({ onLogoutClick, setremoveFilter }) {
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
        <Link to="/" className={styles['navbar-logo']}>
          MOBY<span className={styles['sp']}>CAR24</span>
        </Link>

        <div className={styles['nav-menu']}>
          <Link to="/service" className={styles['nav-linkx']}>
            Become A Service Provider
          </Link>
          <Link to="/brand" className={styles['nav-linkx']}>
            Brand
          </Link>
          <Link to="/rent" className={styles['nav-linkx']}>
            Rent A Car
          </Link>

          {/* Language & Currency Dropdowns */}
          <div
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.11)', height: '42px', width: '206px' }}
            className="d-flex align-items-center  justify-content-center text-white p-2 rounded-3"
          >
            {/* Language Dropdown */}
            <div className=" d-flex align-self-center dropdown " >
              <button
                className={`btn btn-sm fw-medium dropdown-toggle d-flex align-items-center text-white bg-transparent border-0 ${styles['custom-dropdown']}`}

                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginRight: '8px'
                  }}
                >
                  <FlagIcon style={{ width: '100%', height: '100%' }} />
                </div>
                <div>{language}</div>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="languageDropdown"
              >
                <li>
                  <button className="dropdown-item" onClick={() => setLanguage('EN')}>
                    <GB style={{ width: '20px', height: '20px', marginRight: '8px' }} /> EN
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => setLanguage('FR')}>
                    <FR style={{ width: '20px', height: '20px', marginRight: '8px' }} /> FR
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => setLanguage('DE')}>
                    <DE style={{ width: '20px', height: '20px', marginRight: '8px' }} /> DE
                  </button>
                </li>
              </ul>
            </div>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', height: '100%', width: '1px', margin: '0 5px' }}></div>
            {/* Currency Dropdown */}
            <div className="dropdown d-flex align-self-center">
              <button
                className={`btn btn-sm dropdown-toggle  fw-medium d-flex align-items-center text-white bg-transparent border-0 ${styles['custom-dropdown']}`}
                type="button"
                id="currencyDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              // keep button font size default
              >
                <FontAwesomeIcon icon={CurrencyIcon} className="me-2" />
                <div>{currency}</div>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="currencyDropdown"
              >
                <li>
                  <button className="dropdown-item" onClick={() => setCurrency('GBP')}>
                    <FontAwesomeIcon icon={faSterlingSign} className="me-2" /> GBP
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => setCurrency('EUR')}>
                    <FontAwesomeIcon icon={faEuroSign} className="me-2" /> EUR
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => setCurrency('USD')}>
                    <FontAwesomeIcon icon={faDollarSign} className="me-2" /> USD
                  </button>
                </li>
              </ul>
            </div>
          </div>
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
                        <img src={profile_pic} className={styles['notification-photo']} alt='' />
                      </div>
                      <div className={styles['notfication-mainS']}>
                        <strong className={styles['notfication-name']}>Charlie Peter</strong> lorem ipsum dolor sit amet.<br />
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
                        <img src={profile_pic} className={styles['notification-photo']} alt='' />
                      </div>
                      <div className={styles['notfication-mainS']}>
                        <strong className={styles['notfication-name']}>Charlie Peter</strong> lorem ipsum dolor sit amet.<br />
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
              <img src={profile_pic} alt='Profilepic' className={styles.profile_pic} />
              <span>Howard</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>

            {showProfileDropdown && (
              <div className={styles['dropdown-content']}>
                <Link to="/profile">My Profile</Link>
                <Link onClick={() => {
                  onLogoutClick();
                  setremoveFilter(true);
                }}>Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;