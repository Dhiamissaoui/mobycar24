import { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Styles from '../styles/HorizontalScrollCategories.module.css';

import { ReactComponent as SportsCar } from '../images/categories/sports_car.svg';
import { ReactComponent as Luxury } from '../images/categories/luxury.svg';
import { ReactComponent as Suv } from '../images/categories/suv.svg';
import { ReactComponent as Conv } from '../images/categories/conv.svg';
import { ReactComponent as Hatchback } from '../images/categories/hatchback.svg';
import { ReactComponent as Sedan } from '../images/categories/sedan.svg';





function HorizontalScrollCategories() {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Popular');


  const vehicleTypes = [
    { name: 'Sports Car', icon: SportsCar, num: 26 },
    { name: 'Luxury', icon: Luxury, num: 26 },
    { name: 'SUV', icon: Suv, num: 26 },
    { name: 'Convertible', icon: Conv, num: 26 },
    { name: 'Hatchbacks', icon: Hatchback, num: 26 },
    { name: 'Sedan', icon: Sedan, num: 26 }
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
          {vehicleTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={index} className={Styles.vehicleCard}>
                <div className={Styles.vehicleIcon}>
                  <Icon className={Styles.car} />   {/* ✅ your SVG as component */}
                </div>
                <div className={Styles.circle} />
                <div className={Styles.cd}>
                  <h3 className={Styles.name}>{type.name}</h3>
                  <div className={Styles.number}>{type.num} vehicle</div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className={`${Styles.scrollBtn} ${Styles.right}`}
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div >
  );
}

export default HorizontalScrollCategories;