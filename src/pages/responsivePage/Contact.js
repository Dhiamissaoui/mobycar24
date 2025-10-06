import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';

import styles from '../../styles/responsiveStyle/Contact.module.css';

function Contact({ setActiveTab, toggleSideMenu }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div className={styles.contactContainer}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
                <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={styles.pageTitle}>Contact Us</h1>
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
                {/* Contact Information Cards */}
                <div className={styles.contactCards}>
                    {/* Email Card */}
                    <div className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactLabel}>Email address</div>
                            <div className={styles.contactValue}>info@email.com</div>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactLabel}>Phone number</div>
                            <div className={styles.contactValue}>123 459 5698</div>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactLabel}>Address</div>
                            <div className={styles.contactValue}>1684 Ebert Pike, Surprise 55580</div>
                        </div>
                    </div>
                </div>

                {/* Need Any Help Form */}
                <div className={styles.formContainer}>
                    <h2 className={styles.formTitle}>Need Any Help?</h2>

                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        {/* Name Field */}
                        <div className={styles.formField}>
                            <label className={styles.formLabel}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter name"
                                className={styles.formInput}
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className={styles.formField}>
                            <label className={styles.formLabel}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter email address"
                                className={styles.formInput}
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div className={styles.formField}>
                            <label className={styles.formLabel}>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Type here..."
                                className={styles.formTextarea}
                                rows={4}
                                required
                            />
                        </div>

                        {/* Send Button */}
                        <button type="submit" className={styles.sendButton}>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
