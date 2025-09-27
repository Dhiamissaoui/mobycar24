import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/responsiveStyle/onBoarding.module.css';
import home2Image from '../../images/resposiveImgs/home_2.png';

function OnBoarding() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/HomePageResponsive');
    };

    return (
        <div className={styles.splashScreen}>
            {/* Main Background Image */}
            <div
                className={styles.splashBackground}
                style={{
                    backgroundImage: `url(${home2Image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Overlay Box */}
            <div className={styles.overlayBox}>
                <div className={styles.content}>
                    <h2 className={styles.title}>How to use!</h2>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur. Lobortis sed commodo enim sed accumsan lorem.
                        Placerat quis eget nunc malesuada netus elit etiam dolor. Congue id sagittis facilisis
                        faucibus ullamcorper.
                    </p>
                    <button className={styles.getStartedBtn} onClick={handleGetStarted}>
                        <span>Get Started</span>
                        <div className={styles.arrowIcons}>
                            <span style={{ scale: '0.8', color: 'rgba(255, 255, 255, 0.17)' }}>▶</span>
                            <span style={{ scale: '0.9', color: 'rgba(255, 255, 255, 0.38)' }}>▶</span>
                            <span >▶</span>
                        </div>
                    </button>
                </div>
            </div >
        </div >
    );
}

export default OnBoarding;
