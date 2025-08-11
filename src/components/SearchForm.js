
import '../styles/SearchForm.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMagnifyingGlass,
  faLocationDot,
  faClock,
  faCar
} from '@fortawesome/free-solid-svg-icons';


function SearchForm() {
  return (
    <div className='search-container'>
      <form className='search-form'>
        <div className='search-group'>
      
             <FontAwesomeIcon icon={faMagnifyingGlass} className="s1-icon" />
            <input type='text' placeholder='Enter location' />
          
        </div>
        
        <div className='search-group'>
         
            <FontAwesomeIcon icon={faLocationDot} className="s1-icon" />
            <select>
              <option>Ariana</option>
              <option>Bizerte</option>
              <option>Sousse</option>
              <option>Sfax</option>
            </select>
          
        </div>

        <div className='search-group'>
          
            <FontAwesomeIcon icon={faCar} className="s1-icon" />
            <select>
              <option>Select car type</option>
              <option>SUV</option>
              <option>Sedan</option>
              <option>Sports</option>
            </select>
         
        </div>
        

        <div className='search-group'>
          
            <FontAwesomeIcon icon={faClock} className="s1-icon" />
            <select>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>4 hours</option>
            </select>
          
        </div>
        
        <button type='submit' className='search-button'>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;