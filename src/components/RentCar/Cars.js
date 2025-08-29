
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
  faChevronLeft,
  faCircleXmark,         // For availability
  faTrash,
  faSliders
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
import {  useState } from 'react';

function RentCar() {

  const [removeFilter,setremoveFilter] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState('range rover'); 

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

  const [selectedOptions, setSelectedOptions] = useState([]);




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
      <div className={styles['rent-car-F']}>
        <div className={styles['car-header']}>
          <h1 className={styles['page-title']}>Rent a Car</h1>

          <div className={styles['upper-right']}>

            <div className={styles['search-bar']}>
              <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} />
              <input placeholder='Search by vehicle model/brand' className={styles['inp']} />
            </div>

            <button content='Search' className={styles['search-btn']} >Search</button>
            <FontAwesomeIcon icon={faFilter} onClick={() => setremoveFilter(!removeFilter)} className={styles['filter']} />
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
      <div className={`${styles['filter-btn-cont']} ${removeFilter ? styles['remove'] : ''}`}>
        <FontAwesomeIcon icon={faCircleXmark} onClick={() => setremoveFilter(!removeFilter)}  className={styles['filter-close']}  /> <br/>
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
          className={styles['hidden-checkbox']}  /><label className={styles['rental-option']}>Rent at Daily Rate</label>
            <input type='checkbox' 
          className={styles['hidden-checkbox']} /><label className={styles['rental-option']}>Weekly Rent</label>
          </div>
          <div className={styles['filter-name']}>Select Brand and model</div>
          <div className={styles['filter-brandCont']}>
            <select 
              className={styles['allB']} 
              onChange={(e) => setSelectedBrand(e.target.value)}
              value={selectedBrand}
            >
              <option value="range rover">Range Rover</option>
              <option value="porsche">Porsche</option>
              <option value="BMW">BMW</option>
            </select>

            {selectedBrand === 'range rover' && (
              <select className={styles['allB']}>
                <option value="sport">Sport</option>
                <option value="evoque">Evoque</option>
                <option value="velar">Velar</option>
              </select>
            )}
            
            {selectedBrand === 'porsche' && (
              <select className={styles['allB']}>
                <option value="cayenne">Cayenne</option>
                <option value="panamera">Panamera</option>
                <option value="carrera">Carrera</option>
              </select>
            )}
            
            {selectedBrand === 'BMW' && (
              <select className={styles['allB']}>
                <option value="series1">Series 1</option>
                <option value="x5">X5</option>
                <option value="series3">Series 3</option>
              </select>
            )}
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