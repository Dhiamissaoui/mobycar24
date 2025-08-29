import { useRef,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faChevronRight,
  faCar,
  faCarSide,
  faVanShuttle,
  faCarAlt,
  faCarRear,
  faTruckPickup
} from '@fortawesome/free-solid-svg-icons';
import Styles from '../styles/HorizontalScrollCategories.module.css';

function HorizontalScrollCategories() {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Popular');

  const vehicleTypes = [
  { name: 'Hatchbacks', icon: faCar,num :26 }, // Using faCar instead
  { name: 'Sedan', icon: faCarSide, num :26  },
  { name: 'Van', icon: faVanShuttle , num :26 },
  { name: 'Compact', icon: faCarAlt , num :26}, // Using faCarAlt
  { name: 'Coup', icon: faCarRear , num :26 },
  { name: 'Pickup', icon: faTruckPickup, num :26 }
];


  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250; // Adjust scroll distance as needed
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={Styles.scrollContainer}>
  <div className={Styles.sectionTitle}>Categories</div>
  
    <ul className={Styles.catList}>
      <li 
        className={activeTab === 'Popular' ? Styles.active : ''} 
        onClick={() => setActiveTab('Popular')}
      >
        Popular
      </li>
      <li 
        className={activeTab === 'Body Type' ? Styles.active : ''} 
        onClick={() => setActiveTab('Body Type')}
      >
        Body Type
      </li>
      <li 
        className={activeTab === 'Rent Type' ? Styles.active : ''} 
        onClick={() => setActiveTab('Rent Type')}
      >
        Rent Type
      </li>
    </ul>

    <div className={Styles.scrollWrapper}>
      <button 
        className={`${Styles.scrollBtn} ${Styles.left}`} 
        onClick={() => scroll('left')}
        aria-label="Scroll left"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className={Styles.vehicleTypes} ref={scrollRef}>
        {vehicleTypes.map((type, index) => (
          <div key={index} className={Styles.vehicleCard}>
            <div className={Styles.vehicleIcon}>
              <FontAwesomeIcon icon={type.icon} className={Styles.car} size="2x" />
            </div>
            <div className={Styles.circle} />
            <div className={Styles.cd}>
              <h3 className={Styles.name}>{type.name}</h3>
              <div className={Styles.number}>{type.num} vehicle</div>
            </div>
        </div>
      ))}
    </div>

    <button 
      className={`${Styles.scrollBtn} ${Styles.right}`} 
      onClick={() => scroll('right')}
      aria-label="Scroll right"
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div>
</div>
  );
}

export default HorizontalScrollCategories;