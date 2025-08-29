
import styles from '../../styles/Brand/Brands.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch,
  faFilter,
  faChevronRight,
  faChevronLeft         
} from '@fortawesome/free-solid-svg-icons';

// Import images
import audiLogo from '../../images/audi logo.png';
import bmwLogo from '../../images/bmw logo.png' ;
import ferariLogo from '../../images/ferrari logo.png';

import lamborghiniLogo from '../../images/lambo logo.png';
import mercedesLogo from '../../images/merc logo.png';
import rangeRoverLogo from '../../images/range logo.png';

import aston from '../../images/aston-logo.png';
import bently from '../../images/bently-logo.png';
import alpha from '../../images/alpha-logo.png';

import cadillac from '../../images/cadillac.png';
import chev from '../../images/chev-logo.png';
import dodge from '../../images/dodge-logo.png';

import fiat from '../../images/fiat-logo.png';
import ford from '../../images/ford-logo.png';
import gmc from '../../images/gmc-logo.png';

import honda from '../../images/honda-logo.png';
import hyundai from '../../images/hyundai-logo.png';
import infiniti from '../../images/infiniti-logo.png';

import jac from '../../images/jac-logo.png';
import jaguar from '../../images/jaguar-logo.png';
import jeep from '../../images/jeep-logo.png';

import kia from '../../images/kia-logo.png';
import lexus from '../../images/lexus-logo.png';
import lincoln from '../../images/lincoln-logo.png';

import mazerati from '../../images/maserati-logo.png';
import mazda from '../../images/mazda-logo.png';
import mclaren from '../../images/mclaren-logo.png';

function RentCar() {

  return (
    <div className={styles['rent-car-container']}>
      <div className={styles['car-header']}>
        <h1 className={styles['page-title']}>Rent a Car</h1>

        <div className={styles['upper-right']}>

          <div className={styles['search-bar']}>
            <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} />
            <input placeholder='Search by vehicle model/brand' className={styles['inp']} />
          </div>

          <button content='Search' className={styles['search-btn']} >Search</button>
          <FontAwesomeIcon icon={faFilter} className={styles['filter']} />
        </div>
      </div>
      
      <div className={styles["brands-grid"]}>
        {/* First Row */}
        <div className={styles["brands-card"]}>
          <img src={audiLogo} alt="Audi" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>Audi</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={bmwLogo} alt="BMW" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>BMW</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={ferariLogo} alt="Ferrari" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>Ferrari</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        {/* Second Row */}
        <div className={styles["brands-card"]}>
          <img src={lamborghiniLogo} alt="Lamborghini" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>Lamborghini</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={mercedesLogo} alt="Mercedes" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>Mercedes</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={rangeRoverLogo} alt="Range Rover" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>Range Rover</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        {/* third Row */}
        <div className={styles["brands-card"]}>
          <img src={aston} alt="Lamborghini" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>Aston Martin</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={bently} alt="Mercedes" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>bently</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={alpha} alt="Range Rover" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>Alpha Romeo</h3>
            <p>Starting From £570</p>
          </div>
        </div>
        {/* forth Row */}
        <div className={styles["brands-card"]}>
          <img src={cadillac} alt="Lamborghini" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>cadillac</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={chev} alt="Mercedes" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>chevrolet</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={dodge} alt="Range Rover" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>Dodge</h3>
            <p>Starting From £570</p>
          </div>
        </div>
        {/* fifth Row */}
        <div className={styles["brands-card"]}>
          <img src={fiat} alt="Lamborghini" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>fiat</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={ford} alt="Mercedes" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>ford</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={gmc} alt="Range Rover" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>GMC</h3>
            <p>Starting From £570</p>
          </div>
        </div>
        {/* six Row */}
        <div className={styles["brands-card"]}>
          <img src={honda} alt="Lamborghini" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>honda</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={hyundai} alt="Mercedes" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>hyundai</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={infiniti} alt="Range Rover" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>infiniti</h3>
            <p>Starting From £570</p>
          </div>
        </div>
      
      {/* seven Row */}
        <div className={styles["brands-card"]}>
          <img src={jac} alt="Lamborghini" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>jac</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={jaguar} alt="Mercedes" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>jaguar</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={jeep} alt="Range Rover" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>jeep</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        {/* eight Row */}
        <div className={styles["brands-card"]}>
          <img src={kia} alt="Lamborghini" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>kia</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={lexus} alt="Mercedes" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>lexus</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={lincoln} alt="Range Rover" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>lincoln</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        {/* nine Row */}
        <div className={styles["brands-card"]}>
          <img src={mazerati} alt="Lamborghini" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>mazerati</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={mazda} alt="Mercedes" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>mazda</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className={styles["brands-card"]}>
          <img src={mclaren} alt="Range Rover" className={styles["brand-logo"]} />
          <div className={styles["brand-info"]}>
            <h3>mclaren</h3>
            <p>Starting From £570</p>
          </div>
        </div>
      </div>


      <div className={styles['btns']}>
        <div className={styles['btn-left']}><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className={styles['btn-p']}>1</div>
        <div className={styles['btn-p']}>2</div>
        <div className={styles['btn-p']}>...</div>
        <div className={styles['btn-p']}>9</div>
        <div className={styles['btn-p']}>10</div>
        <div className={styles['btn-right']}><FontAwesomeIcon icon={faChevronRight} /></div>
      </div>
    </div>
  );
}

export default RentCar;