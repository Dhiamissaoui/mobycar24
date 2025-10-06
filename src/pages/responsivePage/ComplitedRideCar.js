import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faStar,
    faCalendarAlt,
    faClock,
    faGaugeHigh,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';

// Import styles
import styles from '../../styles/responsiveStyle/ComplitedRideCarStyle.module.css';
import ridesStyles from '../../styles/responsiveStyle/RidesResponsive.module.css';
import ConfirmStyle from '../../styles/Brand/CarConfirm.module.css';

// Import images
import audiRidesImage from '../../images/rides_audi.png';
import profileImage from '../../images/profile pic.png';

var ComplitedRideCar = ({ setActiveTab, toggleSideMenu, setRidesTab }) => {
    const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
    const [rating, setRating] = useState(4);
    const [reviewText, setReviewText] = useState('');


    return (
        <div className={styles.completedRideContainer}>
            {/* Header */}
            <div className={ridesStyles.categoriesHeader}>
                <button className={styles.backButton} onClick={() => { setActiveTab('rides'); setRidesTab('completed'); }}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <div className={styles.categoriesHeaderIcons}>
                    <button className={styles.headerIconButton} onClick={() => setActiveTab('notifications')}>
                        <BellIcon className={styles.headerIcon} />
                    </button>
                    <button className={styles.headerIconButton} onClick={toggleSideMenu}>
                        <Bars3Icon className={styles.headerIcon} />
                    </button>
                </div>
            </div>
            {/* Your Ride Is Completed Section */}
            <div className={ridesStyles.thankYouSection}>
                <h1 className={ridesStyles.thankYouTitle}>Your Ride Is Completed On 16 Feb 2024</h1>
                <p className={ridesStyles.thankYouDescription}>
                    Lorem ipsum dolor sit amet consectetur. Odio ac pretium nullam pretium. Imperdiet faucibus feugiat vitae id at nullam vitae etiam venenatis. Tortor rhoncus elementum.
                </p>
            </div>

            {/* Assigned Car Details */}
            {/* Car Details Card */}
            <div style={{ fontWeight: 'bold', fontSize: '16px', margin: '20px 0' }}>Assigned car details</div>
            <div className={ConfirmStyle.carDetailsCard}>

                <div className={ConfirmStyle.carImageContainer}>

                    <img src={audiRidesImage} alt='Audi A6' className={ConfirmStyle.carImage} />
                </div>
                <div className={ConfirmStyle.carInfo}>
                    <div className={ConfirmStyle.carCategory}>SUV • 2024</div>
                    <div className='d-flex gap-2'>
                        <div className={ConfirmStyle.carName}>Rent Audi A6 (Blue)</div>
                        <div className={ConfirmStyle.carRating}>
                            <FontAwesomeIcon icon={faStar} className={ConfirmStyle.starIcon} />
                            <span className={ConfirmStyle.ratingText}>4.5</span>
                        </div>
                    </div>


                    <div className={ConfirmStyle.carSpecs}>
                        <div className={ConfirmStyle.specItem}>
                            <FontAwesomeIcon icon={faGaugeHigh} className={ConfirmStyle.specIcon} />
                            <span>250 Km/Day</span>
                        </div>
                        <div className={ConfirmStyle.specItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={ConfirmStyle.specIcon}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                            <span>Insurance Included</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* Car Number and Registration Details */}
            <div className={ridesStyles.carNumberCard}>
                <div className={ridesStyles.carNumberSection}>
                    <div className={ridesStyles.carNumberLabel}>Car Number:</div>
                    <div className={ridesStyles.carNumberValue}>8D22A1245</div>
                </div>
                <div className={ridesStyles.carNumberDivider}></div>
                <div className={ridesStyles.carNumberSection}>
                    <div className={ridesStyles.carNumberLabel}>Registration Number:</div>
                    <div className={ridesStyles.carNumberValue}>123456789</div>
                </div>
            </div>

            {/* Service Provider Details */}
            <div className={ridesStyles.serviceProviderCard}>
                <h3 className={ridesStyles.serviceProviderTitle}>Service Provider Details</h3>
                <div className={ridesStyles.serviceProviderInfo}>
                    <img src={profileImage} alt='Service Provider' className={ridesStyles.providerImage} />
                    <div className={ridesStyles.providerDetails}>
                        <div className={ridesStyles.providerName}>Esther Howard</div>
                        <div className={ridesStyles.providerStats}>2,719 Trips | Joined Oct 2015</div>
                        <div className={ridesStyles.providerResponse}>Typically responds in 4 minutes</div>
                    </div>
                </div>
            </div>

            {/* Feedback by the Service Provider */}
            <div className={ridesStyles.feedbackCard}>
                <h3 className={ridesStyles.feedbackTitle}>Feedback By The Service Provider</h3>
                <div className={ridesStyles.feedbackContent}>
                    <div className={ridesStyles.feedbackRating}>
                        <FontAwesomeIcon icon={faStar} className={ridesStyles.feedbackStar} />
                        <FontAwesomeIcon icon={faStar} className={ridesStyles.feedbackStar} />
                        <FontAwesomeIcon icon={faStar} className={ridesStyles.feedbackStar} />
                        <FontAwesomeIcon icon={faStar} className={ridesStyles.feedbackStar} />
                        <FontAwesomeIcon icon={faStar} className={ridesStyles.feedbackStarOutline} />
                    </div>
                    <div className={ridesStyles.feedbackText}>
                        "Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan."
                    </div>
                </div>
            </div>

            {/* Date & Time Container */}
            <div className={ridesStyles.dateTimeContainer}>
                {/* Pick-up Date & Time */}
                <div className={ridesStyles.dateTimeSection}>
                    <h3 className={ridesStyles.dateTimeTitle}>
                        Pick-up date & time
                    </h3>
                    <div className={ridesStyles.dateTimeInput}>
                        <div className={ridesStyles.dateTimeLeft}>
                            <FontAwesomeIcon icon={faCalendarAlt} className={ridesStyles.dateTimeIcon} />
                            <span>25th dec, 2024</span>
                        </div>
                        <div className={ridesStyles.dateTimeDivider}></div>
                        <div className={ridesStyles.dateTimeRight}>
                            <FontAwesomeIcon icon={faClock} className={ridesStyles.dateTimeIcon} />
                            <span>12:00 pm</span>
                        </div>
                    </div>
                </div>

                {/* Drop-off Date & Time */}
                <div className={ridesStyles.dateTimeSection}>
                    <h3 className={ridesStyles.dateTimeTitle}>
                        Drop off date & time
                    </h3>
                    <div className={ridesStyles.dateTimeInput}>
                        <div className={ridesStyles.dateTimeLeft}>
                            <FontAwesomeIcon icon={faCalendarAlt} className={ridesStyles.dateTimeIcon} />
                            <span>25th dec, 2024</span>
                        </div>
                        <div className={ridesStyles.dateTimeDivider}></div>
                        <div className={ridesStyles.dateTimeRight}>
                            <FontAwesomeIcon icon={faClock} className={ridesStyles.dateTimeIcon} />
                            <span>12:00 pm</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Price Section */}
            <div className={ridesStyles.priceSection}>
                <div className={ridesStyles.priceInfo}>
                    <div className={ridesStyles.priceLabel}>remaining amount</div>
                    <div className={ridesStyles.priceAmount}>£153</div>
                    <div className={ridesStyles.priceDetails}>View Price Details</div>
                </div>
                <button className={ridesStyles.reserveBtn} onClick={() => setActiveTab('pay')}>Pay</button>
            </div>

            <button className={styles.feedbackButton} onClick={() => setShowFeedbackPopup(true)}>send Feedback</button>

            {/* Feedback Popup */}
            {showFeedbackPopup && (
                <div className={styles.contactOverlay} onClick={() => setShowFeedbackPopup(false)}>
                    <div className={styles.contactModal} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setShowFeedbackPopup(false)}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        <h2 className={styles.feedbackPopupTitle}>Send Feedback For The Vehicle And Service Provider</h2>
                        <p className={styles.feedbackPopupDescription}>Lorem ipsum dolor sit amet consectetur.</p>

                        {/* Star Rating */}
                        <div className={styles.feedbackRatingContainer}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FontAwesomeIcon
                                    key={star}
                                    icon={faStar}
                                    className={`${styles.feedbackStar} ${star <= rating ? styles.feedbackStarFilled : styles.feedbackStarEmpty}`}
                                    onClick={() => setRating(star)}
                                />
                            ))}
                        </div>

                        {/* Review Section */}
                        <div className={styles.feedbackReviewSection}>
                            <label className={styles.feedbackReviewLabel}>Review</label>
                            <textarea
                                className={styles.feedbackTextarea}
                                placeholder="Write a review..."
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                            />
                        </div>

                        <button className={styles.feedbackSubmitButton}>Send Feedback</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ComplitedRideCar;