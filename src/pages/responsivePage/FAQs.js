import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';

import styles from '../../styles/responsiveStyle/FAQs.module.css';

function FAQs({ setActiveTab, toggleSideMenu }) {
    const [activeFaqIndex, setActiveFaqIndex] = useState(0); // First item expanded by default

    const toggleFaq = (index) => {
        setActiveFaqIndex(activeFaqIndex === index ? null : index);
    };

    const faqData = [
        {
            title: "Lorem Ipsum Dolor Sit Amet Consectetur?",
            content: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan."
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet Consec?",
            content: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan."
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet Consectetur?",
            content: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan."
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet Consec?",
            content: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan."
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet Consectetur?",
            content: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan."
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet Consec?",
            content: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan."
        },
        {
            title: "Lorem Ipsum Dolor Sit Amet Consectetur?",
            content: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut. Interdum id accumsan arcu enim accumsan."
        }
    ];

    return (
        <div className={styles.faqsContainer}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
                <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={styles.pageTitle}>FAQs</h1>
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
                {/* FAQ Container */}
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
    );
}

export default FAQs;
