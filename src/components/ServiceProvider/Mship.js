import Styles from '../../styles/ServiceProvider/Mship.module.css'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTag,
    faCheck
} from '@fortawesome/free-solid-svg-icons';


function Mship() {
    return (
        <div className={Styles.Cont}>
            <div className={Styles.header}>
                <div className={Styles.titleH}>Select Membership Plans</div>
                <div className={Styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Vitae nam imperdiet in nec non odio. Id porttitor metus convallis sit. At ornare molestie a enim urna nibh risus.</div>
            </div>
            <div className={Styles.SwitchCont}>
                <div className={`${Styles.S1} ${Styles.active}`}>Monthly</div>
                <div className={Styles.S2}>Yearly</div>
            </div>
            <div className={Styles.SubCont}>
                <div className={Styles.subBox}>
                    <FontAwesomeIcon icon={faTag} className={Styles.SubIcon} />
                    <div className={Styles.SubType}>Basic</div>
                    <div className={Styles.SubPrice}><span className={Styles.SubNum}>£99</span>/month</div>
                    <hr />
                    <div className={Styles.head}>Features :</div>
                    <div className={Styles.para}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div className={Styles.para}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div className={Styles.para}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div className={Styles.para}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div className={Styles.para}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div className={Styles.parax}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <Link to='/payService' className={Styles.startBtn}>Get Started</Link>
                </div>
                <div className={Styles.subBox} id={Styles.purpleC}>
                    <FontAwesomeIcon icon={faTag} className={Styles.SubIcon} id={Styles.purpleI} />
                    <div className={Styles.SubType} id={Styles.purpleIC}>Pro</div>
                    <div className={Styles.SubPrice} id={Styles.color}><span className={Styles.SubNum} id={Styles.color}>£149</span>/month</div>
                    <hr />
                    <div className={Styles.head} id={Styles.color}>Features :</div>
                    <div id={Styles.color} className={Styles.para} ><FontAwesomeIcon icon={faCheck} id={Styles.colorxbg} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div id={Styles.color} className={Styles.para} ><FontAwesomeIcon icon={faCheck} id={Styles.colorxbg} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div id={Styles.color} className={Styles.para} ><FontAwesomeIcon icon={faCheck} id={Styles.colorxbg} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div id={Styles.color} className={Styles.para} ><FontAwesomeIcon icon={faCheck} id={Styles.colorxbg} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div id={Styles.color} className={Styles.para} ><FontAwesomeIcon icon={faCheck} id={Styles.colorxbg} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div id={Styles.color} className={Styles.parax}><FontAwesomeIcon icon={faCheck} id={Styles.colorxbg} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <Link to='/payService' className={Styles.startBtn} id={Styles.startColor}>Get Started</Link>
                </div>
                <div className={Styles.subBox}>
                    <FontAwesomeIcon icon={faTag} className={Styles.SubIcon} />
                    <div className={Styles.SubType}>Diamond</div>
                    <div className={Styles.SubPrice}><span className={Styles.SubNum}>£199</span>/month</div>
                    <hr />
                    <div className={Styles.head} >Features :</div>
                    <div className={Styles.para}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div className={Styles.para}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div className={Styles.para}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div className={Styles.para}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div className={Styles.para}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <div className={Styles.parax}><FontAwesomeIcon icon={faCheck} className={Styles.SubIconT} />Lorem ipsum dolor sit amet</div>
                    <Link to='/payService' className={Styles.startBtn}>Get Started</Link>
                </div>


            </div>
        </div>
    )
}
export default Mship;