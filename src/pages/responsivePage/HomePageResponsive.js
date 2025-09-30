import React, { useState, useMemo, useCallback, useEffect } from 'react';
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
    faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { GB, FR, DE } from 'country-flag-icons/react/3x2';


import SignUp from '../../pages/SignIn';
// Import existing components

// Import images
// Brand logos

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


import styles from '../../styles/responsiveStyle/HomePageResposive.module.css';
import notifStyle from '../../styles/responsiveStyle/Notification.module.css';
import CarDetResponsive from './CarDetResponsive';

const HomePageResponsive = () => {
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
                return <div className={styles.tabContent}>My Rides Content</div>;
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
            case 'signup':
                return <SignUp />
            default:
                return null;
        }
    }, [activeTab, toggleSideMenu, activeChat, dropoffDate, pickupDate, searchQuery, handleMessageClick, activeCategoryTab]);

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
                            <a href="/profile" className={styles.viewProfileLink}>View Profile</a>
                        </div>
                    </div>
                    <div className={styles.profileDivider}></div>
                </div>

                {/* Menu Items */}
                <div className={styles.menuItems}>
                    {/* Brands */}
                    <div className={styles.menuItem}>
                        <FontAwesomeIcon icon={faMedal} className={styles.menuIcon} />

                        <span>Brands</span>
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
                    <div className={styles.menuItem}>
                        <FontAwesomeIcon icon={faUser} className={styles.menuIcon} />
                        <span>My Profile</span>
                    </div>

                    {/* My Favourite */}
                    <div className={styles.menuItem}>
                        <FontAwesomeIcon icon={faHeart} className={styles.menuIcon} />
                        <span>My Favourite</span>
                    </div>

                    {/* Payment History */}
                    <div className={styles.menuItem}>
                        <FontAwesomeIcon icon={faWallet} className={styles.menuIcon} />
                        <span>Payment History</span>
                    </div>

                    {/* Settings */}
                    <div className={styles.menuItem}>
                        <FontAwesomeIcon icon={faCog} className={styles.menuIcon} />
                        <span>Settings</span>
                    </div>

                    {/* Invite & Earn */}
                    <div className={styles.menuItem}>
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
                                <div className={styles.subMenuItem}>Help centre</div>
                                <div className={styles.subMenuItem}>Send us your feedback</div>
                                <div className={styles.subMenuItem}>Contact us</div>
                                <div className={styles.subMenuItem}>FAQs</div>
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
                                <div className={styles.subMenuItem}>Privacy policy</div>
                                <div className={styles.subMenuItem}>Terms and conditions</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Navigation - Hidden in Chat */}
            {activeTab !== 'chat' && (
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
        </div>
    );
};

export default HomePageResponsive;
