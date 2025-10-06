import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';

import styles from '../../styles/responsiveStyle/HelpCenter.module.css';

function HelpCenter({ setActiveTab, toggleSideMenu }) {
    const [activeFaqIndex, setActiveFaqIndex] = useState(0); // First item expanded by default
    const [searchQuery, setSearchQuery] = useState('');

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
        }
    ];

    return (
        <div className={styles.helpCenterContainer}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
                <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={styles.pageTitle}>Help centre</h1>
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
                {/* How Can We Help You Section */}
                <div className={styles.helpSection}>
                    <h2 className={styles.helpTitle}>How Can We Help You?</h2>
                    <div className={styles.searchContainer}>
                        <div className={styles.searchInputWrapper}>
                            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                            />
                        </div>
                    </div>
                </div>

                {/* Popular Topic Section */}
                <div className={styles.popularSection}>
                    <h2 className={styles.popularTitle}>Popular Topic</h2>
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
        </div>
    );
}

export default HelpCenter;
