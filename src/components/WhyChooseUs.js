import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faTag, 
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import service from '../images/image_wcu.png'
import '../styles/WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <section className="container">
        <img src={service} alt='serv'  className="main"/>
        <div className="part2">
            <h1>Why Choose Us</h1>
            <p className="randomText">Lorem ipsum dolor sit amet consectetur. Malesuada risus vestibulum mattis sed scelerisque. Tortor in amet non lobortis.</p>
            <div className="specs">
                <div className="cadre x">
                    <FontAwesomeIcon className="icon" icon={faPhone}/>
                    <div className="desc">
                        <h2>Customer Support</h2>
                        <p className="randomText">Lorem ipsum dolor sit amet consectetur. Faucibus felis inter dum amet feugiat facilisi integer vitae arcu.</p>
                    </div>
                </div>
                <div className="cadre x">
                    <FontAwesomeIcon className="icon" icon={faTag}/>
                    <div className="desc">
                        <h2>Customer Support</h2>
                        <p className="randomText">Lorem ipsum dolor sit amet consectetur. Faucibus felis inter dum amet feugiat facilisi integer vitae arcu.</p>
                    </div>
                </div>
                <div className="cadre">
                    <FontAwesomeIcon className="icon"  icon={faMapMarkerAlt}/>
                    <div className="desc">
                        <h2>Customer Support</h2>
                        <p className="randomText">Lorem ipsum dolor sit amet consectetur. Faucibus felis inter dum amet feugiat facilisi integer vitae arcu.</p>
                    </div>
                </div>
                <div className="bg">WHY US</div>
            </div>
        </div>
    </section>
    
  );
};

export default WhyChooseUs;