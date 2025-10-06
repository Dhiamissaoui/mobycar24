import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCopy } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';

import styles from '../../styles/responsiveStyle/inviteEarn.module.css';
import inviteImage from '../../images/resposiveImgs/inviteImg.png';
function InviteEarn({ setActiveTab, toggleSideMenu }) {
    const [copied, setCopied] = useState(false);
    const inviteLink = "https://lorem_ipsum-dolorsit/3lorem";

    const handleCopyLink = () => {
        navigator.clipboard.writeText(inviteLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.inviteEarnContainer}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
                <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={styles.pageTitle}>Invite & Earn</h1>
                <div className={styles.headerIcons}>
                    <button onClick={() => setActiveTab('notifications')} className={styles.iconButton}>
                        <BellIcon className={styles.headerIcon} />
                    </button>
                    <button className={styles.iconButton} onClick={toggleSideMenu}>
                        <Bars3Icon className={styles.headerIcon} />
                    </button>
                </div>
            </div>

            {/* Main Illustration */}
            <div className={styles.illustrationContainer}>
                <img
                    src={inviteImage}
                    alt="Invite illustration"
                    className={styles.illustrationImage}
                />
            </div>

            {/* Content Section */}
            <div className={styles.contentSection}>
                {/* Numbered List */}
                <div className={styles.stepsList}>
                    <div className={styles.stepItem}>
                        <span className={styles.stepNumber}>1.</span>
                        <span className={styles.stepText}>In morbi pellentesque congue enim amet eget vel leo id.</span>
                    </div>
                    <div className={styles.stepItem}>
                        <span className={styles.stepNumber}>2.</span>
                        <span className={styles.stepText}>Morbi tincidunt euismod lectus id eleifend. Curabitur sit amet facilisis.</span>
                    </div>
                    <div className={styles.stepItem}>
                        <span className={styles.stepNumber}>3.</span>
                        <span className={styles.stepText}>Pellentesque congue enim amet eget vel leo id.</span>
                    </div>
                </div>

                {/* Input Field with Copy Button */}
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        value={inviteLink}
                        readOnly
                        className={styles.linkInput}
                    />
                    <button
                        className={styles.copyButton}
                        onClick={handleCopyLink}
                        title={copied ? "Copied!" : "Copy link"}
                    >
                        <FontAwesomeIcon icon={faCopy} />
                    </button>
                </div>

                {/* Share Link Button */}
                <button className={styles.shareButton}>
                    Share link
                </button>
            </div>
        </div>
    );
}

export default InviteEarn;
