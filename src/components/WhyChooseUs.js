import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faTag,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import service from '../images/image_wcu.png';
import Styles from '../styles/WhyChooseUs.module.css';

const WhyChooseUs = () => {
    return (
        <section className={Styles.container}>
            <div className={Styles.backgroundText}>WHY US</div>
            <img src={service} alt='serv' className={Styles.main} />
            <div className={Styles.part2}>
                <div className={Styles.titleh1}>Why Choose Us</div>
                <p className={Styles.randomText}>Lorem ipsum dolor sit amet consectetur. Malesuada risus vestibulum mattis sed scelerisque. Tortor in amet non lobortis.</p>
                <div className={Styles.specs}>
                    <div className={`${Styles.cadre} ${Styles.x}`}>
                        <FontAwesomeIcon className={Styles.icon} icon={faPhone} />
                        <div className={Styles.desc}>
                            <div className={Styles.titleDesc}>Customer Support</div>
                            <p className={Styles.randomText}>Lorem ipsum dolor sit amet consectetur. Faucibus felis inter dum amet feugiat facilisi integer vitae arcu.</p>
                        </div>
                    </div>
                    <div className={`${Styles.cadre} ${Styles.x}`}>
                        <FontAwesomeIcon className={Styles.icon} icon={faTag} />
                        <div className={Styles.desc}>
                            <div className={Styles.titleDesc}>Customer Support</div>
                            <p className={Styles.randomText}>Lorem ipsum dolor sit amet consectetur. Faucibus felis inter dum amet feugiat facilisi integer vitae arcu.</p>
                        </div>
                    </div>
                    <div className={Styles.cadre}>
                        <FontAwesomeIcon className={Styles.icon} icon={faMapMarkerAlt} />
                        <div className={Styles.desc}>
                            <div className={Styles.titleDesc}>Customer Support</div>
                            <p className={Styles.randomText}>Lorem ipsum dolor sit amet consectetur. Faucibus felis inter dum amet feugiat facilisi integer vitae arcu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;