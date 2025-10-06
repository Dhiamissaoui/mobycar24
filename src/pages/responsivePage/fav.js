import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHeart, faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';

// Import car images
import porscheImage from '../../images/porsche.png';
import cadillacImage from '../../images/car-cadillac.png';
import rolls from '../../images/car-rolls.png';
import carLambo from '../../images/car-lambo.png';
import carMini from '../../images/car-mini.png';
import carRange from '../../images/car-range.png';

import styles from '../../styles/responsiveStyle/fav.module.css';

function Fav({ setActiveTab, toggleSideMenu }) {
    return (
        <div className={styles.favContainer}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
                <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={styles.favTitle}>My Favourite</h1>
                <div className={styles.headerIcons}>
                    <button onClick={() => setActiveTab('notifications')} className={styles.iconButton}>
                        <BellIcon className={styles.headerIcon} />
                    </button>
                    <button className={styles.iconButton} onClick={toggleSideMenu}>
                        <Bars3Icon className={styles.headerIcon} />
                    </button>
                </div>
            </div>

            {/* Car Cards Grid */}
            <div className={styles.offersGrid}>
                {[
                    {
                        id: 1,
                        name: "Lexus NX - 300",
                        image: porscheImage,
                        price: "£72.00/Day",
                        features: ["Insurance Included", "250 Km/Day"]
                    },
                    {
                        id: 2,
                        name: "Lexus NX - 300",
                        image: cadillacImage,
                        price: "£72.00/Day",
                        features: ["Insurance Included", "250 Km/Day"]
                    },
                    {
                        id: 3,
                        name: "Lexus NX - 300",
                        image: rolls,
                        price: "£72.00/Day",
                        features: ["Insurance Included", "250 Km/Day"]
                    },
                    {
                        id: 4,
                        name: "Lexus NX - 300",
                        image: carLambo,
                        price: "£72.00/Day",
                        features: ["Insurance Included", "250 Km/Day"]
                    },
                    {
                        id: 5,
                        name: "Lexus NX - 300",
                        image: carMini,
                        price: "£72.00/Day",
                        features: ["Insurance Included", "250 Km/Day"]
                    },
                    {
                        id: 6,
                        name: "Lexus NX - 300",
                        image: carRange,
                        price: "£72.00/Day",
                        features: ["Insurance Included", "250 Km/Day"]
                    },
                    {
                        id: 6,
                        name: "Lexus NX - 300",
                        image: carRange,
                        price: "£72.00/Day",
                        features: ["Insurance Included", "250 Km/Day"]
                    },
                    {
                        id: 6,
                        name: "Lexus NX - 300",
                        image: carRange,
                        price: "£72.00/Day",
                        features: ["Insurance Included", "250 Km/Day"]
                    }
                ].map(car => (
                    <div key={car.id} className={styles.offerCard}>
                        <div className={styles.availabilityTag}>Available</div>
                        <div className={styles.favoriteIcon}>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <img src={car.image} alt={car.name} className={styles.offerImage} />
                        <div className={styles.offerDetails}>
                            <h3 className={styles.carModel}>{car.name}</h3>
                            <div className={styles.features}>
                                {car.features.map((feature, index) => (
                                    <div key={index} className={styles.feature}>
                                        {index === 0 ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.featureIcon}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                            </svg>
                                        ) : (
                                            <FontAwesomeIcon icon={faGaugeHigh} className={styles.featureIcon} />
                                        )}
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            <div className={styles.priceSection}>
                                <span className={styles.price}>{car.price}</span>
                                <button className={styles.reserveBtn} onClick={() => setActiveTab('carDetResponsive')}>Reserve</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fav;