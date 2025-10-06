import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faSearch,
    faHome,
    faCar,
    faComment,
    faCarSide,
    faCoins,
    faUser,
    faHeart,
    faWallet,
    faCog,
    faUserPlus,
    faHeadset,
    faFileText,
    faXmark,
    faChevronDown,
    faChevronUp,
    faChevronLeft,
    faChevronRight,
    faSterlingSign,
    faEuroSign,
    faDollarSign,
    faMedal,
    faLanguage,
    faPaperclip,
    faSmile,
    faPaperPlane,
    faEllipsisVertical,
    faStar,
    faCalendarAlt,
    faClock,
    faEdit,
    faShare,
    faGaugeHigh,



} from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { GB, FR, DE } from 'country-flag-icons/react/3x2';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import phoneMsgIcon from '../../images/resposiveImgs/phonemsg.png';


import SignUp from '../../pages/SignIn';
import Login from '../../pages/Login';
import ConfirmCarReserve from '../../components/Brand/carConfirm';
import Forget from '../../pages/Forget';
import Reset from '../../pages/Reset';
import ComplitedRideCar from '../../pages/responsivePage/ComplitedRideCar';
import Profile from '../../pages/responsivePage/profile';
import Fav from '../../pages/responsivePage/fav';
import History from '../../pages/responsivePage/history';
import Settings from '../../pages/responsivePage/settings';
import InviteEarn from './inviteEarn.js';
import HelpCenter from './HelpCenter.js';
import SendFeedback from './SendFeedback.js';
import Contact from './Contact.js';
import FAQs from './FAQs.js';
import PrivacyPolicy from './PrivacyPolicy.js';
import TermsAndConditions from './TermsAndConditions.js';
// Import existing components

// Import images
// Brand logos

//import carConfirm for the js part of it
import ConfirmStyle from '../../styles/Brand/CarConfirm.module.css';


import bmwLogo from '../../images/bmw logo.png';
import mercLogo from '../../images/merc logo.png';

import lamboLogo from '../../images/lambo logo.png';
import rangeLogo from '../../images/range logo.png';
import alphaLogo from '../../images/alpha-logo.png';
import astonLogo from '../../images/aston-logo.png';
import bentlyLogo from '../../images/bently-logo.png';
import cadillacLogo from '../../images/cadillac.png';
import dodgeLogo from '../../images/dodge-logo.png';


//search location icons
import searchLoc1 from '../../images/resposiveImgs/searchLoc1.png';
import searchLoc2 from '../../images/resposiveImgs/searchLoc2.png';
import searchLoc3 from '../../images/resposiveImgs/searchLoc3.png';
import searchLoc4 from '../../images/resposiveImgs/searchLoc4.png';

// Import category icons
import { ReactComponent as SportsCar } from '../../images/categories/sports_car.svg';
import { ReactComponent as Hatchback } from '../../images/categories/hatchback.svg';
import { ReactComponent as Suv } from '../../images/categories/suv.svg';
import { ReactComponent as Conv } from '../../images/categories/conv.svg';


//import toyota homepage image
import toyotaHomePage from '../../images/resposiveImgs/toyota_HomePage.png';

// Import brand logos
import audiLogo from '../../images/audi logo.png';
import ferrariLogo from '../../images/ferrari logo.png';
import lamborghiniLogo from '../../images/lambo logo.png';

// Import car images for offers
import porscheImage from '../../images/porsche.png';
import cadillacImage from '../../images/car-cadillac.png';
import profilePicResposive from '../../images/resposiveImgs/profile_pic.png';
import profileChatPic from '../../images/resposiveImgs/profile_chat_img.png';

// Import car images for completed rides
import porsche from '../../images/porsche.png';
import cadillac from '../../images/car-cadillac.png';
import rolls from '../../images/car-rolls.png';
import carLambo from '../../images/car-lambo.png';
import carMini from '../../images/car-mini.png';
import carRange from '../../images/car-range.png';
import carNissan from '../../images/car-nissan.png';
import carSpyder from '../../images/car-spyder.png';

// Import images for rides
import audiRidesImage from '../../images/rides_audi.png';
import profileImage from '../../images/profile pic.png';
import mapsImage from '../../images/maps.png';


import styles from '../../styles/responsiveStyle/HomePageResposive.module.css';
import notifStyle from '../../styles/responsiveStyle/Notification.module.css';
import ridesStyles from '../../styles/responsiveStyle/RidesResponsive.module.css';
import CarDetResponsive from './CarDetResponsive';

import pickup from '../../images/resposiveImgs/pickup.png';
import dropoff from '../../images/resposiveImgs/dropoff.png';

const HomePageResponsive = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('home');
    const [activeCategoryTab, setActiveCategoryTab] = useState('Popular');
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
    const [showHelpSection, setShowHelpSection] = useState(false);
    const [showLegalSection, setShowLegalSection] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const [selectedCurrency, setSelectedCurrency] = useState('GBP');
    const [searchQuery, setSearchQuery] = useState('');
    const [pickupDate, setPickupDate] = useState('15 Feb 2024');
    const [dropoffDate, setDropoffDate] = useState('16 Feb 2024');
    const [activeChat, setActiveChat] = useState(null);

    // Rides state variables
    const [ridesTab, setRidesTab] = useState('active');
    const [isActive, setIsActive] = useState(false);
    const [removeFilter, setRemoveFilter] = useState(false);
    const [pickupAddress] = useState('61549 N Lincoln Street, Brentwood 52011');
    const [dropoffAddress] = useState('9968 Zion Corners, Port Alan 87441-8774');

    // Info popup state
    const [showInfoPopup, setShowInfoPopup] = useState(false);
    const [infoPopupType, setInfoPopupType] = useState(''); // 'pickup' or 'dropoff'
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

    // Info popup handlers
    const handleInfoClick = (type, event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPopupPosition({
            top: rect.bottom - 40, // Position directly below the info icon
            left: rect.left - 65 // Center horizontally relative to the info icon
        });
        setInfoPopupType(type);
        setShowInfoPopup(true);
        setRemoveFilter(true);
    };

    const handleCloseInfoPopup = () => {
        setShowInfoPopup(false);
        setInfoPopupType('');
        setRemoveFilter(false);
    };

    // Handle navigation state
    useEffect(() => {
        if (location.state?.activeTab) {
            setActiveTab(location.state.activeTab);
        }
    }, [location.state]);

    // Chat data
    const chatData = useMemo(() => ({
        1: {
            name: "John Rosensky",
            status: "Online",
            avatar: profileChatPic,
            messages: [
                { sender: 'them', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur. Mi rhoncus cursus sit tincidunt.' },
                { sender: 'me', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur.' },
                { sender: 'them', time: '09:20pm', content: 'Lorem ipsum dolor sit amet' },
                { sender: 'me', time: '09:20pm', content: 'Lorem ipsum dolor sit amet con' },
                { sender: 'them', time: '09:20pm', content: 'Lorem ipsum dolor sit amet us' }
            ]
        },
        2: {
            name: "Jane Cooper",
            status: "Online",
            avatar: profileChatPic,
            messages: [
                { sender: 'them', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur. Mi rhoncus cursus sit tincidunt.' },
                { sender: 'me', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur.' }
            ]
        },
        3: {
            name: "Craig Saris",
            status: "Online",
            avatar: profileChatPic,
            messages: [
                { sender: 'them', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur. Mi rhoncus cursus sit tincidunt.' },
                { sender: 'me', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur.' },
                { sender: 'them', time: '09:20pm', content: 'Lorem ipsum dolor sit amet' },
                { sender: 'me', time: '09:20pm', content: 'Lorem ipsum dolor sit amet con' },
                { sender: 'them', time: '09:20pm', content: 'Lorem ipsum dolor sit amet us' }
            ]
        },
        4: {
            name: "Cameron Williamson",
            status: "Online",
            avatar: profileChatPic,
            messages: [
                { sender: 'them', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur. Mi rhoncus cursus sit tincidunt.' },
                { sender: 'me', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur.' }
            ]
        },
        5: {
            name: "Brooklyn Simmons",
            status: "Online",
            avatar: profileChatPic,
            messages: [
                { sender: 'them', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur. Mi rhoncus cursus sit tincidunt.' },
                { sender: 'me', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur.' }
            ]
        },
        6: {
            name: "Leslie Alexander",
            status: "Online",
            avatar: "/api/placeholder/50/50",
            messages: [
                { sender: 'them', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur. Mi rhoncus cursus sit tincidunt.' },
                { sender: 'me', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur.' }
            ]
        },
        7: {
            name: "Jenny Wilson",
            status: "Online",
            avatar: profileChatPic,
            messages: [
                { sender: 'them', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur. Mi rhoncus cursus sit tincidunt.' },
                { sender: 'me', time: '09:20pm', content: 'Lorem ipsum dolor sit amet consectetur.' }
            ]
        }
    }), []);

    const handleMessageClick = useCallback((conversationId) => {
        console.log('Clicked conversation:', conversationId);
        console.log('Chat data:', chatData[conversationId]);
        setActiveChat(chatData[conversationId]);
        setActiveTab('chat');
    }, [chatData]);

    const handleBackToMessages = () => {
        setActiveChat(null);
        setActiveTab('message');
    };

    useEffect(() => {
        // Set body overflow to visible when component mounts
        document.body.style.overflowY = 'visible';

        // Cleanup: restore overflow hidden when component unmounts
        return () => {
            document.body.style.overflow = 'hidden';
        };
    }, []);

    const handleTabChange = useCallback((tab) => {
        setActiveTab(tab);
    }, []);

    const toggleSideMenu = useCallback(() => {
        setIsSideMenuOpen(!isSideMenuOpen);
    }, [isSideMenuOpen]);

    const closeSideMenu = useCallback(() => {
        setIsSideMenuOpen(false);
    }, []);

    // Flag component based on selected language
    const FlagIcon = {
        EN: GB,
        FR: FR,
        DE: DE
    }[selectedLanguage] || GB; // Fallback to GB if component is undefined

    // Currency icon based on selected currency
    const CurrencyIcon = {
        GBP: faSterlingSign,
        EUR: faEuroSign,
        USD: faDollarSign
    }[selectedCurrency] || faSterlingSign; // Fallback to GBP if icon is undefined

    const renderContent = useMemo(() => {
        switch (activeTab) {
            case 'home':
                return (
                    <div className={styles.mobileContainer}>
                        {/* Mobile Header */}
                        <div className={styles.mobileHeader}>
                            <div className={styles.logoContainer}>
                                <span className={styles.logoMoby}>MOBY</span>
                                <span className={styles.logoCar}>CAR24</span>
                            </div>
                            <div className={styles.headerIcons}>
                                <button onClick={() => setActiveTab('notifications')} className={styles.iconButton}>
                                    <BellIcon className={styles.headerIcon} />
                                </button>
                                <button className={styles.iconButton} onClick={toggleSideMenu}>
                                    <Bars3Icon className={styles.headerIcon} />
                                </button>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className={styles.searchSection}>
                            <div className={styles.searchRow}>
                                <div className={styles.searchBar} onClick={() => setActiveTab('search')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
                                    <input
                                        type="text"
                                        placeholder="Search by vehicle model/brand"
                                        className={styles.searchInput}
                                        readOnly
                                    />
                                </div>
                                <button className={styles.filterButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Promotional Banner */}
                        <div className={styles.promoBanner}>
                            <div className={styles.promoContent}>
                                <h3 className={styles.promoTitle}>Lorem ipsum dolor</h3>
                                <p className={styles.promoSubtitle}>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className={styles.promoImage}>
                                <img src={toyotaHomePage} alt="Toyota Homepage" className={styles.carImage} />
                            </div>
                        </div>

                        {/* Categories Section */}
                        <div className={styles.categoriesSection}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}>Categories</h2>
                                <span className={styles.viewAll} onClick={() => setActiveTab('categories')}>View All</span>
                            </div>
                            <div className={styles.categoriesGrid}>
                                <div className={styles.categoryCard}>
                                    <div className={styles.categoryIcon}>
                                        <SportsCar className={styles.categorySvg} />
                                    </div>
                                    <div className={styles.categoryInfo}>
                                        <span className={styles.categoryName}>Sports Car</span>
                                        <span className={styles.categoryCount}>26 Car</span>
                                    </div>
                                </div>
                                <div className={styles.categoryCard}>
                                    <div className={styles.categoryIcon}>
                                        <Hatchback className={styles.categorySvg} />
                                    </div>
                                    <div className={styles.categoryInfo}>
                                        <span className={styles.categoryName}>Sports Car</span>
                                        <span className={styles.categoryCount}>68 Car</span>
                                    </div>
                                </div>
                                <div className={styles.categoryCard}>
                                    <div className={styles.categoryIcon}>
                                        <Suv className={styles.categorySvg} />
                                    </div>
                                    <div className={styles.categoryInfo}>
                                        <span className={styles.categoryName}>SUVs</span>
                                        <span className={styles.categoryCount}>52 Car</span>
                                    </div>
                                </div>
                                <div className={styles.categoryCard}>
                                    <div className={styles.categoryIcon}>
                                        <Conv className={styles.categorySvg} />
                                    </div>
                                    <div className={styles.categoryInfo}>
                                        <span className={styles.categoryName}>Convertible</span>
                                        <span className={styles.categoryCount}>18 Car</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Brands Section */}
                        <div className={styles.brandsSection}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.sectionTitle}>Brands</h2>
                                <span className={styles.viewAll} onClick={() => setActiveTab('brands')}>View All</span>
                            </div>
                            <div className={styles.brandsGrid}>
                                <div className={styles.brandCard}>
                                    <img src={audiLogo} alt="Audi" className={styles.brandLogo} />
                                    <span className={styles.brandName}>Audi</span>
                                </div>
                                <div className={styles.brandCard}>
                                    <div style={{ width: '30px', height: '30px' }}>
                                        <img src={bmwLogo} alt="BMW" className={styles.brandLogo} />
                                    </div>

                                    <span className={styles.brandName}>BMW</span>
                                </div>
                                <div className={styles.brandCard}>
                                    <img src={ferrariLogo} alt="Ferrari" className={styles.brandLogo} />
                                    <span className={styles.brandName}>Ferrari</span>
                                </div>
                                <div className={styles.brandCard}>
                                    <img src={lamborghiniLogo} alt="Lamborghini" className={styles.brandLogo} />
                                    <span className={styles.brandName}>Lamborghini</span>
                                </div>
                            </div>
                        </div>

                        {/* Offers Section */}
                        <div className={styles.offersSection}>
                            <h2 className={styles.sectionTitle}>Offers</h2>
                            <div className={styles.offersGrid}>
                                {[
                                    {
                                        id: 1,
                                        name: "Lexus NX - 300",
                                        image: porscheImage,
                                        price: "£72.00/Day",
                                        features: ["Insurance Included", "250 Km/Day"]
                                    },
                                    {
                                        id: 2,
                                        name: "Lexus NX - 300",
                                        image: cadillacImage,
                                        price: "£72.00/Day",
                                        features: ["Insurance Included", "250 Km/Day"]
                                    },
                                    {
                                        id: 3,
                                        name: "Lexus NX - 300",
                                        image: cadillacImage,
                                        price: "£72.00/Day",
                                        features: ["Insurance Included", "250 Km/Day"]
                                    },
                                    {
                                        id: 4,
                                        name: "Lexus NX - 300",
                                        image: cadillacImage,
                                        price: "£72.00/Day",
                                        features: ["Insurance Included", "250 Km/Day"]
                                    }
                                ].map(offer => (
                                    <div key={offer.id} className={styles.offerCard}>
                                        <div className={styles.offerBadge}>25% Off</div>
                                        <div className={styles.availability}>Available</div>
                                        <img src={offer.image} alt={offer.name} className={styles.offerImage} />
                                        <div className={styles.offerDetails}>
                                            <h3 className={styles.carModel}>{offer.name}</h3>
                                            <div className={styles.features}>
                                                {offer.features.map((feature, index) => (
                                                    <div key={index} className={styles.feature}>
                                                        {index === 0 ? (
                                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                                                <path d="m9 12 2 2 4-4" />
                                                            </svg>
                                                        ) : (
                                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="m12 14 4-4" />
                                                                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                                                            </svg>
                                                        )}
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className={styles.priceSection}>
                                                <span className={styles.price}>{offer.price}</span>
                                                <button className={styles.reserveBtn} onClick={() => setActiveTab('carDetResponsive')}>Reserve</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'rent':
                return (
                    <div className={styles.rentCarContainer}>
                        {/* Mobile Header - Same as Home */}
                        <div className={styles.mobileHeader}>
                            <div className={styles.logoContainer}>
                                <span className={styles.logoMoby}>MOBY</span>
                                <span className={styles.logoCar}>CAR24</span>
                            </div>
                            <div className={styles.headerIcons}>
                                <button onClick={() => setActiveTab('notifications')} className={styles.iconButton}>
                                    <BellIcon className={styles.headerIcon} />
                                </button>
                                <button className={styles.iconButton} onClick={toggleSideMenu}>
                                    <Bars3Icon className={styles.headerIcon} />
                                </button>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className={styles.searchSectionRent}>
                            <div className={styles.searchRow}>
                                <div className={styles.searchBar}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
                                    <input
                                        type="text"
                                        placeholder="Search by vehicle model/brand"
                                        className={styles.searchInput}
                                    />
                                </div>
                                <button className={styles.filterButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Car Cards Grid */}
                        <div className={styles.offersGrid}>
                            {[
                                {
                                    id: 1,
                                    name: "Lexus NX - 300",
                                    image: cadillacImage,
                                    price: "£72.00/Day",
                                    features: ["Insurance Included", "250 Km/Day"]
                                },
                                {
                                    id: 2,
                                    name: "BMW X5",
                                    image: porscheImage,
                                    price: "£85.00/Day",
                                    features: ["Insurance Included", "300 Km/Day"]
                                },
                                {
                                    id: 3,
                                    name: "BMW X5",
                                    image: porscheImage,
                                    price: "£85.00/Day",
                                    features: ["Insurance Included", "300 Km/Day"]
                                },
                                {
                                    id: 4,
                                    name: "BMW X5",
                                    image: porscheImage,
                                    price: "£85.00/Day",
                                    features: ["Insurance Included", "300 Km/Day"]
                                },
                                {
                                    id: 5,
                                    name: "BMW X5",
                                    image: porscheImage,
                                    price: "£85.00/Day",
                                    features: ["Insurance Included", "300 Km/Day"]
                                },
                                {
                                    id: 6,
                                    name: "BMW X5",
                                    image: porscheImage,
                                    price: "£85.00/Day",
                                    features: ["Insurance Included", "300 Km/Day"]
                                },
                                {
                                    id: 7,
                                    name: "Audi A4",
                                    image: cadillacImage,
                                    price: "£65.00/Day",
                                    features: ["Insurance Included", "200 Km/Day"]
                                },
                                {
                                    id: 8,
                                    name: "Mercedes C-Class",
                                    image: porscheImage,
                                    price: "£78.00/Day",
                                    features: ["Insurance Included", "250 Km/Day"]
                                }
                            ].map(car => (
                                <div key={car.id} className={styles.offerCard}>
                                    <div className={styles.availabilityRent}>Available</div>
                                    <img src={car.image} alt={car.name} className={styles.offerImage} />
                                    <div className={styles.offerDetails}>
                                        <h3 className={styles.carModel}>{car.name}</h3>
                                        <div className={styles.features}>
                                            {car.features.map((feature, index) => (
                                                <div key={index} className={styles.feature}>
                                                    {index === 0 ? (
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                                            <path d="m9 12 2 2 4-4" />
                                                        </svg>
                                                    ) : (
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="m12 14 4-4" />
                                                            <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                                                        </svg>
                                                    )}
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.priceSection}>
                                            <span className={styles.price}>{car.price}</span>
                                            <button className={styles.reserveBtn} onClick={() => setActiveTab('carDetResponsive')}>Reserve</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'message':
                return (
                    <div className={styles.messageContainer}>
                        {/* Mobile Header */}
                        <div className={styles.mobileHeader}>
                            <div className={styles.logoContainer}>
                                <span className={styles.logoMoby}>MOBY</span>
                                <span className={styles.logoCar}>CAR24</span>
                            </div>
                            <div onClick={() => setActiveTab('notifications')} className={styles.headerIcons}>
                                <button className={styles.iconButton}>
                                    <BellIcon className={styles.headerIcon} />
                                </button>
                                <button className={styles.iconButton} onClick={toggleSideMenu}>
                                    <Bars3Icon className={styles.headerIcon} />
                                </button>
                            </div>
                        </div>

                        {/* Message Title */}
                        <div className={styles.messageTitle}>
                            <h2>Message</h2>
                        </div>

                        {/* Search Bar */}
                        <div className={styles.messageSearchContainer}>
                            <div className={styles.messageSearchBar}>
                                <FontAwesomeIcon icon={faSearch} className={styles.messageSearchIcon} />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className={styles.messageSearchInput}
                                />
                            </div>
                        </div>

                        {/* Messages List */}
                        <div className={styles.messagesList}>
                            {[
                                {
                                    id: 1,
                                    name: "John Rosensky",
                                    avatar: profileChatPic,
                                    lastMessage: "Lorem Ipsum is simply dummy...",
                                    time: "20 Jan, 2024",
                                    unread: 3
                                },
                                {
                                    id: 2,
                                    name: "Jane Cooper",
                                    avatar: profileChatPic,
                                    lastMessage: "Lorem Ipsum is simply dummy...",
                                    time: "20 Jan, 2024",
                                    unread: 3
                                },
                                {
                                    id: 3,
                                    name: "Craig Saris",
                                    avatar: profileChatPic,
                                    lastMessage: "Lorem Ipsum is simply dummy...",
                                    time: "20 Jan, 2024",
                                    unread: 0
                                },
                                {
                                    id: 4,
                                    name: "Cameron Williamson",
                                    avatar: profileChatPic,
                                    lastMessage: "Lorem Ipsum is simply dummy...",
                                    time: "20 Jan, 2024",
                                    unread: 0
                                },
                                {
                                    id: 5,
                                    name: "Brooklyn Simmons",
                                    avatar: profileChatPic,
                                    lastMessage: "Lorem Ipsum is simply dummy...",
                                    time: "20 Jan, 2024",
                                    unread: 0
                                },
                                {
                                    id: 6,
                                    name: "Leslie Alexander",
                                    avatar: profileChatPic,
                                    lastMessage: "Lorem Ipsum is simply dummy...",
                                    time: "20 Jan, 2024",
                                    unread: 0
                                },
                                {
                                    id: 7,
                                    name: "Jenny Wilson",
                                    avatar: profileChatPic,
                                    lastMessage: "Lorem Ipsum is simply dummy...",
                                    time: "20 Jan, 2024",
                                    unread: 0
                                }
                            ].map(conversation => (
                                <div key={conversation.id} className={styles.messageItem} onClick={() => handleMessageClick(conversation.id)}>
                                    <div className={styles.messageAvatar}>
                                        <img src={conversation.avatar} alt={conversation.name} />
                                    </div>
                                    <div className={styles.messageContent}>
                                        <div className={styles.messageHeader}>
                                            <h3 className={styles.messageName}>{conversation.name}</h3>
                                            <span className={styles.messageTime}>{conversation.time}</span>
                                        </div>
                                        <p className={styles.messagePreview}>{conversation.lastMessage}</p>
                                    </div>
                                    {conversation.unread > 0 && (
                                        <div className={styles.unreadBadge}>
                                            <span>{conversation.unread}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'chat':
                return (
                    <div className={styles.chatContainer}>
                        {/* Chat Header */}
                        <div className={styles.chatHeader}>
                            <button className={styles.backButton} onClick={handleBackToMessages}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <div className={styles.chatUserInfo}>
                                <div className={styles.chatAvatar}>
                                    <img src={activeChat?.avatar} alt={activeChat?.name} />
                                </div>
                                <div className={styles.chatUserDetails}>
                                    <h3 className={styles.chatUserName}>{activeChat?.name}</h3>
                                    <span className={styles.chatUserStatus}>{activeChat?.status}</span>
                                </div>
                            </div>
                            <button className={styles.menuButton}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className={styles.chatMessagesArea}>
                            {activeChat?.messages?.map((message, index) => (
                                <div key={index} className={styles.messageWrapper}>
                                    <div className={`${styles.chatMessage} ${message.sender === 'me' ? styles.myMessage : styles.theirMessage}`}>
                                        <div className={styles.messageBubble}>
                                            {message.content}
                                        </div>
                                    </div>
                                    <div className={`${styles.messageTimestamp} ${message.sender === 'me' ? styles.timestampLeft : styles.timestampRight}`}>
                                        {message.time}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className={styles.chatInputContainer}>
                            <div className={styles.chatInputWrapper}>
                                <input
                                    type="text"
                                    placeholder="Type A Message...."
                                    className={styles.chatInput}
                                />
                                <div className={styles.chatInputIcons}>
                                    <button className={styles.chatIconButton}>
                                        <FontAwesomeIcon icon={faPaperclip} />
                                    </button>
                                    <button className={styles.chatIconButton}>
                                        <FontAwesomeIcon icon={faSmile} />
                                    </button>
                                    <button className={styles.chatIconButton}>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div >
                );
            case 'rides':
                switch (ridesTab) {
                    case 'completed':
                        return (
                            <div className={ridesStyles.ridesContainer}>
                                {/* Mobile Header */}
                                <div className={styles.mobileHeader}>
                                    <div className='fw-bold'>My Rides</div>
                                    <div className={styles.headerIcons}>
                                        <button onClick={() => setActiveTab('notifications')} className={styles.iconButton}>
                                            <BellIcon className={styles.headerIcon} />
                                        </button>
                                        <button className={styles.iconButton} onClick={toggleSideMenu}>
                                            <Bars3Icon className={styles.headerIcon} />
                                        </button>
                                    </div>
                                </div>

                                {/* Tab Navigation */}
                                <div className={ridesStyles.tabContainer}>
                                    <button
                                        onClick={() => setRidesTab('active')}
                                        className={`${ridesStyles.tabButton} ${ridesTab === 'active' ? ridesStyles.activeTab : ''}`}
                                    >
                                        Active Rides
                                    </button>
                                    <button
                                        onClick={() => setRidesTab('completed')}
                                        className={`${ridesStyles.tabButton} ${ridesTab === 'completed' ? ridesStyles.activeTab : ''}`}
                                    >
                                        Complete Rides
                                    </button>
                                </div>

                                {/* Completed Rides Cards */}
                                <div className={ridesStyles.completedRidesContainer}>
                                    {[
                                        {
                                            id: 1,
                                            name: "Porsche Cayenne",
                                            color: "Black",
                                            image: porsche,
                                            category: "SUV",
                                            year: "2024",
                                            rating: "4.5",
                                            reviews: "54",
                                            dates: "15 Feb 2024 To 19 Feb 2024"
                                        },
                                        {
                                            id: 2,
                                            name: "Cadillac Escalade",
                                            color: "White",
                                            image: cadillac,
                                            category: "SUV",
                                            year: "2024",
                                            rating: "4.8",
                                            reviews: "32",
                                            dates: "10 Feb 2024 To 14 Feb 2024"
                                        },
                                        {
                                            id: 3,
                                            name: "Rolls Royce Dawn",
                                            color: "Grey",
                                            image: rolls,
                                            category: "Convertible",
                                            year: "2024",
                                            rating: "4.9",
                                            reviews: "28",
                                            dates: "05 Feb 2024 To 09 Feb 2024"
                                        },
                                        {
                                            id: 4,
                                            name: "Lamborghini Urus",
                                            color: "Orange",
                                            image: carLambo,
                                            category: "SUV",
                                            year: "2024",
                                            rating: "4.7",
                                            reviews: "41",
                                            dates: "01 Feb 2024 To 04 Feb 2024"
                                        },
                                        {
                                            id: 5,
                                            name: "Mini Cooper",
                                            color: "White",
                                            image: carMini,
                                            category: "Hatchback",
                                            year: "2024",
                                            rating: "4.3",
                                            reviews: "67",
                                            dates: "28 Jan 2024 To 31 Jan 2024"
                                        },
                                        {
                                            id: 6,
                                            name: "Range Rover",
                                            color: "Black",
                                            image: carRange,
                                            category: "SUV",
                                            year: "2024",
                                            rating: "4.6",
                                            reviews: "38",
                                            dates: "25 Jan 2024 To 27 Jan 2024"
                                        },
                                        {
                                            id: 7,
                                            name: "Nissan Altima",
                                            color: "Silver",
                                            image: carNissan,
                                            category: "Sedan",
                                            year: "2024",
                                            rating: "4.4",
                                            reviews: "52",
                                            dates: "22 Jan 2024 To 24 Jan 2024"
                                        },
                                        {
                                            id: 8,
                                            name: "Ferrari Spyder",
                                            color: "Red",
                                            image: carSpyder,
                                            category: "Sports Car",
                                            year: "2024",
                                            rating: "4.9",
                                            reviews: "19",
                                            dates: "20 Jan 2024 To 21 Jan 2024"
                                        }
                                    ].map(ride => (
                                        <div key={ride.id} className={ridesStyles.completedCard} onClick={() => setActiveTab('complitedRideCar')}>
                                            <div className={ridesStyles.cardImageContainer}>
                                                <img src={ride.image} alt={ride.name} className={ridesStyles.cardImage} />
                                            </div>
                                            <div className={ridesStyles.cardContent} >
                                                <div className={ridesStyles.cardCategory}>
                                                    <span className={ridesStyles.categoryText}>{ride.category}</span>
                                                    <FontAwesomeIcon icon={faChevronRight} className={ridesStyles.categoryArrow} />
                                                    <span className={ridesStyles.yearText}>{ride.year}</span>
                                                </div>
                                                <div className={ridesStyles.cardTitle}>Rent {ride.name} </div>
                                                <div className={ridesStyles.cardRating}>
                                                    <FontAwesomeIcon icon={faStar} className={ridesStyles.starIcon} />
                                                    {/* <span className={ridesStyles.ratingText}>{ride.rating} ({ride.reviews} Reviews)</span> */}
                                                    <span className={ridesStyles.ratingText} >{ride.rating} ({ride.reviews} Reviews) </span>
                                                </div>
                                                <div className={ridesStyles.cardDates}>
                                                    <FontAwesomeIcon icon={faCalendarAlt} className={ridesStyles.calendarIcon} />
                                                    <span className={ridesStyles.datesText}>{ride.dates}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        )
                    default:
                        return (
                            <div className={ridesStyles.ridesContainer}>
                                {/* Mobile Header */}
                                <div className={styles.mobileHeader}>
                                    <div className='fw-bold'>My Rides</div>
                                    <div className={styles.headerIcons}>
                                        <button onClick={() => setActiveTab('notifications')} className={styles.iconButton}>
                                            <BellIcon className={styles.headerIcon} />
                                        </button>
                                        <button className={styles.iconButton} onClick={toggleSideMenu}>
                                            <Bars3Icon className={styles.headerIcon} />
                                        </button>
                                    </div>
                                </div>

                                {/* Tab Navigation */}
                                <div className={ridesStyles.tabContainer}>
                                    <button
                                        onClick={() => { setRidesTab('active'); }}
                                        className={`${ridesStyles.tabButton} ${ridesTab === 'active' ? ridesStyles.activeTab : ''}`}
                                    >
                                        Active Rides
                                    </button>
                                    <button
                                        onClick={() => setRidesTab('completed')}
                                        className={`${ridesStyles.tabButton} ${ridesTab === 'completed' ? ridesStyles.activeTab : ''}`}
                                    >
                                        Complete Rides
                                    </button>
                                </div>

                                {/* Your Ride Is Starting Soon Section */}
                                <div className={ridesStyles.thankYouSection}>
                                    <h1 className={ridesStyles.thankYouTitle}>Your Ride Is Starting Soon!</h1>
                                    <p className={ridesStyles.thankYouDescription}>
                                        Lorem ipsum dolor sit amet consectetur. Ut proin sociis pellentesque aliquam.
                                        Vulputate nisl vel diam eu. Risus natoque consectetur.
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

                                {/* Date & Time Container */}
                                <div className={ridesStyles.dateTimeContainer}>
                                    {/* Pick-up Date & Time */}
                                    <div className={ridesStyles.dateTimeSection}>
                                        <h3 className={ridesStyles.dateTimeTitle}>
                                            Pick-up date & time
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className={ridesStyles.infoIcon}
                                                onClick={(e) => handleInfoClick('pickup', e)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>
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
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className={ridesStyles.infoIcon}
                                                onClick={(e) => handleInfoClick('dropoff', e)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>
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

                                {/* Location and Map Container */}
                                <div className={ridesStyles.locationMapContainer}>
                                    {/* Pick-up Location */}
                                    <div className={ridesStyles.locationSection}>
                                        <h3 className={ridesStyles.locationTitle}>Pick-up location</h3>
                                        <div className={ridesStyles.locationInput}>
                                            <span className={ridesStyles.locationText}>{pickupAddress}</span>
                                            <FontAwesomeIcon icon={faChevronDown} className={ridesStyles.dropdownIcon} />
                                        </div>
                                    </div>

                                    {/* Drop-off Location */}
                                    <div className={ridesStyles.locationSection}>
                                        <h3 className={ridesStyles.locationTitle}>Drop-off location</h3>
                                        <div className={ridesStyles.locationInput}>
                                            <span className={ridesStyles.locationText}>{dropoffAddress}</span>
                                            <FontAwesomeIcon icon={faChevronDown} className={ridesStyles.dropdownIcon} />
                                        </div>
                                        <button className={ridesStyles.editButton}>
                                            <FontAwesomeIcon icon={faEdit} />
                                            Edit
                                        </button>
                                    </div>

                                    {/* Map Section */}
                                    <div className={ridesStyles.mapSection}>
                                        <div className={ridesStyles.mapContainer}>
                                            <img src={mapsImage} alt="Map" className={ridesStyles.mapImage} />
                                        </div>
                                    </div>
                                </div>

                                {/* Price Section */}
                                <div className={ridesStyles.priceSection}>
                                    <div className={ridesStyles.priceInfo}>
                                        <div className={ridesStyles.priceLabel}>Price For 5 Days</div>
                                        <div className={ridesStyles.priceAmount}>£153</div>
                                        <div className={ridesStyles.priceDetails}>View Price Details</div>
                                    </div>
                                    <button className={ridesStyles.reserveBtn} onClick={() => setActiveTab('pay')}>Pay</button>
                                </div>

                                {/* Action Buttons */}
                                <div className={ridesStyles.actionButtons}>
                                    <button
                                        className={ridesStyles.cancelButton}
                                        onClick={() => setActiveTab('cancel')}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className={ridesStyles.shareButton}
                                        onClick={() => { setIsActive(true); setRemoveFilter(true); }}
                                    >
                                        <FontAwesomeIcon icon={faShare} className={ridesStyles.shareIconBtn} />
                                    </button>
                                </div>

                                {/* Report Section */}
                                <div className={ridesStyles.reportSection}>
                                    <h3 className={ridesStyles.reportTitle}>Report</h3>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Booking ID</div>
                                        <input
                                            placeholder='Enter booking ID'
                                            className={ridesStyles.reportInput}
                                            type='text'
                                        />
                                        <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', marginTop: '15px' }}>Description</div>
                                        <textarea
                                            placeholder='Input'
                                            className={ridesStyles.reportTextarea}
                                        ></textarea>
                                        <button type='submit' className={ridesStyles.submitButton}>Submit</button>
                                    </div>
                                </div>

                                {/* Share Modal */}
                                {isActive && (
                                    <div className={styles.contactOverlay} onClick={() => { setIsActive(false); setRemoveFilter(false); }}>
                                        <div className={styles.contactModal} onClick={(e) => e.stopPropagation()}>
                                            <button
                                                className={styles.closeBtn}
                                                onClick={() => { setIsActive(false); setRemoveFilter(false); }}
                                            >
                                                <FontAwesomeIcon icon={faXmark} />
                                            </button>
                                            <div className={styles.contactIconOuter}>
                                                <div className={styles.contactIcon}>
                                                    <img src={phoneMsgIcon} alt="Contact" />
                                                </div>
                                            </div>
                                            <div className={styles.modalTitle}>Share The Trip Via</div>
                                            <p className={styles.modalDescription}>Lorem ipsum dolor sit amet consectetur.</p>

                                            <div className={styles.socialContacts}>
                                                <button className={styles.contactOptionHalf}>
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                    WhatsApp
                                                </button>
                                                <button className={styles.contactOptionHalf}>
                                                    <FontAwesomeIcon icon={faPaperPlane} />
                                                    Telegram
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        );

                }

            case 'search':
                return (
                    <div className={styles.searchContainer}>
                        {/* Search Header */}
                        <div className={styles.searchHeader}>
                            <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>

                        </div>

                        {/* Search Input */}
                        <div className={styles.searchInputSection}>
                            <div className={styles.searchTitle}>Search</div>
                            <div className={styles.searchBar}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
                                <input
                                    type="text"
                                    placeholder="Search by vehicle model/brand"
                                    className={styles.searchInput}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Search By Location */}
                        <div className={styles.searchSectionclick}>
                            <div className={styles.sectionTitle}>Search By Location</div>
                            <div className={styles.locationGrid}>
                                <div className={styles.locationCard}>
                                    <div className={styles.locationImage}>
                                        <img src={searchLoc1} alt="Location 1" />
                                    </div>
                                    <span className={styles.locationName}>Location 1</span>
                                </div>
                                <div className={styles.locationCard}>
                                    <div className={styles.locationImage}>
                                        <img src={searchLoc2} alt="Location 2" />
                                    </div>
                                    <span className={styles.locationName}>Location 2</span>
                                </div>
                                <div className={styles.locationCard}>
                                    <div className={styles.locationImage}>
                                        <img src={searchLoc3} alt="Location 3" />
                                    </div>
                                    <span className={styles.locationName}>Location 3</span>
                                </div>
                                <div className={styles.locationCard}>
                                    <div className={styles.locationImage}>
                                        <img src={searchLoc4} alt="Location 4" />
                                    </div>
                                    <span className={styles.locationName}>Location 4</span>
                                </div>
                            </div>
                        </div>

                        {/* Search By Date */}
                        <div className={styles.searchSectionclick}>
                            <h3 className={styles.sectionTitle}>Search By Date</h3>

                            {/* Date Fields Side by Side */}
                            <div className={styles.dateFieldsContainer}>
                                <div className={styles.dateInputGroup}>
                                    <label className={styles.dateLabel}>Pick-up date</label>
                                    <div className="dropdown show">
                                        <button
                                            className="btn d-flex align-items-center justify-content-between dropdown-toggle bg-white w-100"
                                            type="button"
                                            id="pickupDropdown"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{ borderRadius: '8px' }}
                                        >
                                            <div style={{ color: '#B1B1B1' }}>{pickupDate}</div>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="pickupDropdown">
                                            <li><button className="dropdown-item" onClick={() => setPickupDate('15 Feb 2024')}>15 Feb 2024</button></li>
                                            <li><button className="dropdown-item" onClick={() => setPickupDate('16 Feb 2024')}>16 Feb 2024</button></li>
                                            <li><button className="dropdown-item" onClick={() => setPickupDate('17 Feb 2024')}>17 Feb 2024</button></li>
                                            <li><button className="dropdown-item" onClick={() => setPickupDate('18 Feb 2024')}>18 Feb 2024</button></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.dateInputGroup}>
                                    <label className={styles.dateLabel}>Drop-off date</label>
                                    <div className="dropdown show">
                                        <button
                                            className="btn d-flex align-items-center justify-content-between dropdown-toggle bg-white w-100"
                                            type="button"
                                            id="dropoffDropdown"
                                            data-bs-toggle="dropdown"
                                            style={{ borderRadius: '8px' }}
                                            aria-expanded="false"
                                        >
                                            <div style={{ color: '#B1B1B1' }}>{dropoffDate}</div>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropoffDropdown">
                                            <li><button className="dropdown-item" onClick={() => setDropoffDate('16 Feb 2024')}>16 Feb 2024</button></li>
                                            <li><button className="dropdown-item" onClick={() => setDropoffDate('17 Feb 2024')}>17 Feb 2024</button></li>
                                            <li><button className="dropdown-item" onClick={() => setDropoffDate('18 Feb 2024')}>18 Feb 2024</button></li>
                                            <li><button className="dropdown-item" onClick={() => setDropoffDate('19 Feb 2024')}>19 Feb 2024</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Calendar Widget */}
                            <div className={styles.calendarWidget}>
                                <div className={styles.calendarHeader}>
                                    <button className={styles.calendarNavleft}>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <span className={styles.calendarMonth}>February 2024</span>
                                    <button className={styles.calendarNavright}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                                <div className={styles.calendarDays}>
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                        <div key={day} className={styles.dayHeader}>{day}</div>
                                    ))}
                                </div>
                                <div className={styles.calendarGrid}>
                                    {[
                                        { date: 31, isSelected: false, isStart: false, isEnd: false },
                                        { date: 1, isSelected: false, isStart: false, isEnd: false },
                                        { date: 2, isSelected: false, isStart: false, isEnd: false },
                                        { date: 3, isSelected: false, isStart: false, isEnd: false },
                                        { date: 4, isSelected: false, isStart: false, isEnd: false },
                                        { date: 5, isSelected: false, isStart: false, isEnd: false },
                                        { date: 6, isSelected: false, isStart: false, isEnd: false },
                                        { date: 7, isSelected: false, isStart: false, isEnd: false },
                                        { date: 8, isSelected: false, isStart: false, isEnd: false },
                                        { date: 9, isSelected: false, isStart: false, isEnd: false },
                                        { date: 10, isSelected: false, isStart: false, isEnd: false },
                                        { date: 11, isSelected: false, isStart: false, isEnd: false },
                                        { date: 12, isSelected: false, isStart: false, isEnd: false },
                                        { date: 13, isSelected: false, isStart: false, isEnd: false },
                                        { date: 14, isSelected: false, isStart: false, isEnd: false },
                                        { date: 15, isSelected: true, isStart: true, isEnd: false },
                                        { date: 16, isSelected: true, isStart: false, isEnd: true },
                                        { date: 17, isSelected: false, isStart: false, isEnd: false },
                                        { date: 18, isSelected: false, isStart: false, isEnd: false },
                                        { date: 19, isSelected: false, isStart: false, isEnd: false },
                                        { date: 20, isSelected: false, isStart: false, isEnd: false },
                                        { date: 21, isSelected: false, isStart: false, isEnd: false },
                                        { date: 22, isSelected: false, isStart: false, isEnd: false },
                                        { date: 23, isSelected: false, isStart: false, isEnd: false },
                                        { date: 24, isSelected: false, isStart: false, isEnd: false },
                                        { date: 25, isSelected: false, isStart: false, isEnd: false },
                                        { date: 26, isSelected: false, isStart: false, isEnd: false },
                                        { date: 27, isSelected: false, isStart: false, isEnd: false },
                                        { date: 28, isSelected: false, isStart: false, isEnd: false },
                                        { date: 1, isSelected: false, isStart: false, isEnd: false },
                                        { date: 2, isSelected: false, isStart: false, isEnd: false },
                                        { date: 3, isSelected: false, isStart: false, isEnd: false },
                                        { date: 4, isSelected: false, isStart: false, isEnd: false }
                                    ].map((dayData, index) => {
                                        const getClassName = () => {
                                            if (dayData.isStart) return `${styles.calendarDate} ${styles.selectedDateStart}`;
                                            if (dayData.isEnd) return `${styles.calendarDate} ${styles.selectedDateEnd}`;
                                            return styles.calendarDate;
                                        };

                                        return (
                                            <div key={index} className={getClassName()}>
                                                <div style={{ fontSize: '9px' }}>{dayData.date}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className={styles.actionButtons}>
                            <button className={styles.resetButton}>Reset</button>
                            <button className={styles.searchButton}>Search</button>
                        </div>
                    </div>
                );
            case 'categories':
                return (
                    <div className={styles.categoriesPageContainer}>
                        {/* Categories Header */}
                        <div className={styles.categoriesHeader}>
                            <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <h1 className={styles.categoriesTitle}>Categories</h1>
                            <div className={styles.categoriesHeaderIcons}>
                                <button className={styles.headerIconButton}>
                                    <BellIcon className={styles.headerIcon} />
                                </button>
                                <button className={styles.headerIconButton} onClick={toggleSideMenu}>
                                    <Bars3Icon className={styles.headerIcon} />
                                </button>
                            </div>
                        </div>

                        {/* Filter Tabs */}
                        <div className={styles.filterTabsContainer}>
                            {console.log(activeCategoryTab)}
                            <div
                                className={`${styles.filterTab} ${activeCategoryTab === 'Popular' ? styles.e5dem : ''}`}
                                onClick={() => setActiveCategoryTab('Popular')}
                            >
                                <div className={styles.filterTabText}>Popular</div>
                            </div>
                            <div
                                className={`${styles.filterTab} ${activeCategoryTab === 'Body Type' ? styles.e5dem : ''}`}
                                onClick={() => setActiveCategoryTab('Body Type')}
                            >
                                <div className={styles.filterTabText}>Body Type</div>
                            </div>
                            <div
                                className={`${styles.filterTab} ${activeCategoryTab === 'Rent Type' ? styles.e5dem : ''}`}
                                onClick={() => setActiveCategoryTab('Rent Type')}
                            >
                                <div className={styles.filterTabText}>Rent Type</div>
                            </div>
                        </div>

                        {/* Categories Grid */}
                        <div className={styles.categoriesPageGrid}>
                            {/* Luxury Car */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <FontAwesomeIcon icon={faCar} className={styles.carIcon} />
                                </div>
                                <div className={styles.categoryPageName}>Luxury Car</div>
                                <span className={styles.categoryPageCount}>26 Car</span>
                            </div>

                            {/* Sports Car */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <FontAwesomeIcon icon={faCar} className={styles.carIcon} />
                                </div>
                                <div className={styles.categoryPageName}>Sports Car</div>
                                <span className={styles.categoryPageCount}>26 Car</span>
                            </div>

                            {/* SUVs */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <FontAwesomeIcon icon={faCar} className={styles.carIcon} />
                                </div>
                                <div className={styles.categoryPageName}>SUVs</div>
                                <span className={styles.categoryPageCount}>26 Car</span>
                            </div>

                            {/* Convertible */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <FontAwesomeIcon icon={faCar} className={styles.carIcon} />
                                </div>
                                <div className={styles.categoryPageName}>Convertible</div>
                                <span className={styles.categoryPageCount}>26 Car</span>
                            </div>

                            {/* Electric Cars */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <FontAwesomeIcon icon={faCar} className={styles.carIcon} />
                                </div>
                                <div className={styles.categoryPageName}>Electric Cars</div>
                                <span className={styles.categoryPageCount}>26 Car</span>
                            </div>

                            {/* Cheap Cars */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <FontAwesomeIcon icon={faCar} className={styles.carIcon} />
                                </div>
                                <div className={styles.categoryPageName}>Cheap Cars</div>
                                <span className={styles.categoryPageCount}>26 Car</span>
                            </div>

                            {/* Pickup Van */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <FontAwesomeIcon icon={faCar} className={styles.carIcon} />
                                </div>
                                <div className={styles.categoryPageName}>Pickup Van</div>
                                <span className={styles.categoryPageCount}>26 Car</span>
                            </div>

                            {/* Electric Cars (Duplicate) */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <FontAwesomeIcon icon={faCar} className={styles.carIcon} />
                                </div>
                                <div className={styles.categoryPageName}>Electric Cars</div>
                                <span className={styles.categoryPageCount}>26 Car</span>
                            </div>
                        </div>
                    </div>
                );
            case 'brands':
                return (
                    <div className={styles.categoriesPageContainer}>
                        {/* Brands Header */}
                        <div className={styles.categoriesHeader}>
                            <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <h1 className={styles.categoriesTitle}>Brands</h1>
                            <div className='d-flex gap-2'>
                                <button className={styles.headerIconButton}>
                                    <BellIcon className={styles.headerIcon} />
                                </button>
                                <button className={styles.headerIconButton} onClick={toggleSideMenu}>
                                    <Bars3Icon className={styles.headerIcon} />
                                </button>
                            </div>
                        </div>

                        {/* Brands Grid */}
                        <div className={styles.categoriesPageGrid}>
                            {/* Audi */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={audiLogo} alt="Audi" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>Audi</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>

                            {/* BMW */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={bmwLogo} alt="BMW" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>BMW</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>

                            {/* ferrari */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={ferrariLogo} alt="Mercedes" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>ferrari</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>

                            {/* lamborghini */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={lamboLogo} alt="Ferrari" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>Ferrari</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>

                            {/* mercides */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={mercLogo} alt="Lamborghini" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>Lamborghini</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>

                            {/* Range Rover */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={rangeLogo} alt="Range Rover" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>Range Rover</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>

                            {/* Alfa Romeo */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={alphaLogo} alt="Alfa Romeo" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>Alfa Romeo</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>

                            {/* Aston Martin */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={astonLogo} alt="Aston Martin" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>Aston Martin</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>

                            {/* Bentley */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={bentlyLogo} alt="Bentley" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>Bentley</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>

                            {/* Cadillac */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={cadillacLogo} alt="Cadillac" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>Cadillac</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>

                            {/* aston martin */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={dodgeLogo} alt="Dodge" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>aston martin</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>

                            {/* dodge */}
                            <div className={styles.categoryPageCard} onClick={() => setActiveTab('rent')}>
                                <div className={styles.categoryPageIcon}>
                                    <img src={dodgeLogo} alt="Porsche" width="40" height="40" />
                                </div>
                                <div className={styles.categoryPageName}>dodge</div>
                                <span className={styles.categoryPageCount}>Starting £570</span>
                            </div>
                        </div>
                    </div>
                );
            case 'notifications':
                return (
                    <div className={notifStyle.notificationsPageContainer}>
                        {/* Notifications Header */}
                        <div className={notifStyle.notfiHeader}>
                            <button className={styles.backButton} onClick={() => setActiveTab('home')}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <div className={notifStyle.notifTitle}>Notification</div>
                            <button className={styles.headerIconButton} onClick={toggleSideMenu}>
                                <Bars3Icon className={styles.headerIcon} />
                            </button>

                        </div>

                        {/* Notifications Content */}
                        <div className={notifStyle.notificationsContent}>
                            {/* Unread Notifications */}
                            <div className={notifStyle.notificationSection}>
                                <h3 className={notifStyle.notificationSectionTitle}>Unread Notification</h3>
                                <div className={notifStyle.notificationCard}>
                                    <div className={notifStyle.notificationCardContent}>
                                        <h4 className={notifStyle.notificationTitle}>Lorem Ipsum Dolor Sit Amet Consectetur</h4>
                                        <span className={notifStyle.notificationTime}>09:20pm</span>
                                    </div>
                                    <p className={notifStyle.notificationDescription}>
                                        Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut.
                                    </p>
                                </div>
                                <div className={notifStyle.notificationCard}>
                                    <div className={notifStyle.notificationCardContent}>
                                        <h4 className={notifStyle.notificationTitle}>Lorem Ipsum Dolor Sit Amet Consectetur</h4>
                                        <span className={notifStyle.notificationTime}>09:20pm</span>
                                    </div>
                                    <p className={notifStyle.notificationDescription}>
                                        Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut.
                                    </p>
                                </div>
                            </div>

                            {/* Past Notifications */}
                            <div className={notifStyle.notificationSection}>
                                <h3 className={notifStyle.notificationSectionTitle}>Past Notification</h3>
                                <div className={notifStyle.notificationCard}>
                                    <div className={notifStyle.notificationCardContent}>
                                        <h4 className={notifStyle.notificationTitle}>Lorem Ipsum Dolor Sit Amet Consectetur</h4>
                                        <span className={notifStyle.notificationTime}>09:20pm</span>
                                    </div>
                                    <p className={notifStyle.notificationDescription}>
                                        Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut.
                                    </p>
                                </div>
                                <div className={notifStyle.notificationCard}>
                                    <div className={notifStyle.notificationCardContent}>
                                        <h4 className={notifStyle.notificationTitle}>Lorem Ipsum Dolor Sit Amet Consectetur</h4>
                                        <span className={notifStyle.notificationTime}>09:20pm</span>
                                    </div>
                                    <p className={notifStyle.notificationDescription}>
                                        Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut.
                                    </p>
                                </div>
                                <div className={notifStyle.notificationCard}>
                                    <div className={notifStyle.notificationCardContent}>
                                        <h4 className={notifStyle.notificationTitle}>Lorem Ipsum Dolor Sit Amet Consectetur</h4>
                                        <span className={notifStyle.notificationTime}>09:20pm</span>
                                    </div>
                                    <p className={notifStyle.notificationDescription}>
                                        Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut.
                                    </p>
                                </div>
                                <div className={notifStyle.notificationCard}>
                                    <div className={notifStyle.notificationCardContent}>
                                        <h4 className={notifStyle.notificationTitle}>Lorem Ipsum Dolor Sit Amet Consectetur</h4>
                                        <span className={notifStyle.notificationTime}>09:20pm</span>
                                    </div>
                                    <p className={notifStyle.notificationDescription}>
                                        Lorem ipsum dolor sit amet consectetur. Nisi volutpat dictum egestas vitae luctus ut.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'carDetResponsive':
                return <CarDetResponsive setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'viewDetails':
                return <ConfirmCarReserve setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'complitedRideCar':
                return <ComplitedRideCar setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} setRidesTab={setRidesTab} />;
            case 'profile':
                return <Profile setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'signup':
                return <SignUp />
            case 'login':
                return <Login />
            case 'forgot':
                return <Forget />
            case 'resetpass':
                return <Reset />
            case 'fav':
                return <Fav setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'history':
                return <History setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'settings':
                return <Settings setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'inviteEarn':
                return <InviteEarn setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'helpCenter':
                return <HelpCenter setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'sendFeedback':
                return <SendFeedback setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'contact':
                return <Contact setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'faqs':
                return <FAQs setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'privacyPolicy':
                return <PrivacyPolicy setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'termsAndConditions':
                return <TermsAndConditions setActiveTab={setActiveTab} toggleSideMenu={toggleSideMenu} />;
            case 'pay':
                return (
                    <div className={ridesStyles.paymentContainer}>
                        {/* Header */}
                        <div className={styles.categoriesHeader}>
                            <button className={styles.backButton} onClick={() => setActiveTab('rides')}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <h1 className={ridesStyles.categoriesTitle}>Payment</h1>
                            <div className={styles.categoriesHeaderIcons}>
                                <button className={styles.headerIconButton}>
                                    <BellIcon className={styles.headerIcon} />
                                </button>
                                <button className={styles.headerIconButton} onClick={toggleSideMenu}>
                                    <Bars3Icon className={styles.headerIcon} />
                                </button>
                            </div>
                        </div>

                        {/* Payment Form */}
                        <div className={ridesStyles.paymentForm}>
                            <h2 className={ridesStyles.paymentFormTitle}>Card Information</h2>

                            <div className={ridesStyles.paymentFormGroup}>
                                <label className={ridesStyles.paymentLabel}>Card Holder Name</label>
                                <input
                                    type="text"
                                    className={ridesStyles.paymentInput}
                                    placeholder="Enter name"
                                />
                            </div>

                            <div className={ridesStyles.paymentFormGroup}>
                                <label className={ridesStyles.paymentLabel}>Card Number</label>
                                <input
                                    type="text"
                                    className={ridesStyles.paymentInput}
                                    placeholder="Enter card number"
                                />
                            </div>

                            <div className={ridesStyles.paymentRow}>
                                <div className={ridesStyles.paymentFormGroup}>
                                    <label className={ridesStyles.paymentLabel}>Expiry Date</label>
                                    <input
                                        type="text"
                                        className={ridesStyles.paymentInput}
                                        placeholder="--/--"
                                    />
                                </div>
                                <div className={ridesStyles.paymentFormGroup}>
                                    <label className={ridesStyles.paymentLabel}>CVV</label>
                                    <input
                                        type="text"
                                        className={ridesStyles.paymentInput}
                                        placeholder="Enter CVV number"
                                    />
                                </div>
                            </div>

                            <div className={ridesStyles.paymentButtons}>
                                <button className={ridesStyles.payButton}>Pay £241.50</button>
                                <button className={ridesStyles.cancelButton}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )

            case 'cancel':
                return (
                    <div className={ridesStyles.cancelContainer}>
                        {/* Header */}
                        <div className={ridesStyles.categoriesHeader}>
                            <button className={styles.backButton} onClick={() => setActiveTab('rides')}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <h1 className={ridesStyles.categoriesTitle}>Cancel Rides</h1>
                            <div className={styles.categoriesHeaderIcons}>
                                <button className={styles.headerIconButton}>
                                    <BellIcon className={styles.headerIcon} />
                                </button>
                                <button className={styles.headerIconButton} onClick={toggleSideMenu}>
                                    <Bars3Icon className={styles.headerIcon} />
                                </button>
                            </div>
                        </div>

                        {/* Cancel Content */}
                        <div className={ridesStyles.cancelContent}>
                            <div className={ridesStyles.cancelTitle}>Are You Sure Want To Cancel?</div>
                            <p className={ridesStyles.cancelDescription}>Lorem ipsum dolor sit amet consectetur Odio ac pretium.</p>

                            <div className={ridesStyles.cancelPolicy}>
                                <h3 className={ridesStyles.cancelPolicyTitle}>Cancellation Policy</h3>
                                <p className={ridesStyles.cancelPolicyText}>
                                    Lorem ipsum dolor sit amet consectetur. Fermentum mi sed turpis adipiscing pellentesque ut odio mauris praesent. Neque adipiscing ut at est id tortor feugiat. Non enim blandit tincidunt molestie commodo diam arcu fermentum. Eget felis urna placerat lobortis volutpat sed lorem sit.
                                </p>
                                <p className={ridesStyles.cancelPolicyText}>
                                    Nullam elit amet tortor gravida odio enim. Mauris ut at mattis gravida sed neque mattis at. Dui nascetur velit non et felis. Lectus ornare mauris adipiscing et et faucibus pellentesque nulla. Id aliquam elit fermentum tincidunt risus.
                                </p>
                            </div>

                            <div className={ridesStyles.cancelDropdown}>
                                <label className={ridesStyles.cancelDropdownLabel}>Select reason</label>
                                <div className="dropdown">
                                    <button
                                        className={`btn dropdown-toggle ${ridesStyles.cancelDropdownButton}`}
                                        type="button"
                                        id="cancelReasonDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Select
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="cancelReasonDropdown">
                                        <li><button className="dropdown-item" type="button">Changed my mind</button></li>
                                        <li><button className="dropdown-item" type="button">Found another ride</button></li>
                                        <li><button className="dropdown-item" type="button">Emergency</button></li>
                                        <li><button className="dropdown-item" type="button">Other</button></li>
                                    </ul>
                                </div>
                            </div>

                            <button className={ridesStyles.cancelSubmitButton}>Cancel</button>
                        </div>
                    </div>
                )
            default:
                return <div>no case is chosen</div>;
        }
    }, [activeTab, toggleSideMenu, activeChat, dropoffDate, pickupDate, searchQuery, handleMessageClick, activeCategoryTab, dropoffAddress, isActive, pickupAddress, ridesTab]);

    return (
        <div className={styles.appContainer}>
            {renderContent}

            {/* Side Menu Overlay */}
            {isSideMenuOpen && (
                <div className={styles.sideMenuOverlay} onClick={closeSideMenu}></div>
            )}

            {/* Side Menu */}
            <div className={`${styles.sideMenu} ${isSideMenuOpen ? styles.sideMenuOpen : ''}`}>
                {/* Close Button */}
                <button className={styles.closeButton} onClick={closeSideMenu}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                {/* Profile Section */}
                <div className={styles.profileSection}>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileAvatar}>
                            <img src={profilePicResposive} alt="error_img" />
                        </div>
                        <div className={styles.profileDetails}>
                            <h3 className={styles.profileName}>Livia Dias</h3>
                            <button onClick={() => { setActiveTab('profile'); setIsSideMenuOpen(false); }} className={styles.viewProfileLink}>View Profile</button>
                        </div>
                    </div>
                    <div className={styles.profileDivider}></div>
                </div>

                {/* Menu Items */}
                <div className={styles.menuItems}>
                    {/* Brands */}
                    <div className={styles.menuItem}>
                        <FontAwesomeIcon icon={faMedal} className={styles.menuIcon} />

                        <span onClick={() => { setActiveTab('brands'); setIsSideMenuOpen(false); }}>Brands</span>
                    </div>

                    {/* Language */}
                    <div className={styles.menuItem}>
                        <FontAwesomeIcon icon={faLanguage} className={styles.menuIcon} />
                        <span>Language</span>
                        <div className={styles.dropdownContainer}>
                            <button
                                className={styles.dropdownButton}
                                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                            >
                                <div className={styles.flagContainer}>
                                    {FlagIcon && <FlagIcon className={styles.flagIcon} />}
                                </div>
                                <span>{selectedLanguage}</span>
                                <FontAwesomeIcon
                                    icon={showLanguageDropdown ? faChevronUp : faChevronDown}
                                    className={styles.dropdownArrow}
                                />
                            </button>
                            {showLanguageDropdown && (
                                <div className={styles.dropdownMenu}>
                                    <button className={styles.dropdownMenuItem} onClick={() => { setSelectedLanguage('EN'); setShowLanguageDropdown(false); }}>
                                        <div className={styles.flagContainer}>
                                            {GB && <GB className={styles.flagIcon} />}
                                        </div>
                                        EN
                                    </button>
                                    <button className={styles.dropdownMenuItem} onClick={() => { setSelectedLanguage('FR'); setShowLanguageDropdown(false); }}>
                                        <div className={styles.flagContainer}>
                                            {FR && <FR className={styles.flagIcon} />}
                                        </div>
                                        FR
                                    </button>
                                    <button className={styles.dropdownMenuItem} onClick={() => { setSelectedLanguage('DE'); setShowLanguageDropdown(false); }}>
                                        <div className={styles.flagContainer}>
                                            {DE && <DE className={styles.flagIcon} />}
                                        </div>
                                        DE
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Currency */}
                    <div className={styles.menuItem}>
                        <FontAwesomeIcon icon={faCoins} className={styles.menuIcon} />
                        <span>Currency</span>
                        <div className={styles.dropdownContainer}>
                            <button
                                className={styles.dropdownButton}
                                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                            >
                                <FontAwesomeIcon icon={CurrencyIcon} className={styles.currencyIcon} />
                                <span>{selectedCurrency}</span>
                                <FontAwesomeIcon
                                    icon={showCurrencyDropdown ? faChevronUp : faChevronDown}
                                    className={styles.dropdownArrow}
                                />
                            </button>
                            {showCurrencyDropdown && (
                                <div className={styles.dropdownMenu}>
                                    <button className={styles.dropdownMenuItem} onClick={() => { setSelectedCurrency('GBP'); setShowCurrencyDropdown(false); }}>
                                        <FontAwesomeIcon icon={faSterlingSign} className={styles.currencyIcon} /> GBP
                                    </button>
                                    <button className={styles.dropdownMenuItem} onClick={() => { setSelectedCurrency('USD'); setShowCurrencyDropdown(false); }}>
                                        <FontAwesomeIcon icon={faDollarSign} className={styles.currencyIcon} /> USD
                                    </button>
                                    <button className={styles.dropdownMenuItem} onClick={() => { setSelectedCurrency('EUR'); setShowCurrencyDropdown(false); }}>
                                        <FontAwesomeIcon icon={faEuroSign} className={styles.currencyIcon} /> EUR
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* My Profile */}
                    <div className={styles.menuItem} onClick={() => { setActiveTab('profile'); setIsSideMenuOpen(false); }}>
                        <FontAwesomeIcon icon={faUser} className={styles.menuIcon} />
                        <span>My Profile</span>
                    </div>

                    {/* My Favourite */}
                    <div onClick={() => { setActiveTab('fav'); setIsSideMenuOpen(false); }} className={styles.menuItem}>
                        <FontAwesomeIcon icon={faHeart} className={styles.menuIcon} />
                        <span>My Favourite</span>
                    </div>

                    {/* Payment History */}
                    <div className={styles.menuItem} onClick={() => { setActiveTab('history'); setIsSideMenuOpen(false); }}>
                        <FontAwesomeIcon icon={faWallet} className={styles.menuIcon} />
                        <span>Payment History</span>
                    </div>

                    {/* Settings */}
                    <div className={styles.menuItem} onClick={() => { setActiveTab('settings'); setIsSideMenuOpen(false); }}>
                        <FontAwesomeIcon icon={faCog} className={styles.menuIcon} />
                        <span>Settings</span>
                    </div>

                    {/* Invite & Earn */}
                    <div className={styles.menuItem} onClick={() => { setActiveTab('inviteEarn'); setIsSideMenuOpen(false); }}>
                        <FontAwesomeIcon icon={faUserPlus} className={styles.menuIcon} />
                        <span>Invite & Earn</span>
                    </div>

                    {/* Help Section */}
                    <div className={styles.expandableSection}>
                        <div
                            className={styles.expandableHeader}
                            onClick={() => setShowHelpSection(!showHelpSection)}
                        >
                            <FontAwesomeIcon icon={faHeadset} className={styles.menuIcon} />
                            <span>Help</span>
                            <FontAwesomeIcon
                                icon={showHelpSection ? faChevronUp : faChevronDown}
                                className={styles.expandArrow}
                            />
                        </div>
                        {showHelpSection && (
                            <div className={styles.expandableContent}>
                                <div className={styles.subMenuItem} onClick={() => { setActiveTab('helpCenter'); setIsSideMenuOpen(false); }}>Help centre</div>
                                <div className={styles.subMenuItem} onClick={() => { setActiveTab('sendFeedback'); setIsSideMenuOpen(false); }}>Send us your feedback</div>
                                <div className={styles.subMenuItem} onClick={() => { setActiveTab('contact'); setIsSideMenuOpen(false); }}>Contact us</div>
                                <div className={styles.subMenuItem} onClick={() => { setActiveTab('faqs'); setIsSideMenuOpen(false); }}>FAQs</div>
                            </div>
                        )}
                    </div>

                    {/* Legal Section */}
                    <div className={styles.expandableSection}>
                        <div
                            className={styles.expandableHeader}
                            onClick={() => setShowLegalSection(!showLegalSection)}
                        >
                            <FontAwesomeIcon icon={faFileText} className={styles.menuIcon} />
                            <span>Legal</span>
                            <FontAwesomeIcon
                                icon={showLegalSection ? faChevronUp : faChevronDown}
                                className={styles.expandArrow}
                            />
                        </div>
                        {showLegalSection && (
                            <div className={styles.expandableContent}>
                                <div className={styles.subMenuItem} onClick={() => { setActiveTab('privacyPolicy'); setIsSideMenuOpen(false); }}>Privacy policy</div>
                                <div className={styles.subMenuItem} onClick={() => { setActiveTab('termsAndConditions'); setIsSideMenuOpen(false); }}>Terms and conditions</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Navigation - Hidden in Chat and ViewDetails */}

            {activeTab !== 'chat' && activeTab !== 'viewDetails' && activeTab !== 'login' && activeTab !== 'resetpass' && activeTab !== 'forgot' && activeTab !== 'signup' && (activeTab !== 'rides' || ridesTab === 'completed') && (
                <div className={styles.bottomNav}>
                    <button
                        className={`${styles.navItem} ${activeTab === 'home' ? styles.active : ''}`}
                        onClick={() => handleTabChange('home')}
                    >
                        <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
                        <span className={styles.navLabel}>Home</span>
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'rent' ? styles.active : ''}`}
                        onClick={() => handleTabChange('rent')}
                    >
                        <FontAwesomeIcon icon={faCar} className={styles.navIcon} />
                        <span className={styles.navLabel}>Rent a car</span>
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'message' ? styles.active : ''}`}
                        onClick={() => handleTabChange('message')}
                    >
                        <FontAwesomeIcon icon={faComment} className={styles.navIcon} />
                        <span className={styles.navLabel}>Message</span>
                    </button>
                    <button
                        className={`${styles.navItem} ${activeTab === 'rides' ? styles.active : ''}`}
                        onClick={() => handleTabChange('rides')}
                    >
                        <FontAwesomeIcon icon={faCarSide} className={styles.navIcon} />
                        <span className={styles.navLabel}>My rides</span>
                    </button>
                </div>
            )}

            {/* Info Popup Modal */}
            {removeFilter && showInfoPopup && (
                <div className={ridesStyles.overlay} onClick={handleCloseInfoPopup}></div>
            )}
            {showInfoPopup && (
                <div
                    className={ridesStyles.infoPopup}
                    style={{
                        top: `${popupPosition.top}px`,
                        left: `${popupPosition.left}px`
                    }}
                >
                    <img
                        src={infoPopupType === 'pickup' ? pickup : dropoff}
                        alt={infoPopupType === 'pickup' ? 'Pickup Info' : 'Dropoff Info'}
                        className={ridesStyles.infoPopupImage}
                    />
                </div>
            )}
        </div>
    );
};

export default HomePageResponsive;
