import { useRef } from 'react';
import Styles from '../styles/TodaysOffers.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons';



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
          <FontAwesomeIcon icon={faChevronLeft} />
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
                  <div className={Styles['insur']}><FontAwesomeIcon icon={offer.insurance} /> Insurance included </div>
                  <div className={Styles['mile']}><FontAwesomeIcon icon={offer.mileage} /> 250 km/Day</div>
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
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}

export default TodaysOffers;