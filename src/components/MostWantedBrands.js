
import Styles from '../styles/MostWantedBrands.module.css';

import { Link } from 'react-router-dom';

// Import your brand logos
import audiLogo from '../images/audi logo.png';
import bmwLogo from '../images/bmw logo.png';
import ferariLogo from '../images/ferrari logo.png';
import lamborghiniLogo from '../images/lambo logo.png';
import mercedesLogo from '../images/merc logo.png';
import rangeRoverLogo from '../images/range logo.png';


function MostWantedBrands() {
  return (
    <section className={Styles['most-wanted-section']}>
      <div className={Styles['cont']}>
        <div className={Styles['header-container']}>
          <div className={Styles['header-content']}>
            <div className={Styles['title']}>Most Wanted Car Rental Brands</div>
            <div className={Styles['description']}>Lorem ipsum dolor sit amet consectetur. Adipiscing morbi tellus arcu sed morbi. Nibh amet dignissim in ac duis etiam consectetur dolor ultrices. Commodo risus egestas hendrerit morbi mattis ut vitae arcu.</div>
          </div>
        </div>

        <div className={Styles["brands-grid"]}>
          {/* First Row */}
          <div className={Styles["brand-card"]}>
            <img src={audiLogo} alt="Audi" className={Styles["brand-logo"]} />
            <div className={Styles["brand-info"]}>
              <div className={Styles['titleLogo']}>Audi</div>
              <p style={{ color: 'rgba(181, 181, 181, 1)', fontSize: '14px' }}>Starting From £570</p>
            </div>
          </div>

          <div className={Styles["brand-card"]}>
            <img src={bmwLogo} alt="BMW" className={Styles["brand-logo"]} />
            <div className={Styles["brand-info"]}>
              <div className={Styles['titleLogo']}>BMW</div>
              <p style={{ color: 'rgba(181, 181, 181, 1)', fontSize: '14px' }}>Starting From £570</p>
            </div>
          </div>

          <div className={Styles["brand-card"]}>
            <img src={ferariLogo} alt="Ferrari" className={Styles["brand-logo"]} />
            <div className={Styles["brand-info"]}>
              <div className={Styles['titleLogo']}>Ferrari</div>
              <p style={{ color: 'rgba(181, 181, 181, 1)', fontSize: '14px' }}>Starting From £570</p>
            </div>
          </div>

          {/* Second Row */}
          <div className={Styles["brand-card"]}>
            <img src={lamborghiniLogo} alt="Lamborghini" className={Styles["brand-logo"]} />
            <div className={Styles["brand-info"]}>
              <div className={Styles['titleLogo']}>Lamborghini</div>
              <p style={{ color: 'rgba(181, 181, 181, 1)', fontSize: '14px' }}>Starting From £570</p>
            </div>
          </div>

          <div className={Styles["brand-card"]}>
            <img src={mercedesLogo} alt="Mercedes" className={Styles["brand-logo"]} />
            <div className={Styles["brand-info"]}>
              <div className={Styles['titleLogo']}>Mercedes</div>
              <p style={{ color: 'rgba(181, 181, 181, 1)', fontSize: '14px' }}>Starting From £570</p>
            </div>
          </div>

          <div className={Styles["brand-card"]}>
            <img src={rangeRoverLogo} alt="Range Rover" className={Styles["brand-logo"]} />
            <div className={Styles["brand-info"]}>
              <div className={Styles['titleLogo']}>Range Rover</div>
              <p style={{ color: 'rgba(181, 181, 181, 1)', fontSize: '14px' }}>Starting From £570</p>
            </div>
          </div>
        </div>

        <Link to='/brand' className={Styles["view-all-btn"]}>View All</Link>
      </div>
    </section>
  );
}

export default MostWantedBrands;