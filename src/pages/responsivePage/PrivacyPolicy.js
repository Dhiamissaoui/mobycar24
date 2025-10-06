import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';

import styles from '../../styles/responsiveStyle/PrivacyPolicy.module.css';

function PrivacyPolicy({ setActiveTab, toggleSideMenu }) {
    const checkedItems = [
        "Lorem ipsum dolor sit amet consectetur. Euismod sed tincidunt blandit erat adipiscing nibh.",
        "Lorem ipsum dolor sit amet consectetur. Euismod sed tincidunt blandit erat adipiscing nibh.",
        "Lorem ipsum dolor sit amet consectetur. Euismod sed tincidunt blandit erat adipiscing nibh."
    ];

    return (
        <div className={styles.privacyPolicyContainer}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
                <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={styles.pageTitle}>Privacy Policy</h1>
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
                {/* Main Heading */}
                <h2 className={styles.mainHeading}>
                    Lorem Ipsum Dolor Sit Amet Consectetur?
                </h2>

                {/* First Paragraph */}
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet consectetur. Euismod sed tincidunt blandit erat adipiscing nibh turpis velit integer. Tempor volutpat nibh orci ullamcorper hendrerit. Urna dictumst auctor sapien tellus. Habitant ut tempus in ornare volutpat massa amet sed commodo. Sed tellus sed lacus in. Malesuada parturient amet amet non vel. Elit nec ultrices eros in ultricies. Justo ipsum phasellus aliquam in tortor nec nunc consectetur.
                </p>

                {/* Second Paragraph */}
                <p className={styles.paragraph}>
                    Amet sed mattis maecenas posuere dictum et mattis risus. Erat proin non pulvinar nibh lectus facilisi imperdiet. Sit quis odio neque integer. Arcu placerat senectus semper nulla consectetur dis diam. Orci massa id id nisi. Amet nisl eget varius sit nulla vulputate scelerisque lobortis. Eget tortor laoreet cursus odio neque congue proin donec. Nunc viverra quis habitasse facilisis nunc ultrices sem sollicitudin. Euismod mauris in aliquam pulvinar elit at scelerisque ante velit. Eget venenatis fringilla morbi nibh ligula nam consectetur.
                </p>

                {/* Checked List */}
                <div className={styles.checkedList}>
                    {checkedItems.map((item, index) => (
                        <div key={index} className={styles.checkedItem}>
                            <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
                            <span className={styles.checkedText}>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
