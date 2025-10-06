import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Rating } from '@mui/material';

import styles from '../../styles/responsiveStyle/SendFeedback.module.css';

function SendFeedback({ setActiveTab, toggleSideMenu }) {
    const [rating, setRating] = useState(4);
    const [feedback, setFeedback] = useState('');

    const handleSendFeedback = () => {
        // Handle feedback submission
        console.log('Rating:', rating, 'Feedback:', feedback);
        // You can add your submission logic here
    };

    return (
        <div className={styles.sendFeedbackContainer}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
                <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={styles.pageTitle}>Send Us Your Feedback</h1>
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
                {/* How Did we do Section */}
                <div className={styles.ratingSection}>
                    <h2 className={styles.ratingTitle}>How Did we do?</h2>
                    <p className={styles.ratingSubtitle}>Lorem ipsum dolor sit amet consectetur.</p>

                    <div className={styles.starRating}>
                        <Rating
                            name="feedback-rating"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            size="large"
                            sx={{
                                '& .MuiRating-iconFilled': {
                                    color: '#FFD700',
                                },
                                '& .MuiRating-iconEmpty': {
                                    color: '#FFD700',
                                },
                            }}
                        />
                    </div>
                </div>

                {/* Feedback Input Section */}
                <div className={styles.feedbackSection}>
                    <label className={styles.feedbackLabel}>Describe your feedback</label>
                    <textarea
                        className={styles.feedbackTextarea}
                        placeholder="Input"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={6}
                    />
                </div>

                {/* Send Button */}
                <button className={styles.sendButton} onClick={handleSendFeedback}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default SendFeedback;
