import React, { useState, useEffect } from 'react';
import styles from '../styles/SplashScreen.module.css';
import home1Image from '../images/resposiveImgs/home_1.png';
import secondImage from '../images/resposiveImgs/Group 1707487174.png';
import carLogo from '../images/resposiveImgs/car logo.png';
import { Link } from 'react-router-dom';


const SplashScreen = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            console.log('Screen width:', window.innerWidth, 'Is mobile:', mobile);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Only show splash screen on mobile
    if (!isMobile) {
        return null;
    }

    return (
        <div className={styles.splashScreen}>
            {/* Main Background Image */}
            <div
                className={styles.splashBackground}
                style={{
                    backgroundImage: `url(${home1Image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Second Background Image on top */}
            <img src={secondImage} alt="second" className={styles.spalchLine} />
            <img src={carLogo} alt="second" className={styles.spalachLogo} />
            <div className={styles['navbar-logo']}>
                MOBY<span className={styles['sp']}>CAR24</span>
            </div>
            <Link to='/OnBoarding' style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'transparent', zIndex: '11111', top: '0', left: '0' }}></Link>
        </div >
    );
};

export default SplashScreen;
