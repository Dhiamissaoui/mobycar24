import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faCalendar,
    faGaugeHigh,
    faPhone,
    faStar,
    faX,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { GB, US, CA, AU, DE, FR, ES, IT } from 'country-flag-icons/react/3x2';
import styles from '../../styles/responsiveStyle/CarDetResponsive.module.css';

// Import images
import carImage from '../../images/rides_audi.png';
import profileImage from '../../images/profile pic.png';
import porscheImage from '../../images/porsche.png';
import phoneMsgIcon from '../../images/resposiveImgs/phonemsg.png';

const CarDetResponsive = ({ setActiveTab, toggleSideMenu }) => {
    const [contactActive, setContactActive] = useState(false);
    const [bookingActive, setBookingActive] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('GB');
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const [bookingSummaryActive, setBookingSummaryActive] = useState(false);

    const toggleFaq = (index) => {
        setActiveFaqIndex(activeFaqIndex === index ? null : index);
    };

    const toggleCountryDropdown = () => {
        setCountryDropdownOpen(!countryDropdownOpen);
    };

    const selectCountry = (countryCode) => {
        setSelectedCountry(countryCode);
        setCountryDropdownOpen(false);
    };

    const handleViewPriceDetails = () => {
        setBookingSummaryActive(true);
    };

    // Get the correct flag component based on selected country
    const FlagIcon = {
        GB: GB,
        US: US,
        CA: CA,
        AU: AU,
        DE: DE,
        FR: FR,
        ES: ES,
        IT: IT
    }[selectedCountry];

    const countryData = {
        GB: { code: '+44', name: 'United Kingdom' },
        US: { code: '+1', name: 'United States' },
        CA: { code: '+1', name: 'Canada' },
        AU: { code: '+61', name: 'Australia' },
        DE: { code: '+49', name: 'Germany' },
        FR: { code: '+33', name: 'France' },
        ES: { code: '+34', name: 'Spain' },
        IT: { code: '+39', name: 'Italy' }
    };

    const faqData = [
        {
            title: "Lorem ipsum dolor sit amet consectetur molestie?",
            content: "Lorem ipsum dolor sit amet consectetur. Auctor porttitor vitae varius vitae. Sem in nisl vel sapien velit egestas tincidunt a. Ridiculus iaculis amet aliquam volutpat fermentum tempor nulla vitae."
        },
        {
            title: "Lorem ipsum dolor sit amet consectetur molestie?",
            content: "Lorem ipsum dolor sit amet consectetur. Auctor porttitor vitae varius vitae. Sem in nisl vel sapien velit egestas tincidunt a. Ridiculus iaculis amet aliquam volutpat fermentum tempor nulla vitae."
        },
        {
            title: "Lorem ipsum dolor sit amet consectetur molestie?",
            content: "Lorem ipsum dolor sit amet consectetur. Auctor porttitor vitae varius vitae. Sem in nisl vel sapien velit egestas tincidunt a. Ridiculus iaculis amet aliquam volutpat fermentum tempor nulla vitae."
        }
    ];

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const handleContact = () => {
        setContactActive(true);
    };

    const handleReserve = () => {
        setBookingActive(true);
        setBookingSummaryActive(false);
    };

    const handleBookingSubmit = () => {
        setBookingActive(false);
        setActiveTab('signup')
    };

    const handleBackToHome = () => {
        if (setActiveTab) {
            setActiveTab('home');
        }
    };

    return (
        <div className={styles.container}>
            {/* Top Navigation */}
            <div className={styles.mobileHeader}>
                <button className={styles.backButton} onClick={handleBackToHome}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className={styles.headerIcons}>
                    <button onClick={() => setActiveTab('notifications')} className={styles.iconButton}>
                        <BellIcon className={styles.headerIcon} />
                    </button>
                    <button className={styles.iconButton} onClick={toggleSideMenu}>
                        <Bars3Icon className={styles.headerIcon} />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
                {/* Car Image Section */}
                <div className={styles.carImageSection}>
                    <div className={styles.carImageContainer}>
                        <div className={styles.yearTag}>2015</div>
                        <button
                            className={`${styles.favoriteBtn} ${isFavorited ? styles.favorited : ''}`}
                            onClick={toggleFavorite}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <img src={carImage} alt="Audi A6" className={styles.carImage} />
                    </div>
                </div>

                {/* Car Details */}
                <div className={styles.carDetails}>
                    <div className={styles.carTitle}>
                        <h1 className={styles.carTitleText}>Rent Audi A6 (Blue), 2024</h1>
                        <div className={styles.price}>£153/day</div>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={faCalendar} />
                            <span>Available Now</span>
                        </div>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={faGaugeHigh} />
                            <span>250 Km/Day</span>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.insuranceIcon}></div>
                            <span>Insurance Included</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className={styles.description}>
                    <h2 className={styles.descriptionTitle}>Description</h2>
                    <p className={styles.descriptionText}>
                        Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam pretium. Imperdiet faucibus feugiat vitae id at nullam vitae etiam venenatis. Tortor rhoncus elementum.
                    </p>
                </div>

                {/* Provider Section */}
                <div className={styles.providerSection}>
                    <div className={styles.providerInfo}>
                        <img src={profileImage} alt="Provider" className={styles.providerImage} />
                        <div className={styles.providerDetails}>
                            <span className={styles.providerLabel}>Provider</span>
                            <span className={styles.providerName}>Esther Howard</span>
                        </div>
                    </div>
                    <button className={styles.contactBtn} onClick={handleContact}>
                        Contact
                    </button>
                </div>

                {/* Date Selection */}
                <div className={styles.searchSectionclick}>
                    <h3 className={styles.sectionTitle}>Choose a rental date</h3>

                    {/* Date Fields Side by Side */}
                    <div className={styles.dateFieldsContainer}>
                        <div className={styles.dateInputGroup}>
                            <label className={styles.dateLabel}>Pick-up date</label>
                            <div className="dropdown show">
                                <button
                                    className="btn d-flex align-items-center justify-content-between dropdown-toggle bg-white w-100"
                                    type="button"
                                    id="pickupDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ borderRadius: '8px' }}
                                >
                                    <div style={{ color: '#B1B1B1' }}>15 Feb 2024</div>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="pickupDropdown">
                                    <li><button className="dropdown-item">15 Feb 2024</button></li>
                                    <li><button className="dropdown-item">16 Feb 2024</button></li>
                                    <li><button className="dropdown-item">17 Feb 2024</button></li>
                                    <li><button className="dropdown-item">18 Feb 2024</button></li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.dateInputGroup}>
                            <label className={styles.dateLabel}>Drop-off date</label>
                            <div className="dropdown show">
                                <button
                                    className="btn d-flex align-items-center justify-content-between dropdown-toggle bg-white w-100"
                                    type="button"
                                    id="dropoffDropdown"
                                    data-bs-toggle="dropdown"
                                    style={{ borderRadius: '8px' }}
                                    aria-expanded="false"
                                >
                                    <div style={{ color: '#B1B1B1' }}>16 Feb 2024</div>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropoffDropdown">
                                    <li><button className="dropdown-item">16 Feb 2024</button></li>
                                    <li><button className="dropdown-item">17 Feb 2024</button></li>
                                    <li><button className="dropdown-item">18 Feb 2024</button></li>
                                    <li><button className="dropdown-item">19 Feb 2024</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Calendar Widget */}
                    <div className={styles.calendarWidget}>
                        <div className={styles.calendarHeader}>
                            <button className={styles.calendarNavleft}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <span className={styles.calendarMonth}>February 2024</span>
                            <button className={styles.calendarNavright}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                        <div className={styles.calendarDays}>
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <div key={day} className={styles.dayHeader}>{day}</div>
                            ))}
                        </div>
                        <div className={styles.calendarGrid}>
                            {[
                                { date: 31, isSelected: false, isStart: false, isEnd: false },
                                { date: 1, isSelected: false, isStart: false, isEnd: false },
                                { date: 2, isSelected: false, isStart: false, isEnd: false },
                                { date: 3, isSelected: false, isStart: false, isEnd: false },
                                { date: 4, isSelected: false, isStart: false, isEnd: false },
                                { date: 5, isSelected: false, isStart: false, isEnd: false },
                                { date: 6, isSelected: false, isStart: false, isEnd: false },
                                { date: 7, isSelected: false, isStart: false, isEnd: false },
                                { date: 8, isSelected: false, isStart: false, isEnd: false },
                                { date: 9, isSelected: false, isStart: false, isEnd: false },
                                { date: 10, isSelected: false, isStart: false, isEnd: false },
                                { date: 11, isSelected: false, isStart: false, isEnd: false },
                                { date: 12, isSelected: false, isStart: false, isEnd: false },
                                { date: 13, isSelected: false, isStart: false, isEnd: false },
                                { date: 14, isSelected: false, isStart: false, isEnd: false },
                                { date: 15, isSelected: true, isStart: true, isEnd: false },
                                { date: 16, isSelected: true, isStart: false, isEnd: true },
                                { date: 17, isSelected: false, isStart: false, isEnd: false },
                                { date: 18, isSelected: false, isStart: false, isEnd: false },
                                { date: 19, isSelected: false, isStart: false, isEnd: false },
                                { date: 20, isSelected: false, isStart: false, isEnd: false },
                                { date: 21, isSelected: false, isStart: false, isEnd: false },
                                { date: 22, isSelected: false, isStart: false, isEnd: false },
                                { date: 23, isSelected: false, isStart: false, isEnd: false },
                                { date: 24, isSelected: false, isStart: false, isEnd: false },
                                { date: 25, isSelected: false, isStart: false, isEnd: false },
                                { date: 26, isSelected: false, isStart: false, isEnd: false },
                                { date: 27, isSelected: false, isStart: false, isEnd: false },
                                { date: 28, isSelected: false, isStart: false, isEnd: false },
                                { date: 1, isSelected: false, isStart: false, isEnd: false },
                                { date: 2, isSelected: false, isStart: false, isEnd: false },
                                { date: 3, isSelected: false, isStart: false, isEnd: false },
                                { date: 4, isSelected: false, isStart: false, isEnd: false }
                            ].map((dayData, index) => {
                                const getClassName = () => {
                                    if (dayData.isStart) return `${styles.calendarDate} ${styles.selectedDateStart}`;
                                    if (dayData.isEnd) return `${styles.calendarDate} ${styles.selectedDateEnd}`;
                                    return styles.calendarDate;
                                };

                                return (
                                    <div key={index} className={getClassName()}>
                                        <div style={{ fontSize: '9px' }}>{dayData.date}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Specification Section */}
                <div className={styles.specificationSection}>
                    <h2 className={styles.specificationTitle}>Specification</h2>
                    <div className={styles.specificationGrid}>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>Year</span>
                            <span className={styles.specValue}>2023</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>Colour</span>
                            <span className={styles.specValue}>Blue</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>0-100KM/H</span>
                            <span className={styles.specValue}>8.4 SEC</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>Transmission</span>
                            <span className={styles.specValue}>Automatic</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>Motor</span>
                            <span className={styles.specValue}>2.4L 4 Cylinder</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>Max. speed</span>
                            <span className={styles.specValue}>232</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>Horsepower</span>
                            <span className={styles.specValue}>340</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>Type of fuel</span>
                            <span className={styles.specValue}>Gas</span>
                        </div>
                        <div className={styles.specItem}>
                            <span className={styles.specLabel}>Body type</span>
                            <span className={styles.specValue}>Sedan</span>
                        </div>
                    </div>
                </div>

                {/* Google Maps Section */}
                <div className={styles.mapSection}>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312997933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1625073982878!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Car Location Map"
                        ></iframe>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className={styles.reviewsSection}>
                    <h2 className={styles.reviewsTitle}>Reviews</h2>
                    <div className={styles.overallRating}>
                        <FontAwesomeIcon icon={faStar} className={styles.overallStar} />
                        <span className={styles.overallRatingText}>4.5 ( 54 Reviews)</span>
                    </div>
                    <div className={styles.reviewsScrollContainer}>
                        <div className={styles.reviewCard}>
                            <div className={styles.reviewHeader}>
                                <div>
                                    <div className={styles.reviewerName}>Chance Bergson</div>
                                    <div className={styles.reviewerLocation}>Warsaw, Poland</div>
                                </div>

                                <div className={styles.reviewRating}>
                                    <FontAwesomeIcon icon={faStar} className={styles.reviewStar} />
                                    <span>4.5</span>
                                </div>
                            </div>

                            <div className={styles.reviewText}>"Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan."</div>
                        </div>
                        <div className={styles.reviewCard}>
                            <div className={styles.reviewHeader}>
                                <div>
                                    <div className={styles.reviewerName}>Ekstrom B</div>
                                    <div className={styles.reviewerLocation}>Warsaw, Poland</div>
                                </div>

                                <div className={styles.reviewRating}>
                                    <FontAwesomeIcon icon={faStar} className={styles.reviewStar} />
                                    <span>4.5</span>
                                </div>
                            </div>

                            <div className={styles.reviewText}>"Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan."</div>
                        </div>
                        <div className={styles.reviewCard}>
                            <div className={styles.reviewHeader}>
                                <div>
                                    <div className={styles.reviewerName}>Chance Bergson</div>
                                    <div className={styles.reviewerLocation}>Warsaw, Poland</div>
                                </div>

                                <div className={styles.reviewRating}>
                                    <FontAwesomeIcon icon={faStar} className={styles.reviewStar} />
                                    <span>4.5</span>
                                </div>
                            </div>

                            <div className={styles.reviewText}>"Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan."</div>
                        </div>
                    </div>
                </div>

                {/* Similar Vehicle Section */}
                <div className={styles.similarVehicleSection}>
                    <h2 className={styles.similarVehicleTitle}>Similar Vehicle</h2>
                    <div className={styles.similarVehicleGrid}>
                        <div className={styles.similarVehicleCard}>
                            <div className={styles.similarVehicleAvailability}>Available</div>
                            <img src={porscheImage} alt="Similar Car" className={styles.similarVehicleImage} />
                            <div className={styles.similarVehicleDetails}>
                                <h3 className={styles.similarVehicleModel}>Lexus NX - 300</h3>
                                <div className={styles.similarVehicleFeatures}>
                                    <div className={styles.similarVehicleFeature}>
                                        <div className={styles.insuranceIconSmiliar}></div>
                                        <span>Insurance Included</span>
                                    </div>
                                    <div className={styles.similarVehicleFeature}>
                                        <FontAwesomeIcon icon={faGaugeHigh} />
                                        <span>250 Km/Day</span>
                                    </div>
                                </div>
                                <div className={styles.similarVehiclePriceSection}>
                                    <span className={styles.similarVehiclePrice}>£72.00</span>
                                    <span className={styles.similarVehiclePriceUnit}>/Day</span>
                                    <button className={styles.similarVehicleReserveBtn}>Reserve</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.similarVehicleCard}>
                            <div className={styles.similarVehicleAvailability}>Available</div>
                            <img src={porscheImage} alt="Similar Car" className={styles.similarVehicleImage} />
                            <div className={styles.similarVehicleDetails}>
                                <h3 className={styles.similarVehicleModel}>Lexus NX - 300</h3>
                                <div className={styles.similarVehicleFeatures}>
                                    <div className={styles.similarVehicleFeature}>
                                        <div className={styles.insuranceIconSmiliar}></div>
                                        <span>Insurance Included</span>
                                    </div>
                                    <div className={styles.similarVehicleFeature}>
                                        <FontAwesomeIcon icon={faGaugeHigh} />
                                        <span>250 Km/Day</span>
                                    </div>
                                </div>
                                <div className={styles.similarVehiclePriceSection}>
                                    <span className={styles.similarVehiclePrice}>£72.00</span>
                                    <span className={styles.similarVehiclePriceUnit}>/Day</span>
                                    <button className={styles.similarVehicleReserveBtn}>Reserve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Similar Vehicle Section */}
                <div className={styles.similarVehicleSection}>
                    <h2 className={styles.similarVehicleTitle}>More From Provider</h2>
                    <div className={styles.similarVehicleGrid}>
                        <div className={styles.similarVehicleCard}>
                            <div className={styles.similarVehicleAvailability}>Available</div>
                            <img src={porscheImage} alt="Similar Car" className={styles.similarVehicleImage} />
                            <div className={styles.similarVehicleDetails}>
                                <h3 className={styles.similarVehicleModel}>Lexus NX - 300</h3>
                                <div className={styles.similarVehicleFeatures}>
                                    <div className={styles.similarVehicleFeature}>
                                        <div className={styles.insuranceIconSmiliar}></div>
                                        <span>Insurance Included</span>
                                    </div>
                                    <div className={styles.similarVehicleFeature}>
                                        <FontAwesomeIcon icon={faGaugeHigh} />
                                        <span>250 Km/Day</span>
                                    </div>
                                </div>
                                <div className={styles.similarVehiclePriceSection}>
                                    <span className={styles.similarVehiclePrice}>£72.00</span>
                                    <span className={styles.similarVehiclePriceUnit}>/Day</span>
                                    <button className={styles.similarVehicleReserveBtn}>Reserve</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.similarVehicleCard}>
                            <div className={styles.similarVehicleAvailability}>Available</div>
                            <img src={porscheImage} alt="Similar Car" className={styles.similarVehicleImage} />
                            <div className={styles.similarVehicleDetails}>
                                <h3 className={styles.similarVehicleModel}>Lexus NX - 300</h3>
                                <div className={styles.similarVehicleFeatures}>
                                    <div className={styles.similarVehicleFeature}>
                                        <div className={styles.insuranceIconSmiliar}></div>
                                        <span>Insurance Included</span>
                                    </div>
                                    <div className={styles.similarVehicleFeature}>
                                        <FontAwesomeIcon icon={faGaugeHigh} />
                                        <span>250 Km/Day</span>
                                    </div>
                                </div>
                                <div className={styles.similarVehiclePriceSection}>
                                    <span className={styles.similarVehiclePrice}>£72.00</span>
                                    <span className={styles.similarVehiclePriceUnit}>/Day</span>
                                    <button className={styles.similarVehicleReserveBtn}>Reserve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Report Section */}
                <div className={styles.reportSection}>
                    <h2 className={styles.reportTitle}>Report</h2>
                    <div className={styles.reportForm}>
                        <div className={styles.reportField}>
                            <label className={styles.reportLabel}>Full name</label>
                            <input
                                type="text"
                                className={styles.reportInput}
                                placeholder="Enter name"
                            />
                        </div>
                        <div className={styles.reportField}>
                            <label className={styles.reportLabel}>Booking ID</label>
                            <input
                                type="text"
                                className={styles.reportInput}
                                placeholder="Enter booking ID"
                            />
                        </div>
                        <div className={styles.reportField}>
                            <label className={styles.reportLabel}>Description</label>
                            <textarea
                                className={styles.reportTextarea}
                                placeholder="Type here..."
                                rows={4}
                            ></textarea>
                        </div>
                        <button className={styles.reportSubmitBtn}>Submit</button>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className={styles.faqSection}>
                    <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                    <div className={styles.faqContainer}>
                        {faqData.map((item, index) => (
                            <div key={index} className={styles.faqItem}>
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className={styles.faqQuestionText}>{item.title}</span>
                                    <span className={styles.faqIcon}>
                                        {activeFaqIndex === index ? '−' : '+'}
                                    </span>
                                </button>
                                {activeFaqIndex === index && (
                                    <div className={styles.faqAnswer}>
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Bar */}
            <div className={styles.fixedBottomBar}>
                <div className={styles.priceInfo}>
                    <div className={styles.priceLabel}>Price For 5 Days</div>
                    <div className={styles.priceAmount}>£153</div>
                    <div className={styles.priceDetails} onClick={handleViewPriceDetails}>View Price Details</div>
                </div>
                <button className={styles.reserveBtn} onClick={handleReserve}>
                    Reserve
                </button>
            </div>

            {/* Contact Modal */}
            {contactActive && (
                <div className={styles.contactOverlay} onClick={() => setContactActive(false)}>
                    <div className={styles.contactModal} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setContactActive(false)}
                        >
                            <FontAwesomeIcon icon={faX} />
                        </button>
                        <div className={styles.contactIconOuter}>
                            <div className={styles.contactIcon}>
                                <img src={phoneMsgIcon} alt="Contact" />
                            </div>
                        </div>
                        <div className={styles.modalTitle}>How do you like to contact?</div>
                        <p className={styles.modalDescription}>Lorem ipsum dolor sit amet consectetur.</p>

                        <button className={styles.contactOptionFull}>
                            <FontAwesomeIcon icon={faPhone} />
                            Make a call
                        </button>
                        <div className={styles.socialContacts}>
                            <button className={styles.contactOptionHalf}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                                WhatsApp
                            </button>
                            <button className={styles.contactOptionHalf}>
                                <FontAwesomeIcon icon={faTelegram} />
                                Telegram
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Booking Details Modal */}
            {bookingActive && (
                <div className={styles.bookingOverlay} onClick={() => setBookingActive(false)}>
                    <div className={styles.bookingModal} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setBookingActive(false)}
                        >
                            <FontAwesomeIcon icon={faX} />
                        </button>
                        {/* Phone Number Section */}
                        <div className={styles.bookingSection}>
                            <div className={styles.bookingTitle}>Enter Your Booking Details</div>
                            <label className={styles.bookingLabel}>Phone number</label>
                            <div className={styles.phoneInputGroup}>
                                <div className={styles.countryDropdown}>
                                    <button
                                        className={`btn dropdown-toggle d-flex align-items-center ${styles.countryDropdownBtn}`}
                                        type="button"
                                        onClick={toggleCountryDropdown}
                                    >
                                        <div className={styles.flagContainer}>
                                            <FlagIcon className={styles.flagIcon} />
                                        </div>
                                        <span className={styles.countryCode}>{countryData[selectedCountry].code}</span>
                                    </button>
                                    {countryDropdownOpen && (
                                        <ul className={styles.dropdownMenu}>
                                            <li>
                                                <button className={styles.dropdownItem} onClick={() => selectCountry('GB')}>
                                                    <GB className={styles.dropdownFlag} /> +44 United Kingdom
                                                </button>
                                            </li>
                                            <li>
                                                <button className={styles.dropdownItem} onClick={() => selectCountry('US')}>
                                                    <US className={styles.dropdownFlag} /> +1 United States
                                                </button>
                                            </li>
                                            <li>
                                                <button className={styles.dropdownItem} onClick={() => selectCountry('CA')}>
                                                    <CA className={styles.dropdownFlag} /> +1 Canada
                                                </button>
                                            </li>
                                            <li>
                                                <button className={styles.dropdownItem} onClick={() => selectCountry('AU')}>
                                                    <AU className={styles.dropdownFlag} /> +61 Australia
                                                </button>
                                            </li>
                                            <li>
                                                <button className={styles.dropdownItem} onClick={() => selectCountry('DE')}>
                                                    <DE className={styles.dropdownFlag} /> +49 Germany
                                                </button>
                                            </li>
                                            <li>
                                                <button className={styles.dropdownItem} onClick={() => selectCountry('FR')}>
                                                    <FR className={styles.dropdownFlag} /> +33 France
                                                </button>
                                            </li>
                                            <li>
                                                <button className={styles.dropdownItem} onClick={() => selectCountry('ES')}>
                                                    <ES className={styles.dropdownFlag} /> +34 Spain
                                                </button>
                                            </li>
                                            <li>
                                                <button className={styles.dropdownItem} onClick={() => selectCountry('IT')}>
                                                    <IT className={styles.dropdownFlag} /> +39 Italy
                                                </button>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <input
                                    type="tel"
                                    className={styles.phoneInput}
                                    placeholder="123 456 7891"
                                />
                            </div>
                        </div>

                        {/* Special Request Section */}
                        <div className={styles.bookingSection}>
                            <label className={styles.bookingLabel}>Special requests</label>
                            <textarea
                                className={styles.specialRequestInput}
                                placeholder="Input"
                                rows={3}
                            ></textarea>
                        </div>

                        <button className={styles.bookingSubmitBtn} onClick={handleBookingSubmit}>
                            Reserve
                        </button>
                    </div>
                </div>
            )}

            {/* Thank You Modal */}

            {/* Booking Summary Modal */}
            {bookingSummaryActive && (
                <div className={styles.bookingSummaryOverlay} onClick={() => setBookingSummaryActive(false)}>
                    <div className={styles.bookingSummaryModal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.bookingSummaryHeader}>
                            <h2 className={styles.bookingSummaryTitle}>Booking Summary</h2>
                            <button
                                className={styles.bookingSummaryCloseBtn}
                                onClick={() => setBookingSummaryActive(false)}
                            >
                                <FontAwesomeIcon icon={faX} />
                            </button>
                        </div>

                        <div className={styles.bookingSummaryContent}>
                            <div className={styles.bookingDetailRow}>
                                <span className={styles.bookingDetailLabel}>From</span>
                                <span className={styles.bookingDetailValue}>15 Feb 2024 -12:00</span>
                            </div>
                            <div className={styles.bookingDetailRow}>
                                <span className={styles.bookingDetailLabel}>To</span>
                                <span className={styles.bookingDetailValue}>16 Feb 2024 -12:00</span>
                            </div>


                            <div className={styles.bookingDetailRow}>
                                <span className={styles.bookingDetailLabel}>Rental (5 day)</span>
                                <span className={styles.bookingDetailValue}>£ 765</span>
                            </div>
                            <div className={styles.bookingDetailRow}>
                                <span className={styles.bookingDetailLabel}>Insurance</span>
                                <span className={styles.bookingDetailValue}>Free</span>
                            </div>

                            <div className={styles.bookingSeparator}></div>

                            <div className={styles.bookingDetailRow}>
                                <span className={styles.bookingDetailLabel}>Subtotal</span>
                                <span className={styles.bookingDetailValue}>£765</span>
                            </div>
                            <div className={styles.bookingDetailRow}>
                                <span className={styles.bookingDetailLabel}>VAT Tax (5%)</span>
                                <span className={styles.bookingDetailValue}>£40</span>
                            </div>

                            <div className={styles.bookingSeparator}></div>

                            <div className={styles.bookingDetailRow}>
                                <span className={styles.bookingDetailLabelTotal}>Total</span>
                                <span className={styles.bookingDetailValueTotal}>£805</span>
                            </div>
                        </div>

                        <button className={styles.bookingSummaryReserveBtn} onClick={handleReserve}>
                            Reserve
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarDetResponsive;
