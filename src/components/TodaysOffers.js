import { useRef } from 'react';
import Styles from '../styles/TodaysOffers.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



// Import images
import porscheImage from '../images/porsche.png';
import cadillacImage from '../images/car-cadillac.png';
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
      mileage: faTachometerAlt,
      insurance: faShieldAlt,
      av: 'available'
    },
    {
      discount: '20% Off',
      car: 'Cadillac Escalade',
      features: ['Available', 'Insurance Included', '250 Km/Day'],
      price: '£72.00/Day',
      image: cadillacImage,
      mileage: faTachometerAlt,
      insurance: faShieldAlt,
      av: 'available'
    },
    {
      discount: '25% Off',
      car: 'Rolls Royce Dawn',
      features: ['Available', 'Insurance Included', '250 Km/Day'],
      price: '£72.00/Day',
      image: rollsRoyceImage,
      mileage: faTachometerAlt,
      insurance: faShieldAlt,
      av: 'not available'

    }, {
      discount: '25% Off',
      car: 'Rolls Royce Dawn',
      features: ['Available', 'Insurance Included', '250 Km/Day'],
      price: '£72.00/Day',
      image: rollsRoyceImage,
      mileage: faTachometerAlt,
      insurance: faShieldAlt,
      av: 'available'
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
    <section className={Styles["todays-offers"]}>
      <div className={Styles["offers-header"]}>
        <div className={Styles['title']}>Today's Car Rental Offers</div>
        <div className={Styles["subtitle"]}>
          Lorem ipsum dolor sit amet consectetur. Adipiscing morbi tellus arcu sed morbi. Nibh amet dignissim in ac duis etiam consectetur dolor ultrices.

        </div>
      </div>

      <div className={Styles['offers-scroller']}>
        <button className={`${Styles.scroll_btn} ${Styles.left}`} onClick={() => scroll('left')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" #D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
        </button>

        <div className={Styles['offers-container']} ref={scrollRef}>
          {offers.map((offer, index) => (
            <div key={index} className={Styles['offer-card']}>
              <div className={Styles['offer-badge']}>{offer.discount}</div>
              <FontAwesomeIcon icon={faHeart} className={Styles['heart']} />
              <img src={offer.image} alt={offer.car} className={Styles['car-image']} />
              <div className={Styles['offer-details']}>
                <div className={Styles['cd1']}>
                  <h3 className={Styles.hh3}>{offer.car}</h3>
                  <h5 className={offer.av !== 'available' ? Styles.not : Styles.available}><FontAwesomeIcon icon={faCalendar} />  {offer.av}</h5>
                </div>
                <div className={Styles['cd2']}>
                  <div className={Styles['insur']}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '15px' }} className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                    Insurance included </div>
                  <div className={Styles['mile']}><svg style={{ width: '15px', marginTop: '-3px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg> 250 km/Day</div>
                </div>
                <div className={Styles['line']}></div>
                <div className={Styles['price-section']}>
                  <div className={Styles.price}>{offer.price}</div>
                  <button className={Styles['reserve-btn']}>Reserve</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={`${Styles.scroll_btn} ${Styles.right}`} onClick={() => scroll('right')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </button>
      </div>
    </section >
  );
}

export default TodaysOffers;