import React from 'react';
import styles from '../../styles/RentcarStyles/Cars.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt,       // For insurance
  faTachometerAlt,   // For mileage
  faCalendar,
  faSearch,
  faHeart,
  faFilter,
  faChevronRight,
  faChevronLeft         // For availability
} from '@fortawesome/free-solid-svg-icons';

// Import images
import porscheImage from '../../images/porsche.png';
import cadillacImage from '../../images/car-cadillac.png' ;
import rollsRoyceImage from '../../images/car-rolls.png';
import lamborghiniImage from '../../images/car-lambo.png';
import miniCooperImage from '../../images/car-mini.png';
import rangeRover from '../../images/car-range.png';
import nissan from '../../images/car-nissan.png';
import spyder from '../../images/car-spyder.png';

function RentCar() {
  const cars = [
    {
      car: 'Porsche Cayenne',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: porscheImage
    },
    {
      car: 'Cadillac Escalade',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: cadillacImage
    },
    {
      car: 'Rolls Royce Dawn',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: rollsRoyceImage
    },
    {
      car: 'Lamborghini Urus',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: lamborghiniImage
    },
    {
      car: 'Rolls Royce Cullinan',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: rollsRoyceImage
    },
    {
      car: 'Mini Cooper',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: miniCooperImage
    },
    {
      car: 'Range Rover Sport SVR',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: rangeRover
    },
    {
      car: 'Nissan Patrol V6',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: nissan
    },
    {
      car: 'Lamborghini Evo Spyder',
      insurance: faShieldAlt,
      availability: 'Available',
      mileage: '250 Km/Day',
      price: '£72.00/Day',
      image: spyder
    }
  ];

  return (
    <div className={styles['rent-car-container']}>
      <div className={styles['car-header']}>
        <h1 className={styles['page-title']}>Rent a Car</h1>

        <div className={styles['upper-right']}>

          <div className={styles['search-bar']}>
            <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} />
            <input placeholder='Search by vehicle model/brand' className={styles['inp']} />
          </div>

          <button content='Search' className={styles['search-btn']} >Search</button>
          <FontAwesomeIcon icon={faFilter} className={styles['filter']} />
        </div>
      </div>
      
      <div className={styles['cars-grid']}>
        {cars.map((car, index) => (
          <div key={index} className={styles['car-card']}>
            <div className={styles['image-card']}>
              <img src={car.image} alt={car.car} className={styles['img']} /> {/* Fixed property name to 'image' */}
              <FontAwesomeIcon icon={faHeart} className={styles['heart-icon']} />
            </div>
            <div className={styles['car-header']}>
              <h2>{car.car}</h2>
              <p className={styles['availability']}>
                <FontAwesomeIcon icon={faCalendar} /> {car.availability}
              </p>
            </div>
            
            <div className={styles['car-details']}>
              <p className={styles['insurance']}>
                <FontAwesomeIcon icon={car.insurance} /> Insurance Included
              </p>
              <p className={styles['mileage']}>
                <FontAwesomeIcon icon={faTachometerAlt} /> {car.mileage}
              </p>
            </div>
            <hr/>
            <div className={styles['price-section']}>
              <p className={styles['price']}>{car.price}</p>
              <button className={styles['reserve-button']}>Reserve</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles['btns']}>
        <div className={styles['btn-left']}><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className={styles['btn-p']}>1</div>
        <div className={styles['btn-p']}>2</div>
        <div className={styles['btn-p']}>...</div>
        <div className={styles['btn-p']}>9</div>
        <div className={styles['btn-p']}>10</div>
        <div className={styles['btn-right']}><FontAwesomeIcon icon={faChevronRight} /></div>
      </div>
    </div>
  );
}

export default RentCar;