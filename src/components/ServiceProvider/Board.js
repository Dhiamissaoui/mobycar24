import Styles from '../../styles/ServiceProvider/Board.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';

function BoardS() {

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
                <div className={Styles.step}><div className={Styles.text}>02</div></div>
                <FontAwesomeIcon icon={faChevronRight} className={Styles.rightIcon} />
                <div className={Styles.step}><div className={Styles.text}>03</div></div>
            </div>
            <div className={Styles.sectionTitle}>Vehicle Information</div>
            <div className={Styles.vehiculeInfoCont}>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <div className={Styles.label}>Vehicle Name</div>
                        <input type='text' placeholder='Enter Vehicle Name' className={Styles.inp} />
                    </div>
                    <div className={Styles.boxT}>
                        <div className={Styles.label}>Vehicle Number</div>
                        <input type='text' placeholder='Enter Vehicle Number' className={Styles.inp} />
                    </div>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <div className={Styles.label}>Model Number</div>
                        <input type='text' placeholder='Enter Model Number' className={Styles.inp} />
                    </div>
                    <div className={Styles.boxT}>
                        <div className={Styles.label}>Registration Number</div>
                        <input type='text' placeholder='Enter Registration Number' className={Styles.inp} />
                    </div>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <div className={Styles.label}>Manufacturing Brand Name</div>
                        <div className="dropdown">
                            <button className={`btn dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Enter Manufacturing Brand Name
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">BMW</button></li>
                                <li><button className="dropdown-item" type="button">Mercedes</button></li>
                                <li><button className="dropdown-item" type="button">Audi</button></li>
                                <li><button className="dropdown-item" type="button">Toyota</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.boxT}>
                        <div className={Styles.label}>Manufacturing Year</div>
                        <div className="dropdown">
                            <button className={`btn  dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Manufacturing Year
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">2024</button></li>
                                <li><button className="dropdown-item" type="button">2023</button></li>
                                <li><button className="dropdown-item" type="button">2022</button></li>
                                <li><button className="dropdown-item" type="button">2021</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <div className={Styles.label}>hourly/daily rental charges</div>
                        <div className={Styles.rentalCharges}>
                            <div className="dropdown w-50">
                                <button className={`btn  dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Daily
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Daily</button></li>
                                    <li><button className="dropdown-item" type="button">Hourly</button></li>
                                </ul>
                            </div>
                            <div className={Styles.separator}></div>
                            <div className={`${Styles.currency} w-50`}>£161</div>
                        </div>
                    </div>
                    <div className={Styles.boxT} >
                        <div className={Styles.label}>Vehicle Category</div>
                        <div className="dropdown">
                            <button className={`btn  dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sports
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Sports</button></li>
                                <li><button className="dropdown-item" type="button">Luxury</button></li>
                                <li><button className="dropdown-item" type="button">Economy</button></li>
                                <li><button className="dropdown-item" type="button">SUV</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={Styles.box} id={Styles.dispB}>
                    <div className={Styles.label}>Vehicle Description</div>
                    <textarea className={Styles.area} rows={4} cols={10} placeholder='Enter your Vehicle Description'></textarea>
                </div>
                <div className={Styles.box} id={Styles.dispB}>
                    <div className={Styles.label} >Vehicle Condition</div>
                    <textarea className={Styles.area} rows={4} cols={10} placeholder='Enter your Vehicle Condition'></textarea>
                </div>
                <div className={Styles.boxO} id={Styles.dispX}>
                    <div className={Styles.box} id={Styles.boxOne}>
                        <div className={Styles.label}>kilometres covered/day</div>
                        <div className="dropdown">
                            <button className={`btn  dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                250
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">250</button></li>
                                <li><button className="dropdown-item" type="button">300</button></li>
                                <li><button className="dropdown-item" type="button">350</button></li>
                                <li><button className="dropdown-item" type="button">400</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.boxT} id={Styles.box}>
                        <div className={Styles.label}>Insurance Details</div>
                        <div className="dropdown">
                            <button className={`btn dropdown-toggle ${Styles.dropdownBtn}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Personal
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Personal</button></li>
                                <li><button className="dropdown-item" type="button">Commercial</button></li>
                                <li><button className="dropdown-item" type="button">Fleet</button></li>
                                <li><button className="dropdown-item" type="button">None</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={Styles.locationContainer}>
                    <div className={Styles.locationItem}>
                        <div className={Styles.label}>Pick-up location</div>
                        <input type='text' placeholder='Enter your Pick-up location' className={Styles.inp} />
                    </div>
                    <div className={Styles.locationItem}>
                        <div className={Styles.label}>Drop-off location</div>
                        <input type='text' placeholder='Enter your Drop-off location' className={Styles.inp} />
                    </div>
                </div>

                <Link to="/Vspec" className={Styles.btn}>Continue</Link>


            </div >
        </div >
    )
}
export default BoardS;