import { useRef, useState } from 'react';


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
    { name: 'Luxury Car', icon: Luxury, num: 129 },
    { name: 'SUV', icon: Suv, num: 125 },
    { name: 'Convertible', icon: Conv, num: 132 },
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
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
                  <div className={Styles.name}>{type.name}</div>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </button>
      </div>
    </div >
  );
}

export default HorizontalScrollCategories;