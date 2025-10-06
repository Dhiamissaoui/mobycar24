import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faLock,
    faSignOutAlt,
    faEdit,
    faChevronRight,
    faEye,
    faEyeSlash,
    faPowerOff,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Import styles
import styles from '../../styles/responsiveStyle/profile.module.css';

// Import images
import profileImage from '../../images/resposiveImgs/profileImgResponsive.png';

function Profile({ setActiveTab, toggleSideMenu }) {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isChangePasswordMode, setIsChangePasswordMode] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'info@gmail.com',
        phone: '123 459 5698',
        address: '1484 Rhea Overpass, Vancouver 19644-1379'
    });

    // Password form state
    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // Password visibility states
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className={styles.profileContainer}>

            {/* Header */}
            <div className={styles.profileHeader}>
                <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={styles.profileTitle}>
                    {isChangePasswordMode ? 'Change Password' : isEditMode ? 'Edit Profile' : 'My Profile'}
                </h1>
                <div className={styles.headerIcons}>
                    {!isChangePasswordMode && (
                        <button className={styles.headerIconButton} onClick={() => setActiveTab('notifications')}>
                            <BellIcon className={styles.headerIcon} />
                        </button>
                    )}
                    <button className={styles.headerIconButton} onClick={toggleSideMenu}>
                        <Bars3Icon className={styles.headerIcon} />
                    </button>
                </div>
            </div>

            {/* Profile Picture and Basic Info - Hide in change password mode */}
            {!isChangePasswordMode && (
                <div className={styles.profilePictureSection}>
                    <div className={styles.profilePictureContainer}>
                        <img src={profileImage} alt="Profile" className={styles.profilePicture} />
                        {isEditMode ? (
                            <button className={styles.editPictureButton}>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                        ) : (
                            <button className={styles.editPictureButton} onClick={() => setIsEditMode(true)}>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                        )}
                    </div>
                    <h2 className={styles.userName}>John Morrison</h2>
                    <p className={styles.userEmail}>johnmorrison@gmail.com</p>
                </div>
            )}

            {/* Profile Information - Conditional Rendering */}
            {isChangePasswordMode ? (
                <div className={styles.changePasswordCard}>
                    <div className={styles.passwordFormGroup}>
                        <label className={styles.passwordFormLabel}>Old Password</label>
                        <div className={styles.passwordInputContainer}>
                            <input
                                type={showOldPassword ? "text" : "password"}
                                className={styles.passwordFormInput}
                                placeholder="Enter old password"
                                value={passwordData.oldPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                            />
                            <button
                                className={styles.passwordToggleButton}
                                onClick={() => setShowOldPassword(!showOldPassword)}
                            >
                                <FontAwesomeIcon icon={showOldPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.passwordFormGroup}>
                        <label className={styles.passwordFormLabel}>New Password</label>
                        <div className={styles.passwordInputContainer}>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                className={styles.passwordFormInput}
                                placeholder="Enter new password"
                                value={passwordData.newPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                            />
                            <button
                                className={styles.passwordToggleButton}
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>

                    <div className={styles.passwordFormGroup}>
                        <label className={styles.passwordFormLabel}>Confirm New Password</label>
                        <div className={styles.passwordInputContainer}>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className={styles.passwordFormInput}
                                placeholder="Confirm new password"
                                value={passwordData.confirmPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                            />
                            <button
                                className={styles.passwordToggleButton}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>
                </div>
            ) : !isEditMode ? (
                <div className={styles.profileInfoCard}>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Name</span>
                        <span className={styles.infoValue}>John Morrison</span>
                    </div>
                    <div className={styles.infoDivider}></div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Email Address</span>
                        <span className={styles.infoValue}>johnmorrison@gmail.com</span>
                    </div>
                    <div className={styles.infoDivider}></div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Phone Number</span>
                        <span className={styles.infoValue}>123 459 6589</span>
                    </div>
                    <div className={styles.infoDivider}></div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Address</span>
                        <span className={styles.infoValue}>1484 Rhea Overpass,<br />Vancouver 19644-1379</span>
                    </div>
                </div>
            ) : (
                <div className={styles.editFormCard}>
                    <div className={styles.editFormRow}>
                        <div className={styles.editFormGroup}>
                            <label className={styles.editFormLabel}>First Name</label>
                            <input
                                type="text"
                                className={styles.editFormInput}
                                placeholder={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </div>
                        <div className={styles.editFormGroup}>
                            <label className={styles.editFormLabel}>Last Name</label>
                            <input
                                type="text"
                                className={styles.editFormInput}
                                placeholder={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className={styles.editFormGroup}>
                        <label className={styles.editFormLabel}>Email Address</label>
                        <input
                            type="email"
                            className={styles.editFormInput}
                            placeholder={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className={styles.editFormGroup}>
                        <label className={styles.editFormLabel}>Phone Number</label>
                        <input
                            type="tel"
                            className={styles.editFormInput}
                            placeholder={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div className={styles.editFormGroup}>
                        <label className={styles.editFormLabel}>Address</label>
                        <input
                            type="text"
                            className={styles.editFormInput}
                            placeholder={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        />
                    </div>
                </div>
            )}

            {/* Action Buttons - Only show when not in edit mode or change password mode */}
            {!isEditMode && !isChangePasswordMode && (
                <div className={styles.actionButtons}>
                    <button className={styles.actionButton} onClick={() => setIsChangePasswordMode(true)}>
                        <FontAwesomeIcon icon={faLock} className={styles.actionIcon} />
                        <span className={styles.actionText}>Change password</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.actionArrow} />
                    </button>

                    <button className={styles.actionButton} onClick={() => setShowLogoutModal(true)}>
                        <FontAwesomeIcon icon={faSignOutAlt} className={styles.actionIcon} />
                        <span className={styles.actionText}>Logout</span>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.actionArrow} />
                    </button>
                </div>
            )}

            {/* Bottom Action Buttons */}
            <div className={styles.bottomButtons}>
                {isChangePasswordMode ? (
                    <button className={styles.saveButton} onClick={() => setIsChangePasswordMode(false)}>
                        Save
                    </button>
                ) : !isEditMode ? (
                    <>
                        <button className={styles.editProfileButton} onClick={() => setIsEditMode(true)}>
                            Edit Profile
                        </button>
                        <Link to="/splashServiceProvider" className={styles.serviceProviderButton}>
                            Become A Service Provider
                        </Link>
                    </>
                ) : (
                    <button className={styles.saveButton} onClick={() => setIsEditMode(false)}>
                        Save
                    </button>
                )}
            </div>

            {/* Logout Modal */}
            {showLogoutModal && (
                <div className={styles.logoutOverlay} onClick={() => setShowLogoutModal(false)}>
                    <div className={styles.logoutModal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.logoutCloseButton} onClick={() => setShowLogoutModal(false)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        <div className={styles.logoutIconContainer}>
                            <div className={styles.logoutIcon}>
                                <FontAwesomeIcon icon={faPowerOff} />
                            </div>
                        </div>

                        <h3 className={styles.logoutTitle}>Are You Sure You Want To Logout?</h3>
                        <p className={styles.logoutDescription}>Lorem ipsum dolor sit amet consectetur.</p>

                        <div className={styles.logoutButtons}>
                            <button className={styles.logoutYesButton} onClick={() => {
                                setShowLogoutModal(false);
                                // Add logout logic here
                                console.log('User logged out');
                            }}>
                                Yes
                            </button>
                            <button className={styles.logoutCancelButton} onClick={() => setShowLogoutModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;