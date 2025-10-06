import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faBell, faShield } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Switch } from '@mui/material';

import styles from '../../styles/responsiveStyle/settings.module.css';

function Settings({ setActiveTab, toggleSideMenu }) {
    const [notificationEnabled, setNotificationEnabled] = useState(true);
    const [privacyPolicyEnabled, setPrivacyPolicyEnabled] = useState(true);

    return (
        <div className={styles.settingsContainer}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
                <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={styles.settingsTitle}>Settings</h1>
                <div className={styles.headerIcons}>
                    <button onClick={() => setActiveTab('notifications')} className={styles.iconButton}>
                        <BellIcon className={styles.headerIcon} />
                    </button>
                    <button className={styles.iconButton} onClick={toggleSideMenu}>
                        <Bars3Icon className={styles.headerIcon} />
                    </button>
                </div>
            </div>

            {/* Settings Options */}
            <div className={styles.settingsList}>
                {/* Notification Setting */}
                <div className={styles.settingItem}>
                    <div className={styles.settingLeft}>
                        <div className={styles.settingIcon}>
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                        <span className={styles.settingLabel}>Notification</span>
                    </div>
                    <div className={styles.settingRight}>
                        <Switch
                            checked={notificationEnabled}
                            onChange={(e) => setNotificationEnabled(e.target.checked)}
                            sx={{
                                width: '2.5em',
                                height: '1.25em',
                                padding: 0,
                                '& .MuiSwitch-thumb': {
                                    width: '1em',
                                    height: '1em',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: notificationEnabled ? '#9E4DB6' : '#e9ecef',
                                    borderRadius: '1em',
                                    border: 'none',
                                    opacity: 1,
                                },
                                '& .MuiSwitch-switchBase': {
                                    padding: '0.125em',
                                    '&.Mui-checked': {
                                        color: '#ffffff',
                                        transform: 'translateX(1.25em)',
                                        '& + .MuiSwitch-track': {
                                            backgroundColor: '#9E4DB6',
                                            opacity: 1,
                                        },
                                    },
                                    '&.Mui-disabled + .MuiSwitch-track': {
                                        opacity: 0.5,
                                    },
                                },
                            }}
                        />
                    </div>
                </div>

                {/* Privacy Policy Setting */}
                <div className={styles.settingItem}>
                    <div className={styles.settingLeft}>
                        <div className={styles.settingIcon}>
                            <FontAwesomeIcon icon={faShield} />
                        </div>
                        <span className={styles.settingLabel}>Privacy policy</span>
                    </div>
                    <div className={styles.settingRight}>
                        <Switch
                            checked={privacyPolicyEnabled}
                            onChange={(e) => setPrivacyPolicyEnabled(e.target.checked)}
                            sx={{
                                width: '2.5em',
                                height: '1.25em',
                                padding: 0,
                                '& .MuiSwitch-thumb': {
                                    width: '1em',
                                    height: '1em',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                },
                                '& .MuiSwitch-track': {
                                    backgroundColor: privacyPolicyEnabled ? '#9E4DB6' : '#e9ecef',
                                    borderRadius: '1em',
                                    border: 'none',
                                    opacity: 1,
                                },
                                '& .MuiSwitch-switchBase': {
                                    padding: '0.125em',
                                    '&.Mui-checked': {
                                        color: '#ffffff',
                                        transform: 'translateX(1.25em)',
                                        '& + .MuiSwitch-track': {
                                            backgroundColor: '#9E4DB6',
                                            opacity: 1,
                                        },
                                    },
                                    '&.Mui-disabled + .MuiSwitch-track': {
                                        opacity: 0.5,
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;    