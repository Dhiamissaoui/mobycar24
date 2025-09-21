import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSterlingSign,
  faEuroSign,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons';
import { GB, FR, DE } from 'country-flag-icons/react/3x2';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('GBP');

  // Correct flag component based on selected language
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

  return (
    <nav className={styles['home-nav']}>
      <div className={styles['navbar-container']}>
        <Link to="/" className={styles['navbar-logo']}>
          MOBY<span className={styles['sp']}>CAR24</span>
        </Link>

        <div className={styles['nav-menu']}>
          <Link to="/service" className={styles['nav-link']}>
            Become A Service Provider
          </Link>
          <Link to="/brand" className={styles['nav-link']}>
            Brand
          </Link>
          <Link to="/rent" className={styles['nav-link']}>
            Rent A Car
          </Link>

          {/* Language & Currency Dropdowns */}
          <div
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.11)', height: '42px', width: '206px' }}
            className="d-flex align-items-center  justify-content-center text-white p-2 rounded-3"
          >
            {/* Language Dropdown */}
            <div className=" d-flex align-self-center  dropdown " >
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

          <Link to="/login" className={styles['nav-login']}>
            <FontAwesomeIcon icon={faUser} className={styles['user-icon']} />
            <span className={styles['login']}>Login</span>
          </Link>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;
