import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';

// Import car images
import porscheImage from '../../images/porsche.png';
import cadillacImage from '../../images/car-cadillac.png';
import rolls from '../../images/car-rolls.png';
import carLambo from '../../images/car-lambo.png';
import carMini from '../../images/car-mini.png';

import styles from '../../styles/responsiveStyle/history.module.css';

function History({ setActiveTab, toggleSideMenu }) {
    return (
        <div className={styles.historyContainer}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
                <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={styles.historyTitle}>Payment History</h1>
                <div className={styles.headerIcons}>
                    <button onClick={() => setActiveTab('notifications')} className={styles.iconButton}>
                        <BellIcon className={styles.headerIcon} />
                    </button>
                    <button className={styles.iconButton} onClick={toggleSideMenu}>
                        <Bars3Icon className={styles.headerIcon} />
                    </button>
                </div>
            </div>

            {/* Payment History Cards */}
            <div className={styles.historyList}>
                {[
                    {
                        id: 1,
                        carModel: "Rent Audi A6 (Blue)",
                        dateRange: "15 Feb 2024 to 19 Feb 2024",
                        provider: "Provider: Esther Howard",
                        price: "£805",
                        status: "Paid",
                        image: porscheImage
                    },
                    {
                        id: 2,
                        carModel: "Rent Audi A6 (Blue)",
                        dateRange: "10 Feb 2024 to 14 Feb 2024",
                        provider: "Provider: Esther Howard",
                        price: "£720",
                        status: "Paid",
                        image: cadillacImage
                    },
                    {
                        id: 3,
                        carModel: "Rent Audi A6 (Blue)",
                        dateRange: "05 Feb 2024 to 09 Feb 2024",
                        provider: "Provider: Esther Howard",
                        price: "£650",
                        status: "Paid",
                        image: rolls
                    },
                    {
                        id: 4,
                        carModel: "Rent Audi A6 (Blue)",
                        dateRange: "01 Feb 2024 to 04 Feb 2024",
                        provider: "Provider: Esther Howard",
                        price: "£580",
                        status: "Paid",
                        image: carLambo
                    },
                    {
                        id: 5,
                        carModel: "Rent Audi A6 (Blue)",
                        dateRange: "28 Jan 2024 to 31 Jan 2024",
                        provider: "Provider: Esther Howard",
                        price: "£420",
                        status: "Paid",
                        image: carMini
                    }
                ].map(payment => (
                    <div key={payment.id} className={styles.paymentCard}>
                        <div className={styles.carImageContainer}>
                            <img src={payment.image} alt={payment.carModel} className={styles.carImage} />
                        </div>
                        <div className={styles.paymentDetails}>
                            <h3 className={styles.carModel}>{payment.carModel}</h3>
                            <div className={styles.paymentInfo}>
                                <div className={styles.infoItem}>
                                    <FontAwesomeIcon icon={faCalendarAlt} className={styles.infoIcon} />
                                    <span className={styles.infoText}>{payment.dateRange}</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <FontAwesomeIcon icon={faUser} className={styles.infoIcon} />
                                    <span className={styles.infoText}>{payment.provider}</span>
                                </div>
                            </div>
                            <div className={styles.paymentFooter}>
                                <div className={styles.priceContainer}>
                                    <span className={styles.price}>{payment.price}</span>
                                </div>
                                <div className={styles.statusContainer}>
                                    <span className={styles.statusTag}>{payment.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default History;