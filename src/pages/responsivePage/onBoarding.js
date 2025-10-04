import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/responsiveStyle/onBoarding.module.css'
import home2Image from '../../images/resposiveImgs/home_2.png';

function OnBoarding() {


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
                    <Link to='/HomePageResponsive' className={styles.getStartedBtn}>
                        <span>Get Started</span>
                        <div className={styles.arrowIcons}>
                            <div className={styles.playbtnone}></div>
                            <div className={styles.playbtntwo}></div>
                            <div className={styles.playbtnthree}></div>
                        </div>
                    </Link>
                </div>
            </div >
        </div >
    );
}

export default OnBoarding;
