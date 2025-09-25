import Styles from '../../styles/ServiceProvider/VehiculeSpec.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';


function VehiculeSpec() {
    return (
        <div className={Styles.Cont}>
            <div className={Styles.header}>
                <div className={Styles.titleH}>John Doe, List your vehicle</div>
                <div className={Styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Sapien aliquet sollicitudin luctus viverra dui. Hendrerit congue magna eget adipiscing orci elit etiam consectetur natoque.</div>
            </div>
            <div className={Styles.steps}>
                <div className={Styles.line}></div>
                <div className={Styles.step}><div className={Styles.textO}>01</div></div>
                <FontAwesomeIcon icon={faChevronRight} className={Styles.rightIcon} />
                <div className={Styles.step}><div className={Styles.textO}>02</div></div>
                <FontAwesomeIcon icon={faChevronRight} className={Styles.rightIcon} />
                <div className={Styles.step}><div className={Styles.text}>03</div></div>
            </div>
            <div className={Styles.sectionTitle}>Vehicle Specification</div>
            <div className={Styles.vehiculeInfoCont}>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <div className={Styles.label}>Color</div>
                        <div className="dropdown">
                            <button className={`btn btn-outline-secondary dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className={Styles.colorOption}>
                                    <div className={Styles.colorBox} style={{ backgroundColor: '#563d7c' }}></div>
                                    <span>Blue</span>
                                </div>
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">
                                    <div className={Styles.colorOption}>
                                        <div className={Styles.colorBox} style={{ backgroundColor: '#563d7c' }}></div>
                                        <span>Blue</span>
                                    </div>
                                </button></li>
                                <li><button className="dropdown-item" type="button">
                                    <div className={Styles.colorOption}>
                                        <div className={Styles.colorBox} style={{ backgroundColor: '#ff0000' }}></div>
                                        <span>Red</span>
                                    </div>
                                </button></li>
                                <li><button className="dropdown-item" type="button">
                                    <div className={Styles.colorOption}>
                                        <div className={Styles.colorBox} style={{ backgroundColor: '#00ff00' }}></div>
                                        <span>Green</span>
                                    </div>
                                </button></li>
                                <li><button className="dropdown-item" type="button">
                                    <div className={Styles.colorOption}>
                                        <div className={Styles.colorBox} style={{ backgroundColor: '#000000' }}></div>
                                        <span>Black</span>
                                    </div>
                                </button></li>
                            </ul>
                        </div>
                    </div>

                    <div className={Styles.boxT}>
                        <div className={Styles.label}>Engine</div>
                        <input type='text' placeholder='2.4L 4 Cylinder' className={Styles.inp} />
                    </div>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <div className={Styles.label}>Transmission</div>
                        <div className="dropdown">
                            <button className={`btn btn-outline-secondary dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Automatic
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Automatic</button></li>
                                <li><button className="dropdown-item" type="button">Manual</button></li>
                                <li><button className="dropdown-item" type="button">Mecatronic</button></li>
                                <li><button className="dropdown-item" type="button">Electric</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.boxT}>
                        <div className={Styles.label}>Horse Power</div>
                        <input type='text' placeholder='340' className={Styles.inp} />
                    </div>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <div className={Styles.label}>Fuel Type</div>
                        <div className="dropdown">
                            <button className={`btn btn-outline-secondary dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Petrol
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Petrol</button></li>
                                <li><button className="dropdown-item" type="button">Gas</button></li>
                                <li><button className="dropdown-item" type="button">Diesel</button></li>
                                <li><button className="dropdown-item" type="button">Electric</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.boxT}>
                        <div className={Styles.label}>Body Type</div>
                        <div className="dropdown">
                            <button className={`btn btn-outline-secondary dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sedan
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Sedan</button></li>
                                <li><button className="dropdown-item" type="button">Convertible</button></li>
                                <li><button className="dropdown-item" type="button">Coupe</button></li>
                                <li><button className="dropdown-item" type="button">Van</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <div className={Styles.label}>0-100KM/H</div>
                        <input type='text' placeholder='8.4sec' className={Styles.inp} />
                    </div>
                    <div className={Styles.boxT} >
                        <div className={Styles.label}>Max Speed</div>
                        <input type='text' placeholder='232' className={Styles.inp} />
                    </div>
                </div>
                <Link to='/UploadImage' className={Styles.btn}>Continue</Link>
            </div>
        </div >
    )
}
export default VehiculeSpec;