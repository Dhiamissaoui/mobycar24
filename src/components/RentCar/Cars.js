
import styles from '../../styles/RentcarStyles/Cars.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,       // For insurance // For mileage
  faCalendar,
  faSearch,
  faChevronRight,
  faChevronLeft,
  faCircleXmark,         // For availability
  faTrash,
  faSliders
} from '@fortawesome/free-solid-svg-icons';
import { HeartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

// Import images
import porscheImage from '../../images/porsche.png';
import cadillacImage from '../../images/car-cadillac.png';
import rollsRoyceImage from '../../images/car-rolls.png';
import lamborghiniImage from '../../images/car-lambo.png';
import miniCooperImage from '../../images/car-mini.png';
import rangeRover from '../../images/car-range.png';
import nissan from '../../images/car-nissan.png';
import spyder from '../../images/car-spyder.png';
import { useState } from 'react';

function RentCar() {

  const [removeFilter, setremoveFilter] = useState(false)

  const [activeFilters, setActiveFilters] = useState([]);


  // Toggle filter function
  const toggleFilter = (filterName) => {
    setActiveFilters(prev =>
      prev.includes(filterName)
        ? prev.filter(item => item !== filterName) // Remove if already active
        : [...prev, filterName] // Add if not active
    );
  };

  const [activeFiltersx, setActiveFiltersx] = useState([]);

  // Toggle filter function
  const toggleFilterx = (filterNamex) => {
    setActiveFiltersx(prev =>
      prev.includes(filterNamex)
        ? prev.filter(item => item !== filterNamex) // Remove if already active
        : [...prev, filterNamex] // Add if not active
    );
  };

  const [selectedOptions] = useState([]);
  //removed the setselectionoption for run build

  const [active, setActive] = useState(false)




  const cars = [
    {
      car: 'Porsche Cayenne',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00',
      image: porscheImage
    },
    {
      car: 'Cadillac Escalade',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00',
      image: cadillacImage
    },
    {
      car: 'Rolls Royce Dawn',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00',
      image: rollsRoyceImage
    },
    {
      car: 'Lamborghini Urus',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00',
      image: lamborghiniImage
    },
    {
      car: 'Rolls Royce Cullinan',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00',
      image: rollsRoyceImage
    },
    {
      car: 'Mini Cooper',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00',
      image: miniCooperImage
    },
    {
      car: 'Range Rover Sport SVR',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00',
      image: rangeRover
    },
    {
      car: 'Nissan Patrol V6',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00',
      image: nissan
    },
    {
      car: 'Lamborghini Evo Spyder',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00',
      image: spyder
    }
  ];

  return (
    <div className={styles['rent-car-container']}>
      <div className={styles['rent-car-F']}>
        <div className={styles['car-header']}>
          <h1 className={styles['page-title']}>Rent a Car</h1>

          <div className={styles['upper-right']}>

            <div className={styles['search-bar']}>
              <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} />
              <input placeholder='Search by vehicle model/brand' className={styles['inp']} />
            </div>
            <button content='Search' className={styles['search-btn']} >Search</button>
            <FontAwesomeIcon icon={faSliders} onClick={() => setremoveFilter(!removeFilter)} className={styles['filter']} />
          </div>
        </div>

        <div className={styles['cars-grid']}>
          {cars.map((car, index) => (
            <div key={index} className={styles['car-card']}>
              <div className={styles['image-card']}>
                <img src={car.image} alt={car.car} className={styles['img']} /> {/* Fixed property name to 'image' */}
                <HeartIcon onClick={() => setActive(!active)} className={`w-6 h-6 text-red-500  ${styles['heart-icon']} ${active ? styles["activeHeart"] : ""} `} />
              </div>
              <div className={styles['car-headerx']}>
                <div className={styles['text']}>{car.car}</div>
                <div className={styles['availability']}>
                  <FontAwesomeIcon icon={faCalendar} /> {car.availability}
                </div >
              </div>

              <div className={styles['car-details']}>
                <div className={styles['insurance']}>
                  {/* <FontAwesomeIcon icon={car.insurance} />*/}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '15px' }} className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                  Insurance Included
                </div>
                <div className={styles['mileage']}>
                  {/* <FontAwesomeIcon icon={faTachometerAlt} />*/}
                  <svg style={{ width: '15px', marginTop: '-3px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
                  {car.mileage}
                </div>
              </div>
              <div className={styles['divider']} />
              <div className={styles['price-section']}>
                <div className={styles['price']}>{car.price}<div className='fs-6'>/Day</div></div>
                <Link className={styles['reserve-button']}>Reserve</Link>
              </div>
            </div>

          ))}
        </div>
        <div className={styles['btns']}>
          <div className={styles['btn-left']}><FontAwesomeIcon icon={faChevronLeft} className={styles.colorL} /></div>
          <div className={styles['btn-p']}>1</div>
          <div className={styles['btn-p']}>2</div>
          <div className={styles['btn-p']}>...</div>
          <div className={styles['btn-p']}>9</div>
          <div className={styles['btn-p']}>10</div>
          <div className={styles['btn-right']}><FontAwesomeIcon icon={faChevronRight} className={styles.colorR} /></div>
        </div>
      </div>
      {removeFilter && <div className={styles.overlay} onClick={() => setremoveFilter(false)}></div>}
      <div className={`${styles['filter-btn-cont']} ${removeFilter ? styles['remove'] : ''}`}>
        <FontAwesomeIcon icon={faCircleXmark} onClick={() => setremoveFilter(!removeFilter)} className={styles['filter-close']} /> <br />
        <div className={styles['filter-title']}><FontAwesomeIcon icon={faSliders} className={styles['filter-icon']} />Filter</div>
        <div className={styles['filter-main']}>
          <div className={styles['filter-name']}>Category</div>
          <div className={styles['filter-cat']}>
            <div className={`${styles['filter-box']} ${activeFilters.includes('All') ? styles['active'] : ''}`}
              onClick={() => toggleFilter('All')} >All</div>
            <div className={`${styles['filter-box']} ${activeFilters.includes('Luxury') ? styles['active'] : ''}`}
              onClick={() => toggleFilter('Luxury')} >Luxury Car</div>
            <div className={`${styles['filter-box']} ${activeFilters.includes('Sports') ? styles['active'] : ''}`}
              onClick={() => toggleFilter('Sports')} >Sports Car</div>
            <div className={`${styles['filter-box']} ${activeFilters.includes('SUVs') ? styles['active'] : ''}`}
              onClick={() => toggleFilter('SUVs')} >SUVs</div>
            <div className={`${styles['filter-box']} ${activeFilters.includes('convertible') ? styles['active'] : ''}`}
              onClick={() => toggleFilter('convertible')} >convertible</div>
            <div className={`${styles['filter-box']} ${activeFilters.includes('Electric') ? styles['active'] : ''}`}
              onClick={() => toggleFilter('Electric')} >Electric</div>
            <div className={`${styles['filter-box']} ${activeFilters.includes('Cheap') ? styles['active'] : ''}`}
              onClick={() => toggleFilter('Cheap')} >Cheap Cars</div>
            <div className={`${styles['filter-box']} ${activeFilters.includes('Pickup') ? styles['active'] : ''}`}
              onClick={() => toggleFilter('Pickup')} >Pickup Van</div>
            <div className={`${styles['filter-box']} ${activeFilters.includes('Economy') ? styles['active'] : ''}`}
              onClick={() => toggleFilter('Economy')} >Economy</div>
          </div>



          <div className={styles['filter-name']}>Body Type</div>
          <div className={styles['filter-Btype']}>
            <div className={`${styles['filter-box']} ${activeFiltersx.includes('all') ? styles['active'] : ''}`}
              onClick={() => toggleFilterx('all')} >All</div>
            <div className={`${styles['filter-box']} ${activeFiltersx.includes('convertible') ? styles['active'] : ''}`}
              onClick={() => toggleFilterx('convertible')} >convertible</div>
            <div className={`${styles['filter-box']} ${activeFiltersx.includes('Hatchbacks') ? styles['active'] : ''}`}
              onClick={() => toggleFilterx('Hatchbacks')} >Hatchbacks</div>
            <div className={`${styles['filter-box']} ${activeFiltersx.includes('Sedan') ? styles['active'] : ''}`}
              onClick={() => toggleFilterx('Sedan')} >Sedan</div>
            <div className={`${styles['filter-box']} ${activeFiltersx.includes('SUV') ? styles['active'] : ''}`}
              onClick={() => toggleFilterx('SUV')} >SUV</div>
            <div className={`${styles['filter-box']} ${activeFiltersx.includes('NPV') ? styles['active'] : ''}`}
              onClick={() => toggleFilterx('NPV')} >NPV</div>
            <div className={`${styles['filter-box']} ${activeFiltersx.includes('Coupe') ? styles['active'] : ''}`}
              onClick={() => toggleFilterx('Coupe')} >Coupe</div>
          </div>
          <div className={styles['filter-name']}>Rent Type</div>
          <div className={styles['filter-Rtype']}>
            <input type='checkbox'
              className={`${styles['hidden-checkbox']} ${selectedOptions.includes('hourly') ? styles['checked'] : ''}`} /><label className={`${styles['rental-option']} `}>Rent at Hourly Rate</label>
            <input type='checkbox'
              className={styles['hidden-checkbox']} /><label className={styles['rental-option']}>Rent at Daily Rate</label>
            <input type='checkbox'
              className={styles['hidden-checkbox']} /><label className={styles['rental-option']}>Weekly Rent</label>
          </div>
          <div style={{ marginBottom: '20px' }} className={styles['filter-name']}>Select Brand and model</div>
          <div style={{ backgroundColor: '#F2F2F2' }} className='d-flex w-100' id={styles.radiuse5dem}>
            <div className={`dropdown show ${styles.inpCont} w-50`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles["s1-icon"]}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <button
                style={{ backgroundColor: '#F2F2F2', color: 'black', height: '50px' }}
                className={`btn w-100 d-flex align-items-center justify-content-between  dropdown-toggle ${styles.borderRad} `}
                type="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className={styles.font} style={{ color: '#818181', paddingLeft: '20px ' }}>All Brand</div>
              </button>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><button className="dropdown-item" >bmw</button></li>
                <li><button className="dropdown-item" >peugot</button></li>
                <li><button className="dropdown-item" >volkswagen</button></li>
              </ul>
            </div>
            <div className={`dropdown show ${styles.inpCont} w-50 `}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles["s1-icon"]}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <button
                style={{ backgroundColor: '#F2F2F2', color: 'black', height: '50px' }}
                className="btn w-100 d-flex align-items-center justify-content-between  dropdown-toggle "
                type="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className={styles.font} style={{ color: '#B1B1B1', paddingLeft: '20px ' }}>Model</div>
              </button>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><button className="dropdown-item" >Model 1</button></li>
                <li><button className="dropdown-item" >Model 2</button></li>
                <li><button className="dropdown-item" >Model 3</button></li>
              </ul>
            </div>
          </div>



          <div className={styles['filter-btnC']}>
            <button className={styles['filter-aplly']}>Apply Filter</button>
            <button className={styles['filter-clear']}><FontAwesomeIcon icon={faTrash} />Clear All</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RentCar;