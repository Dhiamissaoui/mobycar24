import React, { useState, memo, useMemo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faHome,
    faCar,
    faComment,
    faCarSide
} from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';

// Import existing components

// Import images



// Import category icons
import { ReactComponent as SportsCar } from '../../images/categories/sports_car.svg';
import { ReactComponent as Hatchback } from '../../images/categories/hatchback.svg';
import { ReactComponent as Suv } from '../../images/categories/suv.svg';
import { ReactComponent as Conv } from '../../images/categories/conv.svg';


//import toyota homepage image
import toyotaHomePage from '../../images/resposiveImgs/toyota_HomePage.png';

// Import brand logos
import audiLogo from '../../images/audi logo.png';
import bmwLogo from '../../images/bmw logo.png';
import ferrariLogo from '../../images/ferrari logo.png';
import lamborghiniLogo from '../../images/lambo logo.png';

// Import car images for offers
import porscheImage from '../../images/porsche.png';
import cadillacImage from '../../images/car-cadillac.png';

import styles from '../../styles/responsiveStyle/HomePageResposive.module.css';

const HomePageResponsive = memo(() => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabChange = useCallback((tab) => {
        setActiveTab(tab);
    }, []);

    const renderContent = useMemo(() => {
        switch (activeTab) {
            case 'home':
                return (
                    <div className={styles.mobileContainer}>
                        {/* Mobile Header */}
                        <div className={styles.mobileHeader}>
                            <div className={styles.logoContainer}>
                                <span className={styles.logoMoby}>MOBY</span>
                                <span className={styles.logoCar}>CAR24</span>
                            </div>
                            <div className={styles.headerIcons}>
                                <button className={styles.iconButton}>
                                    <BellIcon className={styles.headerIcon} />
                                </button>
                                <button className={styles.iconButton}>
                                    <Bars3Icon className={styles.headerIcon} />
                                </button>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className={styles.searchSection}>
                            <div className={styles.searchRow}>
                                <div className={styles.searchBar}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
                                    <input
                                        type="text"
                                        placeholder="Search by vehicle model/brand"
                                        className={styles.searchInput}
                                    />
                                </div>
                                <button className={styles.filterButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Promotional Banner */}
                        <div className={styles.promoBanner}>
                            <div className={styles.promoContent}>
                                <h3 className={styles.promoTitle}>Lorem ipsum dolor</h3>
                                <p className={styles.promoSubtitle}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className={styles.promoImage}>
                                <img src={toyotaHomePage} alt="Toyota Homepage" className={styles.carImage} />
                            </div>
                        </div>

                        {/* Categories Section */}
                        <div className={styles.categoriesSection}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}>Categories</h2>
                                <span className={styles.viewAll}>View All</span>
                            </div>
                            <div className={styles.categoriesGrid}>
                                <div className={styles.categoryCard}>
                                    <div className={styles.categoryIcon}>
                                        <SportsCar className={styles.categorySvg} />
                                    </div>
                                    <div className={styles.categoryInfo}>
                                        <span className={styles.categoryName}>Sports Car</span>
                                        <span className={styles.categoryCount}>26 Car</span>
                                    </div>
                                </div>
                                <div className={styles.categoryCard}>
                                    <div className={styles.categoryIcon}>
                                        <Hatchback className={styles.categorySvg} />
                                    </div>
                                    <div className={styles.categoryInfo}>
                                        <span className={styles.categoryName}>Sports Car</span>
                                        <span className={styles.categoryCount}>68 Car</span>
                                    </div>
                                </div>
                                <div className={styles.categoryCard}>
                                    <div className={styles.categoryIcon}>
                                        <Suv className={styles.categorySvg} />
                                    </div>
                                    <div className={styles.categoryInfo}>
                                        <span className={styles.categoryName}>SUVs</span>
                                        <span className={styles.categoryCount}>52 Car</span>
                                    </div>
                                </div>
                                <div className={styles.categoryCard}>
                                    <div className={styles.categoryIcon}>
                                        <Conv className={styles.categorySvg} />
                                    </div>
                                    <div className={styles.categoryInfo}>
                                        <span className={styles.categoryName}>Convertible</span>
                                        <span className={styles.categoryCount}>18 Car</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Brands Section */}
                        <div className={styles.brandsSection}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}>Brands</h2>
                                <span className={styles.viewAll}>View All</span>
                            </div>
                            <div className={styles.brandsGrid}>
                                <div className={styles.brandCard}>
                                    <img src={audiLogo} alt="Audi" className={styles.brandLogo} />
                                    <span className={styles.brandName}>Audi</span>
                                </div>
                                <div className={styles.brandCard}>
                                    <div style={{ width: '30px', height: '30px' }}>
                                        <img src={bmwLogo} alt="BMW" className={styles.brandLogo} />
                                    </div>

                                    <span className={styles.brandName}>BMW</span>
                                </div>
                                <div className={styles.brandCard}>
                                    <img src={ferrariLogo} alt="Ferrari" className={styles.brandLogo} />
                                    <span className={styles.brandName}>Ferrari</span>
                                </div>
                                <div className={styles.brandCard}>
                                    <img src={lamborghiniLogo} alt="Lamborghini" className={styles.brandLogo} />
                                    <span className={styles.brandName}>Lamborghini</span>
                                </div>
                            </div>
                        </div>

                        {/* Offers Section */}
                        <div className={styles.offersSection}>
                            <h2 className={styles.sectionTitle}>Offers</h2>
                            <div className={styles.offersGrid}>
                                <div className={styles.offerCard}>
                                    <div className={styles.offerBadge}>25% Off</div>
                                    <div className={styles.availability}>Available</div>
                                    <img src={porscheImage} alt="Porsche Cayenne" className={styles.offerImage} />
                                    <div className={styles.offerDetails}>
                                        <h3 className={styles.carModel}>Lexus NX - 300</h3>
                                        <div className={styles.features}>
                                            <div className={styles.feature}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                                    <path d="m9 12 2 2 4-4" />
                                                </svg>
                                                Insurance Included
                                            </div>
                                            <div className={styles.feature}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m12 14 4-4" />
                                                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                                                </svg>
                                                250 Km/Day
                                            </div>
                                        </div>
                                        <div className={styles.priceSection}>
                                            <span className={styles.price}>£72.00/Day</span>
                                            <button className={styles.reserveBtn}>Reserve</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.offerCard}>
                                    <div className={styles.offerBadge}>25% Off</div>
                                    <div className={styles.availability}>Available</div>
                                    <img src={cadillacImage} alt="Cadillac Escalade" className={styles.offerImage} />
                                    <div className={styles.offerDetails}>
                                        <h3 className={styles.carModel}>Lexus NX - 300</h3>
                                        <div className={styles.features}>
                                            <div className={styles.feature}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                                    <path d="m9 12 2 2 4-4" />
                                                </svg>
                                                Insurance Included
                                            </div>
                                            <div className={styles.feature}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m12 14 4-4" />
                                                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                                                </svg>
                                                250 Km/Day
                                            </div>
                                        </div>
                                        <div className={styles.priceSection}>
                                            <span className={styles.price}>£72.00/Day</span>
                                            <button className={styles.reserveBtn}>Reserve</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.offerCard}>
                                    <div className={styles.offerBadge}>25% Off</div>
                                    <div className={styles.availability}>Available</div>
                                    <img src={cadillacImage} alt="Cadillac Escalade" className={styles.offerImage} />
                                    <div className={styles.offerDetails}>
                                        <h3 className={styles.carModel}>Lexus NX - 300</h3>
                                        <div className={styles.features}>
                                            <div className={styles.feature}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                                    <path d="m9 12 2 2 4-4" />
                                                </svg>
                                                Insurance Included
                                            </div>
                                            <div className={styles.feature}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m12 14 4-4" />
                                                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                                                </svg>
                                                250 Km/Day
                                            </div>
                                        </div>
                                        <div className={styles.priceSection}>
                                            <span className={styles.price}>£72.00/Day</span>
                                            <button className={styles.reserveBtn}>Reserve</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.offerCard}>
                                    <div className={styles.offerBadge}>25% Off</div>
                                    <div className={styles.availability}>Available</div>
                                    <img src={cadillacImage} alt="Cadillac Escalade" className={styles.offerImage} />
                                    <div className={styles.offerDetails}>
                                        <h3 className={styles.carModel}>Lexus NX - 300</h3>
                                        <div className={styles.features}>
                                            <div className={styles.feature}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                                    <path d="m9 12 2 2 4-4" />
                                                </svg>
                                                Insurance Included
                                            </div>
                                            <div className={styles.feature}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="m12 14 4-4" />
                                                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                                                </svg>
                                                250 Km/Day
                                            </div>
                                        </div>
                                        <div className={styles.priceSection}>
                                            <span className={styles.price}>£72.00/Day</span>
                                            <button className={styles.reserveBtn}>Reserve</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'rent':
                return <div className={styles.tabContent}>Rent a Car Content</div>;
            case 'message':
                return <div className={styles.tabContent}>Message Content</div>;
            case 'rides':
                return <div className={styles.tabContent}>My Rides Content</div>;
            default:
                return null;
        }
    }, [activeTab]);

    return (
        <div className={styles.appContainer}>
            {renderContent}

            {/* Fixed Bottom Navigation */}
            <div className={styles.bottomNav}>
                <button
                    className={`${styles.navItem} ${activeTab === 'home' ? styles.active : ''}`}
                    onClick={() => handleTabChange('home')}
                >
                    <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
                    <span className={styles.navLabel}>Home</span>
                </button>
                <button
                    className={`${styles.navItem} ${activeTab === 'rent' ? styles.active : ''}`}
                    onClick={() => handleTabChange('rent')}
                >
                    <FontAwesomeIcon icon={faCar} className={styles.navIcon} />
                    <span className={styles.navLabel}>Rent a car</span>
                </button>
                <button
                    className={`${styles.navItem} ${activeTab === 'message' ? styles.active : ''}`}
                    onClick={() => handleTabChange('message')}
                >
                    <FontAwesomeIcon icon={faComment} className={styles.navIcon} />
                    <span className={styles.navLabel}>Message</span>
                </button>
                <button
                    className={`${styles.navItem} ${activeTab === 'rides' ? styles.active : ''}`}
                    onClick={() => handleTabChange('rides')}
                >
                    <FontAwesomeIcon icon={faCarSide} className={styles.navIcon} />
                    <span className={styles.navLabel}>My rides</span>
                </button>
            </div>
        </div>
    );
});

export default HomePageResponsive;
