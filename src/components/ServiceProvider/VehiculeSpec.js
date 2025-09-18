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
                <p>Lorem ipsum dolor sit amet consectetur. Sapien aliquet sollicitudin luctus viverra dui. Hendrerit congue magna eget adipiscing orci elit etiam consectetur natoque.</p>
            </div>
            <div className={Styles.steps}>
                <div className={Styles.line}></div>
                <div className={Styles.step}><div className={Styles.textO}>01</div></div>
                <FontAwesomeIcon icon={faChevronRight} className={Styles.rightIcon} />
                <div className={Styles.step}><div className={Styles.textO}>02</div></div>
                <FontAwesomeIcon icon={faChevronRight} className={Styles.rightIcon} />
                <div className={Styles.step}><div className={Styles.text}>03</div></div>
            </div>
            <h1>Vehicle Specification</h1>
            <div className={Styles.vehiculeInfoCont}>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <label for="exampleColorInput" className={Styles.labelx} class="form-label">Color</label>
                        <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color" />
                    </div>

                    <div className={Styles.boxT}>
                        <div className={Styles.label}>Engine</div>
                        <input type='text' placeholder='2.4L 4 Cylinder' className={Styles.inp} />
                    </div>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <div className={Styles.label}>Transmission</div>
                        <select class={`form-select ${Styles.selectV}`} aria-label="Default select example">
                            <option selected>Automatic</option>
                            <option value="1">Manuel</option>
                            <option value="2">Mecatronic</option>
                            <option value="3">elecrtric</option>
                        </select>
                    </div>
                    <div className={Styles.boxT}>
                        <div className={Styles.label}>Horse Power</div>
                        <input type='text' placeholder='340' className={Styles.inp} />
                    </div>
                </div>
                <div className={Styles.box}>
                    <div className={Styles.boxO}>
                        <div className={Styles.label}>Fuel Type</div>
                        <select select class={`form-select ${Styles.selectV}`} aria-label="Default select example">
                            <option selected>Petrol</option>
                            <option value="1">Gas</option>
                            <option value="2">Diesel</option>
                            <option value="3">elecrtric</option>
                        </select>
                    </div>
                    <div className={Styles.boxT}>
                        <div className={Styles.label}>Body Type</div>
                        <select class={`form-select ${Styles.selectV}`} aria-label="Default select example">
                            <option selected>Sedan</option>
                            <option value="1">Convertible</option>
                            <option value="2">Coupe</option>
                            <option value="3">Van</option>
                        </select>
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