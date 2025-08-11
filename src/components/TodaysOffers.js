import  { useRef } from 'react';
import '../styles/TodaysOffers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import images
import porscheImage from '../images/porsche.png';
import cadillacImage from '../images/cadillac.png';
import rollsRoyceImage from '../images/rolls.png';
import { 
  faShieldAlt,       // For insurance
  faTachometerAlt,
  faCalendar    // For mileage
} from '@fortawesome/free-solid-svg-icons';

function TodaysOffers() {
  const scrollRef = useRef(null);
  
  const offers = [
    {
      discount: '15% Off',
      car: 'Porsche Cayenne',
      features: ['Available', 'Insurance Included', '250 Km/Day'],
      price: '£72.00/Day',
      image: porscheImage,
      mileage:faTachometerAlt,
      insurance : faShieldAlt,
      av:'available'
    },
    {
      discount: '20% Off',
      car: 'Cadillac Escalade',
      features: ['Available', 'Insurance Included', '250 Km/Day'],
      price: '£72.00/Day',
      image: cadillacImage,
      mileage:faTachometerAlt,
      insurance : faShieldAlt,
      av:'available'
    },
    {
      discount: '25% Off',
      car: 'Rolls Royce Dawn',
      features: ['Available', 'Insurance Included', '250 Km/Day'],
      price: '£72.00/Day',
      image: rollsRoyceImage,
      mileage:faTachometerAlt,
      insurance : faShieldAlt,
      av:'not available'
      
    },{
      discount: '25% Off',
      car: 'Rolls Royce Dawn',
      features: ['Available', 'Insurance Included', '250 Km/Day'],
      price: '£72.00/Day',
      image: rollsRoyceImage,
      mileage:faTachometerAlt,
      insurance : faShieldAlt,
      av:'available'
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="todays-offers">
      <div className="offers-header">
        <h2>Today's Car Rental Offers</h2>
        <div className="subtitle">
          Lorem ipsum dolor sit amet consectetur. Adipiscing morbi tellus arcu sed morbi. Nibh amet dignissim in ac duis etiam consectetur dolor ultrices.
          
        </div>
      </div>

      <div className="offers-scroller">
        <button className="scroll-btn left" onClick={() => scroll('left')}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        
        <div className="offers-container" ref={scrollRef}>
          {offers.map((offer, index) => (
            <div key={index} className="offer-card">
              <div className="offer-badge">{offer.discount}</div>
              <img src={offer.image} alt={offer.car} className="car-image" />
              <div className="offer-details">
                <div className='cd1'>
                  <h3>{offer.car}</h3>
                  <h5 className={offer.av !== 'available'?'not':'available'}><FontAwesomeIcon icon={faCalendar} />  {offer.av}</h5>
                </div>
                <div className='cd2'>
                  <p className='insur'><FontAwesomeIcon icon={offer.insurance} /> Insurance included </p>
                  <p className='mile'><FontAwesomeIcon icon={offer.mileage} /> 250 km/Day</p>
                </div>
                <hr></hr>
                <div className="price-section">
                  <p>{offer.price}</p>
                  <button className="reserve-btn">Reserve</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="scroll-btn right" onClick={() => scroll('right')}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}

export default TodaysOffers;