import Styles from '../../styles/ServiceProvider/Payservice.module.css'
import { Link } from 'react-router-dom'




function Payservice() {
    return (
        <div className={Styles.Cont}>
            <div className={Styles.header}>
                <div className={Styles.titleH}>Payment</div>
                <div className={Styles.subtitle}>Lorem ipsum dolor sit amet consectetur. Vitae nam imperdiet in nec non odio. Id porttitor metus convallis sit.</div>
            </div>
            <div className={Styles.PageTitle}>Card Information</div>
            <div className={Styles.FormCont}>
                <div className={Styles.formRow}>
                    <div className={Styles.formCol}>
                        <div className={Styles.lab}>Card Holder Name</div>
                        <input type="text" className={Styles.inp} placeholder="Enter Card Holder Name" />
                    </div>
                    <div className={Styles.formCol}>
                        <div className={Styles.lab}>Card Number</div>
                        <input type="text" className={Styles.inp} placeholder="Enter Card Number" />
                    </div>
                </div>
                <div className={Styles.formRow}>
                    <div className={Styles.formCol}>
                        <div className={Styles.lab}>Expiry Date</div>
                        <input type="text" className={Styles.inp} placeholder="00/00" />
                    </div>
                    <div className={Styles.formCol}>
                        <div className={Styles.lab}>CVV Number</div>
                        <input type="text" className={Styles.inp} placeholder="Enter CVV Number" />
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