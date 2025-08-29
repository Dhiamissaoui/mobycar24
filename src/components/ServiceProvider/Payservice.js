import Styles from '../../styles/ServiceProvider/Payservice.module.css'
import {Link} from 'react-router-dom'




function Payservice() {
    return(
        <div className={Styles.Cont}>
            <div className={Styles.header}>
                <div className={Styles.titleH}>Payement</div>
                <p className={Styles.para}>Lorem ipsum dolor sit amet consectetur. Vitae nam imperdiet in nec non odio. Id porttitor metus convallis sit.</p>
            </div>
            <div className={Styles.PageTitle}>Card Information</div>
            <div className={Styles.FormCont}>
                <div class="row">
                    <div class="col">
                        <div className={Styles.lab}>Expiry date</div>
                        <input style={{background:'rgba(242, 242, 242, 1)'}} type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div class="col">
                        <div className={Styles.lab}>Expiry date</div>
                        <input style={{background:'rgba(242, 242, 242, 1)'}} type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col">
                        <div className={Styles.lab}>Expiry date</div>
                        <input style={{background:'rgba(242, 242, 242, 1)'}} type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div class="col">
                        <div className={Styles.lab}>Expiry date</div>
                        <input style={{background:'rgba(242, 242, 242, 1)'}} type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                    </div>
                </div>
                <div className={Styles.btnCont}>
                    <Link to='/dashboard' className={Styles.pay} >Pay now</Link>
                    <Link to='/' className={Styles.cancel} >Cancel</Link>
                </div>
            </div>
            

        </div>
    )
}
export default Payservice;