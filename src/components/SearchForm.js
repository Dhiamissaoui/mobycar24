


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faLocationDot,
  faClock,
  faCar
} from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/SearchForm.module.css';


function SearchForm() {
  return (
    <div className={styles['search-container']}>

      <form className={styles['search-form']}>
        <div className={styles['search-group']}>

          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles["s1-icon"]} />
          <input type='text' className={styles['inpLoc']} placeholder='Enter location' />

        </div>

        <div className={styles['search-group']}>

          <FontAwesomeIcon icon={faLocationDot} className={styles["s1-icon"]} />
          <select>
            <option>Ariana</option>
            <option>Bizerte</option>
            <option>Sousse</option>
            <option>Sfax</option>
          </select>

        </div>

        <div className={styles['search-group']}>

          <FontAwesomeIcon icon={faCar} className={styles["s1-icon"]} />
          <select>
            <option>Select car type</option>
            <option>SUV</option>
            <option>Sedan</option>
            <option>Sports</option>
          </select>

        </div>


        <div className={styles['search-group']}>

          <FontAwesomeIcon icon={faClock} className={styles["s1-icon"]} />
          <select>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>4 hours</option>
          </select>

        </div>

        <button type='submit' className={styles['search-button']}>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;