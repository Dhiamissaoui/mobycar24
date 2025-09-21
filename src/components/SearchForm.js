


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCarAlt
} from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/SearchForm.module.css';

function SearchForm() {
  return (
    <div className={styles['search-container']}>

      <form className={styles['search-form']}>
        <div className={styles['search-group']}>

          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["s1-icon"]} />
          <input type='text' className={`${styles['inpLoc']} ${styles['font']}`} placeholder='Search by vehicle model/brand name...' />

        </div>
        {/*<div className={styles['search-group']}>

          <FontAwesomeIcon icon={faLocationDot} className={styles["s1-icon"]} />
          <select>
            <option>Ariana</option>
            <option>Bizerte</option>
            <option>Sousse</option>
            <option>Sfax</option>
          </select>

        </div>*/}

        <div className={`dropdown show ${styles.inpCont} `}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles["s1-icon"]}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <button
            style={{ backgroundColor: 'white', color: 'black', height: '50px' }}
            className={`btn w-100 d-flex align-items-center justify-content-between  dropdown-toggle ${styles['custom-dropdown']} `}
            type="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className={styles.font} style={{ color: '#818181', paddingLeft: '20px ' }}>Location</div>
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><button className="dropdown-item" >Ariana</button></li>
            <li><button className="dropdown-item" >Kasserine</button></li>
            <li><button className="dropdown-item" >Sousse</button></li>
          </ul>
        </div>

        <div className={`dropdown show ${styles.inpCont} `}>
          <FontAwesomeIcon icon={faCarAlt} className={styles['s1-icon']} />
          <button
            style={{ backgroundColor: 'white', color: 'black', height: '50px' }}
            className={`btn w-100 d-flex align-items-center justify-content-between  dropdown-toggle  ${styles['custom-dropdown']} `}
            type="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className={styles.font} style={{ color: '#818181', paddingLeft: '20px', fontSize: '14px' }}>Car type</div>
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><button className="dropdown-item" >sedan</button></li>
            <li><button className="dropdown-item" >cross</button></li>
            <li><button className="dropdown-item" >4x4</button></li>
          </ul>
        </div>

        <div className={`dropdown show ${styles.inpCont} `}>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles["s1-icon"]}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          <button
            style={{ backgroundColor: 'white', color: 'black', height: '50px' }}
            className={`btn w-100 d-flex align-items-center justify-content-between  dropdown-toggle ${styles['custom-dropdown']}  `}
            type="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className={styles.font} style={{ color: '#818181', paddingLeft: '20px ' }}>Hourly</div>
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><button className="dropdown-item" >1 Hour</button></li>
            <li><button className="dropdown-item" >3+ Hours</button></li>
            <li><button className="dropdown-item" >24+ Hours </button></li>
          </ul>
        </div>

        <button type='submit' className={`${styles['search-button']} ${styles['font']}`}>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;