
import '../styles/MostWantedBrands.css';

// Import your brand logos
import audiLogo from '../images/audi logo.png';
import bmwLogo from '../images/bmw logo.png';
import ferariLogo from '../images/ferrari logo.png';
import lamborghiniLogo from '../images/lambo logo.png';
import mercedesLogo from '../images/merc logo.png';
import rangeRoverLogo from '../images/range logo.png';


function MostWantedBrands() {
  return (
    <section className="most-wanted-section">
      <div className="header-container">
        <div className="header-content">
          <h1>Most Wanted Car Rental Brands</h1>
          <p className="description">Lorem ipsum dolor sit amet consectetur. Adipiscing morbi tellus arcu sed morbi. Nibh amet dignissim in ac duis etiam consectetur dolor ultrices. Commodo risus egestas hendrerit morbi mattis ut vitae arcu.</p>
        </div>
      </div>

      <div className="brands-grid">
        {/* First Row */}
        <div className="brand-card">
          <img src={audiLogo} alt="Audi" className="brand-logo" />
          <div className="brand-info">
            <h3>Audi</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className="brand-card">
          <img src={bmwLogo} alt="BMW" className="brand-logo" />
          <div className="brand-info">
            <h3>BMW</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className="brand-card">
          <img src={ferariLogo} alt="Ferrari" className="brand-logo" />
          <div className="brand-info">
            <h3>Ferrari</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="brand-card">
          <img src={lamborghiniLogo} alt="Lamborghini" className="brand-logo" />
          <div className="brand-info">
            <h3>Lamborghini</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className="brand-card">
          <img src={mercedesLogo} alt="Mercedes" className="brand-logo" />
          <div className="brand-info">
            <h3>Mercedes</h3>
            <p>Starting From £570</p>
          </div>
        </div>

        <div className="brand-card">
          <img src={rangeRoverLogo} alt="Range Rover" className="brand-logo" />
          <div className="brand-info">
            <h3>Range Rover</h3>
            <p>Starting From £570</p>
          </div>
        </div>
      </div>

      <button className="view-all-btn">View All</button>
    </section>
  );
}

export default MostWantedBrands;