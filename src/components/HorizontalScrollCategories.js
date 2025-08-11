import React, { useRef,useState } from 'react';
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
import '../styles/HorizontalScrollCategories.css';

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
    <div className="scroll-container">
      <h1 className="section-title">Categories</h1>
       <ul className='cat-list'>
        <li 
          className={activeTab === 'Popular' ? 'active' : ''}
          onClick={() => setActiveTab('Popular')}
        >
          Popular
        </li>
        <li 
          className={activeTab === 'Body Type' ? 'active' : ''}
          onClick={() => setActiveTab('Body Type')}
        >
          Body Type
        </li>
        <li 
          className={activeTab === 'Rent Type' ? 'active' : ''}
          onClick={() => setActiveTab('Rent Type')}
        >
          Rent Type
        </li>
      </ul>
      <div className="scroll-wrapper">
        <button 
          className="scroll-btn left" 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        
          <div className="vehicle-types" ref={scrollRef}>
          {vehicleTypes.map((type, index) => (
            <div key={index}
            className='vehicle-card'>
              <div className="vehicle-icon">
                <FontAwesomeIcon icon={type.icon} className='car' size="2x" />
              </div>
              <div className='circle'/>
              <div className='cd'>
                <h3 className='name' size='18px'>{type.name}</h3>
                <div className='number'>{type.num}vehicle</div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="scroll-btn right" 
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