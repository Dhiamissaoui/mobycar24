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
                <p>Lorem ipsum dolor sit amet consectetur. Sapien aliquet sollicitudin luctus viverra dui. Hendrerit congue magna eget adipiscing orci elit etiam consectetur natoque.</p>
            </div>
            <div className={Styles.steps}>
                <div className={Styles.line}></div>
                <div className={Styles.step}><div className={Styles.textO}>01</div></div>
                <FontAwesomeIcon icon={faChevronRight} className={Styles.rightIcon} />
                <div className={Styles.step}><div className={Styles.text}>02</div></div>
                <FontAwesomeIcon icon={faChevronRight} className={Styles.rightIcon} />
                <div className={Styles.step}><div className={Styles.text}>03</div></div>
            </div>
            <h1>Vehicle Information</h1>
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
                        <select className={Styles.selectB}>
                            <option selected>Enter Manufacturing Brand Name</option>
                            <option>opt</option>
                            <option>opt</option>
                            <option>opt</option>
                        </select>
                    </div>
                    <div className={Styles.boxT}>
                        <div className={Styles.label}>Manufacturing Year</div>
                        <select className={Styles.selectB}>
                            <option selected>Manufacturing Year</option>
                            <option>opt</option>
                            <option>opt</option>
                            <option>opt</option>
                        </select>
                    </div>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <div className={Styles.label}>hourly/daily rental charges</div>
                        <div className={Styles.selectCont}>
                            <select className={Styles.selectB}>
                                <option selected>Manufacturing Year</option>
                                <option>opt</option>
                                <option>opt</option>
                                <option>opt</option>
                            </select>
                            <div className={Styles.selectAmount}>£161</div>
                        </div>
                    </div>
                    <div className={Styles.boxT} >
                        <div className={Styles.label}>Vehicle Category</div>
                        <select className={Styles.selectB}>
                            <option selected>Sports</option>
                            <option>opt</option>
                            <option>opt</option>
                            <option>opt</option>
                        </select>
                    </div>
                </div>
                <div className={Styles.box} id={Styles.dispB}>
                    <div className={Styles.label}>Vehicle Number</div>
                    <textarea className={Styles.area} rows={30} cols={10} placeholder='Enter your Vehicle Description'></textarea>
                </div>
                <div className={Styles.box} id={Styles.dispB}>
                    <div className={Styles.label} >Vehicle Condition</div>
                    <textarea className={Styles.area} rows={30} cols={10} placeholder='Enter your Vehicle Condition'></textarea>
                </div>
                <div className={Styles.boxO} id={Styles.dispX}>
                    <div className={Styles.box} id={Styles.boxOne}>
                        <div className={Styles.label}>kilometres covered/day</div>
                        <select className={Styles.selectB}>
                            <option selected>250</option>
                            <option>opt</option>
                            <option>opt</option>
                            <option>opt</option>
                        </select>
                    </div>
                    <div className={Styles.boxT} id={Styles.box}>
                        <div className={Styles.label}>Insurance Details</div>
                        <select className={Styles.selectB}>
                            <option selected>Personal</option>
                            <option>opt</option>
                            <option>opt</option>
                            <option>opt</option>
                        </select>
                    </div>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.label}>Pick-up location</div>
                    <input type='text' placeholder='Enter Pick-up location' className={Styles.inp} />
                </div>
                <div className={Styles.box}>
                    <div className={Styles.label}>Drop-off location</div>
                    <input type='text' placeholder='Enter your Drop-off location' className={Styles.inp} />
                </div>
                <Link to='/Vspec' className={Styles.btn}>Continue</Link>
            </div>
        </div>
    )
}
export default BoardS;